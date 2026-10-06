import { z } from "zod";

const nonEmpty = z.string().trim().min(1);

export const quizSchema = z
  .object({
    question: nonEmpty,
    options: z.array(nonEmpty).length(4, "el quiz debe tener exactamente 4 opciones"),
    correctIndex: z.number().int().min(0).max(3),
    explanation: nonEmpty
  })
  .refine((quiz) => new Set(quiz.options).size === quiz.options.length, {
    message: "el quiz tiene opciones repetidas",
    path: ["options"]
  });

export const questionSchema = z.object({
  id: z.string().optional(),
  title: nonEmpty,
  response: nonEmpty,
  level: z.enum(["basico", "medio", "avanzado", "experto"]),
  tags: z.array(nonEmpty).optional(),
  codeExample: z
    .object({
      language: nonEmpty,
      code: nonEmpty,
      output: z.string().optional(),
      explanation: z.string().optional()
    })
    .optional(),
  visualDiagram: z.object({
    id: nonEmpty,
    title: nonEmpty,
    caption: nonEmpty,
    diagramType: nonEmpty
  }),
  interviewTips: z.object({
    whatInterviewersWant: nonEmpty,
    commonPitfalls: z.array(nonEmpty).min(1),
    followUps: z.array(nonEmpty).min(2, "se necesitan al menos 2 preguntas de seguimiento")
  }),
  quiz: quizSchema
});

export const sectionSchema = z.object({
  title: nonEmpty,
  collapse: nonEmpty,
  icon: nonEmpty,
  questions: z.array(questionSchema).min(1)
});
