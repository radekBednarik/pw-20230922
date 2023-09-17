import BasePage from "../page-objects/basePage";
import type { Page, Locator } from "@playwright/test";

export default class HeaderComponent extends BasePage {
  public readonly locatorIndex: Locator;
  public readonly locatorAbout: Locator;

  constructor(page: Page) {
    super(page);

    this.locatorIndex = this.page.locator("[class = 'navigation'] a").first();
    this.locatorAbout = this.page.locator("[class = 'navigation'] a").last();
  }

  public async visitSiteIndex() {
    await this.locatorIndex.click();
    await this.page.waitForLoadState("domcontentloaded");
  }
}
