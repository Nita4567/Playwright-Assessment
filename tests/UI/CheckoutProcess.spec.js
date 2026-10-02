const { test, expect } = require('@playwright/test');

test.describe('Shopping Cart Checkout Functionality', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });

    test('User should complete checkout successfully', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('1');

        await page.locator('[data-test="shopping-cart-link"]').click();
        await expect(page.getByRole('button', { name: 'Checkout' })).toBeVisible();
        await page.getByRole('button', { name: 'Checkout' }).click();

        await page.locator('#first-name').fill('John');
        await page.locator('#last-name').fill('Brown');
        await page.locator('#postal-code').fill('7784');
        await page.getByRole('button', { name: 'Continue' }).click();
        await expect(page.locator('.summary_info')).toBeVisible();

        await page.getByRole('button', { name: 'Finish' }).click();
        await expect(
            page.getByRole('heading', { name: 'Thank you for your order!' })
        ).toBeVisible();
    });
});