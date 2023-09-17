import FormPage from "../page-objects/form";
import { test, expect } from "@playwright/test";

let form: FormPage;

test.describe("standard tests", () => {
  test.beforeEach(async ({ page }) => {
    form = new FormPage(page);

    await form.visit();
  });

  test("form is sent", async () => {
    await form.fill({
      username: "tester",
      password: "password",
      comment: "this is a test",
      file: "tests/data/test-data.txt",
      checkboxIndex: 1,
      radioIndex: 0,
      multiSelectValues: ["ms1", "ms3"],
      dropdownValue: "dd3",
    });

    // verify that form was successfully sent
    const responsePromise = form.page.waitForResponse("/styled/the_form_processor.php");
    await form.locatorInputSubmit.click();

    const response = await responsePromise;

    expect(response.status()).toBe(200);
  });
});
