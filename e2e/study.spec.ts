import { expect, test } from "./fixtures";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("abre una pregunta y recorre todas sus pestañas", async ({ page }) => {
  await page.getByText("Internet", { exact: true }).first().click();
  await page.getByText("¿Qué es Internet?").click();

  await expect(page.getByRole("heading", { name: "¿Qué es Internet?" })).toBeVisible();
  await page.getByText("Diagrama Visual").click();
  await expect(page.locator(".diagram-container svg").first()).toBeVisible();

  await page.getByText("Tips Entrevistador").click();
  await expect(page.getByText("Preguntas de seguimiento habituales")).toBeVisible();

  await page.getByText("Mini Quiz").click();
  await page.locator(".tab-body button").first().click();
  await page.getByRole("button", { name: "Comprobar Respuesta" }).click();
  await expect(page.getByText(/Respuesta (Correcta|Incorrecta)/)).toBeVisible();
});

test("la búsqueda encuentra texto que solo aparece en las respuestas", async ({ page }) => {
  await page.getByPlaceholder(/Buscar concepto/).fill("hipertexto");
  await expect(page.getByText("¿Qué es y para qué sirve el protocolo HTTP?")).toBeVisible();
});

test("marcar como dominada actualiza el progreso y sobrevive a la recarga", async ({ page }) => {
  await page.getByText("CSS", { exact: true }).first().click();
  await page.getByText("¿Qué es CSS?").click();
  await page.getByRole("button", { name: "Marcar dominada" }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByText("1/465")).toBeVisible();

  await page.reload();
  await expect(page.getByText("1/465")).toBeVisible();
});

test("el quiz rápido completa 20 preguntas y guarda el resultado", async ({ page }) => {
  await page.getByRole("button", { name: /Quiz rápido/ }).click();
  for (let i = 1; i <= 20; i++) {
    await expect(page.getByText(`Pregunta ${i} de 20`)).toBeVisible();
    await page.getByRole("button", { name: /^A\b/ }).click();
    await page.getByRole("button", { name: "Confirmar Respuesta" }).click();
    await page.getByRole("button", { name: /Siguiente Pregunta|Ver Resultados/ }).click();
  }
  await expect(page.getByText("Puntuación")).toBeVisible();
});
