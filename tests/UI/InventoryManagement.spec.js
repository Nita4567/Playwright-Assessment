const { test, expect } = require('@playwright/test');

test.describe('Inventory Management', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });

    test('displays the inventory page', async ({ page }) => {
        await expect(page).toHaveURL(/inventory/);
        await expect(page.locator('.inventory_list')).toBeVisible();
        await expect(page.locator('.inventory_item').first()).toBeVisible();
    });

});