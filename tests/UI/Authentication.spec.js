// import { expect } from "@playwright/test";
// import { test } from "../../fixtures/CustomFixtures.js";
// import { validUsers } from "../../testdata/TestData.js";

// test.describe('Login Tests', () => {

//     test("standard_user should be able to login", async ({ loginPage, page }) => {
//         await loginPage.opensaucedemoPage();
//         await loginPage.userLogin(validUsers.standard_user.username, validUsers.standard_user.password);
//         await expect(page.locator('#header_container')).toBeVisible();

//     });
//      test('locked_out_user should be able to login', async ({ loginPage }) => {
//         await loginPage.opensaucedemoPage();
//         await loginPage.userLogin(validUsers.locked_out_user.username,validUsers.locked_out_user.password);
//         await expect(page.locator('[data-test="error"]'))
//           .toHaveText('Epic sadface: Sorry, this user has been locked out.');
//     });

//      test('problem_user should be able to login', async ({ loginPage }) => {
//         await loginPage.opensaucedemoPage();
//         await loginPage.userLogin(validUsers.problem_user.username, validUsers.problem_user.password);
//         const dogImage = page.locator('//*[@id="item_3_img_link"]/img');

//         await expect(dogImage).toHaveAttribute('src', /dog/i);
//     });

//      test('performance_glitch_user should be able to login', async ({ loginPage }) => {
//         await loginPage.opensaucedemoPage();
//         await loginPage.userLogin(validUsers.performance_glitch_user.username, validUsers.performance_glitch_user.password);
//         await expect(
//         page.locator('//*[@id="shopping_cart_container"]/a')
//             ).toBeVisible();
//     });

//      test('error_user should be able to login', async ({ loginPage }) => {
//         await loginPage.opensaucedemoPage();
//         await loginPage.userLogin(validUsers.error_user.username, validUsers.error_user.password);
//         await expect(
//         page.locator('//*[@id="remove-sauce-labs-bike-light"]')
//         ).toBeVisible();
//     });

//      test('visual_user should be able to login', async ({ loginPage }) => {
//         await loginPage.opensaucedemoPage();
//         await loginPage.userLogin(validUsers.visual_user.username, validUsers.visual_user.password);
//         await expect(
//         page.locator('//*[@id="item_4_img_link"]/img')
//         ).toBeVisible();

//     });
   
// });
