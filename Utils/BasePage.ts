import { expect, type Locator, type Page } from "@playwright/test";

export class BasePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async GoToUrl(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async ClickElement(locator: Locator): Promise<void> {
        await locator.click();
    }

    async EnterText(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }

    async VerifyElementVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }

    async GetTextElementValue(locator: Locator): Promise<string | null> {
        return await locator.textContent();
    }
}