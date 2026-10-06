import { expect, test } from "./fixtures";

const evaluation = {
  score: 7,
  verdict: "solida",
  strengths: ["Define bien la red de redes"],
  gaps: ["No menciona BGP"],
  followUpQuestion: "¿Qué es un IXP?",
  improvedAnswer: "Internet es una red de redes…"
};

test("entrevista simulada desde una ruta, con evaluación de IA simulada", async ({ page }) => {
  // Nunca se llama a la API real: se responde primero 401 y después una evaluación válida
  let calls = 0;
  let requestBody: Record<string, unknown> = {};
  await page.route("https://api.anthropic.com/**", async (route) => {
    calls++;
    requestBody = route.request().postDataJSON();
    if (calls === 1) {
      return route.fulfill({
        status: 401,
        contentType: "application/json",
        body: JSON.stringify({ type: "error", error: { type: "authentication_error", message: "invalid x-api-key" } })
      });
    }
    return route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({
        id: "msg_test",
        type: "message",
        role: "assistant",
        model: "claude-opus-5-5",
        content: [{ type: "text", text: JSON.stringify(evaluation) }],
        stop_reason: "end_turn",
        stop_sequence: null,
        usage: { input_tokens: 10, output_tokens: 10 }
      })
    });
  });

  await page.goto("/");
  await page.getByRole("button", { name: "Ajustes" }).click();
  await page.getByPlaceholder("sk-ant-...").fill("sk-ant-test");
  await page.getByRole("button", { name: "Guardar" }).click();

  await page.getByRole("button", { name: "Rutas", exact: true }).click();
  await page.getByRole("button", { name: /Junior Frontend/ }).click();
  await page.getByRole("button", { name: "Entrevista simulada" }).click();
  await page.getByRole("combobox").nth(1).selectOption("3");
  await page.getByRole("button", { name: "Empezar entrevista" }).click();

  await expect(page.getByText("Pregunta 1 de 3 · Junior Frontend")).toBeVisible();
  await page.getByLabel("Tu respuesta").fill("Una red global de redes conectadas mediante TCP/IP.");
  await page.getByRole("button", { name: "Enviar respuesta" }).click();
  await expect(page.getByText("El entrevistador repregunta")).toBeVisible();

  await page.getByRole("button", { name: "Evaluar con IA" }).click();
  await expect(page.getByText("La API key no es válida")).toBeVisible();
  await page.getByRole("button", { name: "Evaluar con IA" }).click();
  await expect(page.getByText("7/10 · solida")).toBeVisible();
  expect(requestBody).toMatchObject({ model: "claude-opus-5-5", fallbacks: "default" });

  await page.getByRole("button", { name: "La clavé" }).click();
  await page.getByRole("button", { name: "No lo sé" }).click();
  await page.getByRole("button", { name: "No la sabía" }).click();
  await page.getByRole("button", { name: "No lo sé" }).click();
  await page.getByRole("button", { name: "Parcial" }).click();

  await expect(page.getByText("Entrevista completada")).toBeVisible();
  await expect(page.getByText(/Autoevaluación media: 50%/)).toBeVisible();
});
