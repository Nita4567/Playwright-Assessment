const { test, expect } = require('@playwright/test');

test.describe('Shopping Cart Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });

    test('standard_user should be able to login', async ({ page }) => {
        await expect(page.locator('.inventory_list')).toBeVisible();
    });

    test('standard_user can add an item to the cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

        await page.locator('.shopping_cart_link').click();
        await expect(page.locator('#checkout')).toBeVisible();
    });
});