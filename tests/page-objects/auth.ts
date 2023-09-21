import BasePage from "./basePage";
import type { Page } from "@playwright/test";

export default class Auth extends BasePage {
  public readonly endpoint: string;

  constructor(page: Page) {
    super(page);

    this.endpoint = "/styled/auth/basic-auth-results.html";
  }

  public async authenticate({ username, password }: { username: string; password: string }) {
    const encoded = Buffer.from(`${username}:${password}`).toString("base64");
    const authorization = `Basic ${encoded}`;

    return await this.page.request.get(this.endpoint, { headers: { authorization } });
  }
}
