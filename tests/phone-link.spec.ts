import { test, expect } from "@playwright/test";

const url = "http://localhost:3000/";
const driverPhone = "(123) 456-7890";

const bg = "rgb(231, 236, 250)";
const border = "1px solid rgb(99, 119, 226)";
const fill = "rgb(99, 119, 226)";

test.describe("Driver component phone link", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.locator('[data-test-id="loader"]').waitFor({ state: "hidden" });
  });

  test("phone link contains correct phone number", async ({ page }) => {
    const expectedPhoneNumber = driverPhone;
    const phoneLinkSelector = '[data-test-id="driver-phone-link"]';

    await expect(page.locator(phoneLinkSelector)).toBeVisible();

    const hrefValue = await page
      .locator(phoneLinkSelector)
      .getAttribute("href");
    expect(hrefValue).toBe(`tel:${expectedPhoneNumber}`);
  });

  test("phone link hover, focus, and active states", async ({ page }) => {
    const phoneLinkSelector = '[data-test-id="driver-phone-link"]';

    await page.locator(phoneLinkSelector).hover();
    await expect(page.locator(phoneLinkSelector)).toHaveCSS(
      "background-color",
      bg
    );
    await expect(page.locator(phoneLinkSelector)).toHaveCSS("border", border);
    await expect(page.locator(phoneLinkSelector)).toHaveCSS("fill", fill);

    await page.locator(phoneLinkSelector).focus();
    await expect(page.locator(phoneLinkSelector)).toHaveCSS(
      "background-color",
      bg
    );
    await expect(page.locator(phoneLinkSelector)).toHaveCSS("border", border);
    await expect(page.locator(phoneLinkSelector)).toHaveCSS("fill", fill);

    await page.locator(phoneLinkSelector).click();
    await expect(page.locator(phoneLinkSelector)).toHaveCSS(
      "background-color",
      bg
    );
    await expect(page.locator(phoneLinkSelector)).toHaveCSS("border", border);
    await expect(page.locator(phoneLinkSelector)).toHaveCSS("fill", fill);
  });
});
