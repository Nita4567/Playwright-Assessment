import { LoginPage } from "../Pages/LoginPage.js";
import { test as base } from "@playwright/test";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

test.use({ storageState: "playwright/.auth/user.json" });