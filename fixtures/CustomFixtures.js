import { LoginPage } from "../Pages/LoginPage";
import { test as base } from "@playwright/test";
import { HomePage } from "../Pages";

export const test = base.extend({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    }
});

test.use({ storageState: 'playwright/.auth/user.json' });