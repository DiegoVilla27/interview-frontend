import { expect, test } from "./fixtures";

test("repaso espaciado con teclado y persistencia del estado", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: /Flashcards/ }).click();
  await expect(page.getByText("15 pendientes en esta sesión")).toBeVisible();

  await page.keyboard.press("Space");
  await expect(page.getByRole("button", { name: /Bien/ })).toContainText("1 d");
  await page.keyboard.press("3");
  await expect(page.getByText("14 pendientes en esta sesión")).toBeVisible();

  const reviews = await page.evaluate(
    () => JSON.parse(localStorage.getItem("interview-frontend-storage") ?? "{}").state.reviews
  );
  expect(Object.values(reviews)).toHaveLength(1);
});
