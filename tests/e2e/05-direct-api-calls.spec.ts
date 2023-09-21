import Auth from "../page-objects/auth";
import { test, expect } from "@playwright/test";

let auth: Auth;

test.describe("direct api calls", () => {
  test.beforeEach(async ({ page }) => {
    auth = new Auth(page);
  });

  test("authenticate", async () => {
    const response = await auth.authenticate({ username: "authorized", password: "password001" });

    expect.soft(response.status()).toBe(200);
    expect
      .soft(await response.text())
      .toContain("Username and Password in the Basic Auth header were the expected values");
  });
});
