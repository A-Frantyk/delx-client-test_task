import { test, expect, Page } from "@playwright/test";

const url = "http://localhost:3000/";
const shippingCity = "New York";
const shippingStreet = "123 Main St";
const deliveryCity = "Los Angeles";
const deliveryStreet = "456 Elm St";
const shippingDate = "January 15, 02:00";
const deliveryDate = "January 20, 02:00";

test.describe("Delivery component is rendering", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
    await page.locator('[data-test-id="loader"]').waitFor({ state: "hidden" });
  });

  test("renders delivery component", async ({ page }) => {
    await expect(
      page.locator('[data-test-id="delivery-component"]')
    ).toBeVisible();
  });

  test("displays delivery details", async ({ page }) => {
    await expect(
      page.locator('[data-test-id="delivery-shipping-city"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-test-id="delivery-shipping-city"]')
    ).toHaveText(shippingCity);

    await expect(
      page.locator('[data-test-id="delivery-shipping-street"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-test-id="delivery-shipping-street"]')
    ).toHaveText(shippingStreet);

    await expect(
      page.locator('[data-test-id="delivery-delivery-city"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-test-id="delivery-delivery-city"]')
    ).toHaveText(deliveryCity);

    await expect(
      page.locator('[data-test-id="delivery-delivery-street"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-test-id="delivery-delivery-street"]')
    ).toHaveText(deliveryStreet);

    await expect(
      page.locator('[data-test-id="delivery-shipping-date"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-test-id="delivery-shipping-date"]')
    ).toHaveText(shippingDate);

    await expect(
      page.locator('[data-test-id="delivery-delivery-date"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-test-id="delivery-delivery-date"]')
    ).toHaveText(deliveryDate);
  });

  test("clicking on shipping icon link opens Google Maps", async ({ page }) => {
    const expectedShippingCity = shippingCity;
    const mapLinkSelector = '[data-test-id="delivery-shipping-map"]';

    await page.click(mapLinkSelector);

    const [newPage] = await Promise.all([
      new Promise<Page>((resolve) => page.context().on("page", resolve)),
      page.waitForEvent("popup"),
    ]);

    const newPageUrl = newPage.url();

    await expect(newPageUrl).toContain("https://www.google.com/maps");
    await expect(newPageUrl).toContain(
      `query=${encodeURIComponent(expectedShippingCity)}`
    );
  });

  test("clicking on delivery icon link opens Google Maps", async ({ page }) => {
    const expectedDeliveryCity = deliveryCity;
    const mapLinkSelector = '[data-test-id="delivery-delivery-map"]';

    await page.click(mapLinkSelector);

    const [newPage] = await Promise.all([
      new Promise<Page>((resolve) => page.context().on("page", resolve)),
      page.waitForEvent("popup"),
    ]);

    const newPageUrl = newPage.url();

    await expect(newPageUrl).toContain("https://www.google.com/maps");
    await expect(newPageUrl).toContain(
      `query=${encodeURIComponent(expectedDeliveryCity)}`
    );
  });
});
