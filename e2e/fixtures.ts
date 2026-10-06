import { expect, test as base } from "@playwright/test";

/** Cualquier error de JavaScript no capturado en la página hace fallar el test. */
export const test = base.extend<{ failOnPageErrors: void }>({
  failOnPageErrors: [
    async ({ page }, use) => {
      const errors: string[] = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await use();
      expect(errors, "errores de JavaScript en la página").toEqual([]);
    },
    { auto: true }
  ]
});

export { expect };
