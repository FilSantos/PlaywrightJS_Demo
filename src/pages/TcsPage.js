export class TcsPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.tcs.com/", {
      waitUntil: "domcontentloaded",
      timeout: 30000,
    });
  }

  async getPageTitle() {
    return await this.page.title();
  }
}
