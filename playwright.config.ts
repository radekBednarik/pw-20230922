import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  fullyParallel: true,
  workers: process.env.CI ? 2 : undefined,
  retries: 1,
  reporter: [
    ["html", { open: "never", outputFolder: "html-report", outputFile: "html-report.html" }],
    ["list"],
  ],
  use: {
    ignoreHTTPSErrors: true,
    baseURL: "https://testpages.eviltester.com",
    testIdAttribute: "id",
    viewport: { width: 1920, height: 1080 },
  },
  projects: [
    {
      name: "desktop chrome",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "desktop safari",
      use: { ...devices["Desktop Safari"] },
    },
    {
      name: "desktop firefox",
      use: { ...devices["Desktop Firefox"] },
    },
  ],
});
