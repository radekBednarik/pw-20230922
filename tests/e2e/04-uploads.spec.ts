import UploadsPage from "../page-objects/uploads";
import { test, expect } from "@playwright/test";

let uploads: UploadsPage;

test.describe("upload tests", () => {
  test.beforeEach(async ({ page }) => {
    uploads = new UploadsPage(page);

    await uploads.visit();
  });

  test("upload file", async () => {
    await uploads.upload({ file: "tests/data/test-data.txt", type: "generic" });

    expect(await uploads.page.locator("body").innerText()).toContain("Uploaded File");
  });
});
