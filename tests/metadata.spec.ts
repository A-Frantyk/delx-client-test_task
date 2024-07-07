import { test, expect } from "@playwright/test";

export const url = "http://localhost:3000/";
const title = "Contracts delivery";

test.describe("Page has title and url", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("has title", async ({ page }) => {
    await page.goto(url);
    await expect(page.title()).resolves.toBe(title);
  });
  test("has url", async ({ page }) => {
    await page.goto(url);
    await expect(page.url()).toBe(url);
  });
});
