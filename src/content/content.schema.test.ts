import { describe, expect, it } from "vitest";
import { questionSchema } from "./content.schema";

const validQuestion = {
  title: "¿Qué es el event loop?",
  response: "Mecanismo que coordina la pila de llamadas con las colas de tareas.",
  level: "medio",
  visualDiagram: { id: "d1", title: "Event Loop", caption: "Pila y colas", diagramType: "event-loop" },
  interviewTips: {
    whatInterviewersWant: "Que distingas microtareas y macrotareas.",
    commonPitfalls: ["Creer que setTimeout(0) es inmediato."],
    followUps: ["¿Dónde encaja requestAnimationFrame?", "¿Qué pasa con una microtarea infinita?"]
  },
  quiz: {
    question: "¿Qué se ejecuta antes?",
    options: ["Promise.then", "setTimeout(0)", "setInterval", "requestIdleCallback"],
    correctIndex: 0,
    explanation: "Las microtareas se vacían antes de la siguiente macrotarea."
  }
};

describe("questionSchema", () => {
  it("acepta una pregunta completa", () => {
    expect(questionSchema.safeParse(validQuestion).success).toBe(true);
  });

  it.each([
    ["opciones repetidas", { quiz: { ...validQuestion.quiz, options: ["A", "A", "B", "C"] } }],
    ["correctIndex fuera de rango", { quiz: { ...validQuestion.quiz, correctIndex: 4 } }],
    ["solo 3 opciones", { quiz: { ...validQuestion.quiz, options: ["A", "B", "C"] } }],
    ["un solo follow-up", { interviewTips: { ...validQuestion.interviewTips, followUps: ["¿Solo una?"] } }],
    ["nivel desconocido", { level: "senior" }],
    ["respuesta vacía", { response: "   " }]
  ])("rechaza %s", (_, override) => {
    expect(questionSchema.safeParse({ ...validQuestion, ...override }).success).toBe(false);
  });
});
