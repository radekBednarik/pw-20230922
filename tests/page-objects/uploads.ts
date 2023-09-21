import BasePage from "./basePage";
import type { Page, Locator } from "@playwright/test";

export default class UploadsPage extends BasePage {
  public readonly url: string;

  public readonly locatorInputFileUpload: Locator;
  public readonly locatorInputSubmit: Locator;
  public readonly locatorBttnRadioImage: Locator;
  public readonly locatorBttnRadioGeneric: Locator;

  constructor(page: Page) {
    super(page);

    this.url = "/styled/file-upload-test.html";

    this.locatorInputFileUpload = this.page.getByTestId("fileinput");
    this.locatorInputSubmit = this.page.locator("[type='submit']");
    this.locatorBttnRadioImage = this.page.getByTestId("itsanimage");
    this.locatorBttnRadioGeneric = this.page.getByTestId("itsafile");
  }

  public async visit() {
    return super.visit(this.url);
  }

  public async upload({ file, type }: { file: string; type: "image" | "generic" }) {
    await this.locatorInputFileUpload.setInputFiles(file);

    if (type === "image") {
      await this.locatorBttnRadioImage.click();
    } else {
      await this.locatorBttnRadioGeneric.click();
    }

    await this.locatorInputSubmit.click();
  }
}
