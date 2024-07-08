import { test, expect } from "@playwright/test";

const url = "http://localhost:3000/";
const parcelName = "Large Package";
const parcelStatus = "In Transit";
const parcelCost = "5.99";

test.describe("Details component is rendering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.locator('[data-test-id="loader"]').waitFor({ state: "hidden" });
  });

  test("renders details component", async ({ page }) => {
    await expect(
      page.locator('[data-test-id="details-component"]')
    ).toBeVisible();
  });

  test("displays parcel details", async ({ page }) => {
    await expect(page.locator('[data-test-id="details-name"]')).toBeVisible();
    await expect(page.locator('[data-test-id="details-name"]')).toHaveText(
      parcelName
    );

    await expect(page.locator('[data-test-id="details-status"]')).toBeVisible();
    await expect(page.locator('[data-test-id="details-status"]')).toHaveText(
      parcelStatus
    );
    await expect(page.locator('[data-test-id="details-cost"]')).toBeVisible();
    await expect(page.locator('[data-test-id="details-cost"]')).toHaveText(
      parcelCost
    );
  });
});
