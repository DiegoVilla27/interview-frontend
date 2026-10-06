import { z } from "zod";

export const answerEvaluationSchema = z.object({
  score: z.number().describe("Nota de 0 a 10 de la respuesta del candidato"),
  verdict: z.enum(["insuficiente", "parcial", "solida", "excelente"]),
  strengths: z.array(z.string()).describe("Aciertos concretos de la respuesta"),
  gaps: z.array(z.string()).describe("Conceptos importantes que faltan o son incorrectos"),
  followUpQuestion: z.string().describe("La repregunta que haría un entrevistador a continuación"),
  improvedAnswer: z.string().describe("Versión mejorada y concisa de la respuesta, en 4-6 frases")
});

export type IAnswerEvaluation = z.infer<typeof answerEvaluationSchema>;

export interface IEvaluationInput {
  apiKey: string;
  question: string;
  level: string;
  modelAnswer: string;
  pitfalls: string[];
  candidateAnswer: string;
}

const MODEL = "claude-opus-5-5";

const SYSTEM_PROMPT = `Eres un entrevistador técnico senior de frontend que evalúa respuestas habladas o escritas en una entrevista real.
Compara la respuesta del candidato con la respuesta de referencia y con los errores típicos indicados.
Valora la comprensión del concepto, la precisión técnica y la capacidad de explicarlo, no la coincidencia literal de palabras.
Sé exigente pero justo con el nivel de la pregunta, y responde siempre en español.`;

/**
 * Evalúa una respuesta con Claude usando la clave del propio usuario (BYOK).
 * El SDK se carga bajo demanda para no penalizar el bundle inicial.
 */
export const evaluateAnswer = async (input: IEvaluationInput): Promise<IAnswerEvaluation> => {
  const [{ default: Anthropic }, { betaZodOutputFormat }] = await Promise.all([
    import("@anthropic-ai/sdk"),
    import("@anthropic-ai/sdk/helpers/beta/zod")
  ]);

  // La clave la introduce el propio usuario y solo se envía a api.anthropic.com
  const client = new Anthropic({ apiKey: input.apiKey, dangerouslyAllowBrowser: true });

  const response = await client.beta.messages.parse({
    model: MODEL,
    max_tokens: 16000,
    output_config: { effort: "medium", format: betaZodOutputFormat(answerEvaluationSchema) },
    // Si los clasificadores de seguridad rechazan la petición, el servidor la reintenta en otro modelo
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: [
          `<pregunta nivel="${input.level}">${input.question}</pregunta>`,
          `<respuesta_de_referencia>${input.modelAnswer}</respuesta_de_referencia>`,
          `<errores_tipicos>${input.pitfalls.map((p) => `- ${p}`).join("\n")}</errores_tipicos>`,
          `<respuesta_del_candidato>${input.candidateAnswer}</respuesta_del_candidato>`
        ].join("\n\n")
      }
    ]
  });

  if (response.stop_reason === "refusal") {
    throw new Error("El modelo no pudo evaluar esta respuesta. Prueba a reformularla.");
  }
  if (!response.parsed_output) {
    throw new Error("La evaluación no devolvió un resultado válido.");
  }
  return response.parsed_output;
};

/** Traduce los errores de la API a mensajes útiles para el usuario. */
export const describeEvaluationError = async (error: unknown): Promise<string> => {
  const { default: Anthropic } = await import("@anthropic-ai/sdk");
  if (error instanceof Anthropic.AuthenticationError) return "La API key no es válida. Revísala en Ajustes.";
  if (error instanceof Anthropic.PermissionDeniedError) return "Tu API key no tiene permiso para usar este modelo.";
  if (error instanceof Anthropic.RateLimitError) return "Has alcanzado el límite de peticiones. Espera un momento y reintenta.";
  if (error instanceof Anthropic.APIConnectionError) return "No se pudo conectar con la API de Anthropic. Revisa tu conexión.";
  if (error instanceof Anthropic.APIError) return `Error de la API (${error.status}): ${error.message}`;
  return error instanceof Error ? error.message : "Error desconocido al evaluar la respuesta.";
};
