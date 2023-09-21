import DownloadsPage from "../page-objects/downloads";
import { test, expect } from "@playwright/test";
import { readFile } from "fs/promises";

let downloads: DownloadsPage;

test.describe("snapshot tests", () => {
  test.beforeEach(async ({ page }) => {
    downloads = new DownloadsPage(page);

    await downloads.visit();
  });

  test("file content is the same", async () => {
    const [, to] = await downloads.download({ to: "tests/data/downloaded-file.txt" });
    const downloadedFileContent = await readFile(to, { encoding: "utf-8" });

    expect(downloadedFileContent).toMatchSnapshot("downloaded-file-content-snapshot.txt");
  });
});
