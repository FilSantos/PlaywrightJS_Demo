export class AmazonSearchPage {
  constructor(page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://www.amazon.com/", {
          waitUntil: "domcontentloaded",
          timeout: 15000,
        });
  }

  async searchProduct(product) {
    await this.page.locator("#twotabsearchtextbox").fill(product);
    await this.page.keyboard.press("Enter");
  }

  async getResultsCountItemsLoaded() {
    await this.page.waitForSelector("[data-component-type='s-search-result']", {timeout: 20000,});
    return await this.page.locator("[data-component-type='s-search-result']").count();
  }
  
  async getResultsCount() {
    //Locate xpath //div[@cel_widget_id="UPPER-RESULT_INFO_BAR-0"]//h2/span[1], 
    // after do regex to get secont number. example "1-48 de mais de 4.000 resultados para"
    const resultsText = await this.page.locator('//div[@cel_widget_id="UPPER-RESULT_INFO_BAR-0"]//h2/span[1]').innerText();
    const regex = /of over ([\d,.]+) results/;
    const match = resultsText.match(regex);
    if (match && match[1]) {
      // Remove dots and commas from the number string and convert to integer
      const countStr = match[1].replace(/[.,]/g, '');
      return parseInt(countStr, 10);
    }
    return 0;
  }
}
