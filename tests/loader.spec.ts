import { test, expect } from "@playwright/test";

const url = "http://localhost:3000/";

test.describe("Loader is shown during fetching data", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test("shows loader", async ({ page }) => {
    await expect(page.locator('[data-test-id="loader"]')).toBeVisible();
  });

  test("hides loader after data is fetched", async ({ page }) => {
    await page.waitForSelector('[data-test-id="loader"]', { state: "hidden" });
  });
});
