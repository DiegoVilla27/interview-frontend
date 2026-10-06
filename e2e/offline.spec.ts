import { expect, test } from "./fixtures";

test("funciona sin conexión gracias al service worker", async ({ page, context }) => {
  await page.goto("/");
  await expect(page.getByText("Lista para usar sin conexión")).toBeVisible({ timeout: 30_000 });
  await page.reload();
  await page.waitForFunction(() => navigator.serviceWorker.controller !== null);

  await context.setOffline(true);
  await page.reload();

  // Un módulo que nunca se abrió estando online también está precacheado
  await page.getByText("Flutter", { exact: true }).first().click();
  await page.getByText("¿Qué es Flutter y qué lenguaje utiliza?").click();
  await page.getByText("Diagrama Visual").click();
  await expect(page.locator(".diagram-container svg").first()).toBeVisible();
});
