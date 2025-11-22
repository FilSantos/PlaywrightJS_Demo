import { AmazonPage } from "./AmazonPage.js";
import { TcsPage } from "./TcsPage.js";

export class NavigateCommon {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {any} world 
   */
  constructor(page, world) {
    this.page = page;
    this.world = world; 
    this.currentPage = null;
  }

  /**
   * Open page based on Website name
   * @param {string} siteName - Website name ("Amazon", "TCS", etc)
   */
  async openSite(siteName) {
    switch (siteName.toLowerCase()) {
      case "amazon":
        this.currentPage = new AmazonPage(this.page);
        await this.currentPage.navigate();
        await this.currentPage.dismissContinueShoppingIfExists();
        this.world.amazon = this.currentPage; 
        break;

      case "tcs":
        this.currentPage = new TcsPage(this.page);
        await this.currentPage.navigate();
        this.world.tcs = this.currentPage;
        break;

      default:
        throw new Error(`WebSite "${siteName}" not setup`);
    }
  }
}
