import { test, expect } from "@playwright/test";

const url = "http://localhost:3000/";
const driverName = "Fedex";
const driverPhone = "(123) 456-7890";

test.describe("Carrier component is rendering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.locator('[data-test-id="loader"]').waitFor({ state: "hidden" });
  });

  test("renders carrier component", async ({ page }) => {
    await expect(
      page.locator('[data-test-id="carrier-component"]')
    ).toBeVisible();
  });

  test("displays carrier information", async ({ page }) => {
    await expect(page.locator('[data-test-id="driver-name"]')).toBeVisible();
    await expect(page.locator('[data-test-id="driver-name"]')).toHaveText(
      driverName
    );
    await expect(page.locator('[data-test-id="driver-phone"]')).toBeVisible();
    await expect(page.locator('[data-test-id="driver-phone"]')).toHaveText(
      driverPhone
    );
  });
});
