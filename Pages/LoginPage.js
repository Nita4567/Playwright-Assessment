import { BasePage } from "../Utils/BasePage";

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
    }

    async opensaucedemoPage() {
        await this.GoToUrl('https://www.saucedemo.com/');
    }

    async userLogin(username, password) {
        await this.EnterText(this.page.locator('#user-name'), username);
        await this.EnterText(this.page.locator('#password'), password);
        await this.ClickElement(this.page.locator('//*[@id="login-button"]'));
    }

    async verifyDashboardHeading() {
        await this.VerifyElementVisible(this.page.locator('//*[@id="header_container"]/div[2]/span'));
    }
}