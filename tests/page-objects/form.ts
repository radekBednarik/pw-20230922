import BasePage from "./basePage";
import type { Page, Locator } from "@playwright/test";

export default class FormPage extends BasePage {
  public readonly url: string;

  public readonly locatorFormSelf: Locator;
  public readonly locatorInputUsername: Locator;
  public readonly locatorInputPassword: Locator;
  public readonly locatorComment: Locator;
  public readonly locatorInputFileUpload: Locator;
  public readonly locatorInputCheckboxes: Locator;
  public readonly locatorInputRadios: Locator;
  public readonly locatorInputMultipleSelect: Locator;
  public readonly locatorInputDropdown: Locator;
  public readonly locatorInputCancel: Locator;
  public readonly locatorInputSubmit: Locator;

  constructor(page: Page) {
    super(page);

    this.url = "/styled/basic-html-form-test.html";

    this.locatorFormSelf = this.page.getByTestId("HTMLFormElements");
    this.locatorInputUsername = this.page.locator("[name='username']");
    this.locatorInputPassword = this.page.locator("[name='password']");
    this.locatorComment = this.page.locator("[name='comments']");
    this.locatorInputFileUpload = this.page.locator("[name='filename']");
    this.locatorInputCheckboxes = this.page.locator("[name='checkboxes[]']");
    this.locatorInputRadios = this.page.locator("[name='radioval']");
    this.locatorInputMultipleSelect = this.page.locator("[name='multipleselect[]']");
    this.locatorInputDropdown = this.page.locator("[name='dropdown']");
    this.locatorInputCancel = this.page.locator("[type='reset']");
    this.locatorInputSubmit = this.page.locator("[type='submit']");
  }

  public async visit() {
    return super.visit(this.url);
  }
}
