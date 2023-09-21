import BasePage from "./basePage";
import type { Page, Locator, Download } from "@playwright/test";

export default class DownloadsPage extends BasePage {
  public readonly url: string;

  public readonly locatorServerDownload: Locator;

  constructor(page: Page) {
    super(page);

    this.url = "/styled/download/download.html";

    this.locatorServerDownload = this.page.getByTestId("server-download-a");
  }

  public async visit() {
    return super.visit(this.url);
  }

  public async download({ to }: { to: string }): Promise<[Download, string]> {
    const downloadPromise = this.page.waitForEvent("download");
    await this.locatorServerDownload.click();
    const download = await downloadPromise;

    await download.saveAs(to);

    return [download, to];
  }
}
