import { Given, Then } from "@cucumber/cucumber";
import assert from "assert";
import { TcsPage } from "../pages/TcsPage.js";

Then("the page title should contain {string}", async function (expectedTitle) {
  const title = await this.tcs.getPageTitle();
  console.log("Page title:", title);
  assert.ok(title.includes(expectedTitle), `Expected page title to contain "${expectedTitle}"`);
});
