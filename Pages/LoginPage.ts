import { Page } from '@playwright/test';
import { BasePage } from "../Utils/BasePage";

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async opensaucedemoPage() {
        await this.GoToUrl('https://www.saucedemo.com/');
    }

    async userLogin(username: string, password: string) {
        await this.EnterText(this.page.locator('#user-name'), username);
        await this.EnterText(this.page.locator('#password'), password);
        await this.ClickElement(this.page.locator('//*[@id="login-button"]'));
    }

    async verifyDashboardHeading() {
        await this.VerifyElementVisible(this.page.locator('//*[@id="header_container"]/div[2]/span'));
    }
}