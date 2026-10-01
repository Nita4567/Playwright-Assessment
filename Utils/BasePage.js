import { expect } from "@playwright/test";

export class BasePage {
    constructor(page) {
        this.page = page;
    }

    async GoToUrl(url) {
        await this.page.goto(url);
    }

    async ClickElement(locator) {
        await locator.click();
    }

    async EnterText(locator, text) {
        await locator.fill(text);
    }

    async VerifyElementVisible(locator) {
        await expect(locator).toBeVisible();
    }

    async GetTextElementValue(locator) {
        return await locator.textContent();
    }
}