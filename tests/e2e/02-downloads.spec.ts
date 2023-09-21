import DownloadsPage from "../page-objects/downloads";
import { test, expect } from "@playwright/test";

let downloads: DownloadsPage;

test.describe("download tests", () => {
  test.beforeEach(async ({ page }) => {
    downloads = new DownloadsPage(page);

    await downloads.visit();
  });

  test("download file", async () => {
    const [download] = await downloads.download({ to: "tests/data/downloaded-file.txt" });

    expect(await download.path()).not.toBeNull();
  });
});
