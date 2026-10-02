import { expect } from "@playwright/test";
import { test } from "../../fixtures/CustomFixtures.js";
import { validUsers } from "../../testdata/TestData.js";

test.use({ storageState: { cookies: [], origins: [] } });

test.describe('Login Tests', () => {

    test("standard_user should be able to login", async ({ loginPage, page }) => {
        await loginPage.opensaucedemoPage();
        await loginPage.userLogin(validUsers.standard_user.username, validUsers.standard_user.password);
        await expect(page.locator('#header_container')).toBeVisible();

    });
     test('locked_out_user should be able to login', async ({ loginPage }) => {
        await loginPage.opensaucedemoPage();
        await loginPage.userLogin(validUsers.locked_out_user.username,validUsers.locked_out_user.password);
        
    });

     test('problem_user should be able to login', async ({ loginPage }) => {
        await loginPage.opensaucedemoPage();
        await loginPage.userLogin(validUsers.problem_user.username, validUsers.problem_user.password);
        
    });

     test('performance_glitch_user should be able to login', async ({ loginPage }) => {
        await loginPage.opensaucedemoPage();
        await loginPage.userLogin(validUsers.performance_glitch_user.username, validUsers.performance_glitch_user.password);
       
    });

     test('error_user should be able to login', async ({ loginPage }) => {
        await loginPage.opensaucedemoPage();
        await loginPage.userLogin(validUsers.error_user.username, validUsers.error_user.password);
        
    });

     test('visual_user should be able to login', async ({ loginPage }) => {
        await loginPage.opensaucedemoPage();
        await loginPage.userLogin(validUsers.visual_user.username, validUsers.visual_user.password);
        

    });
   
});
