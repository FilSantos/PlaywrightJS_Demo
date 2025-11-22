import { Given, When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { AmazonSearchPage } from "../pages/AmazonSearchPage.js";

Given("I open Amazon homepage", async function () {
  this.amazon = new AmazonSearchPage(this.page);
  await this.amazon.navigate();
  await this.amazon.dismissContinueShoppingIfExists();
  
});

When("I search for {string}", async function (product) {
  await this.amazon.searchProduct(product);

});

Then("I should see more than {int} results", async function (results) {
  const count = await this.amazon.getResultsCountItemsLoaded();
  console.log(`Items loaded on page: ${count}`);

  const totalCount = await this.amazon.getResultsCount();
  console.log(`Total results found: ${totalCount}`);
  assert.ok(totalCount > results, `Expected more than got ${results} results, got ${totalCount}`);

});
