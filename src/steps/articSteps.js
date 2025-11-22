import { When, Then } from "@cucumber/cucumber";
import assert from "assert";
import { ArticAPI } from "../api/ArticAPI.js";

When("I request artworks from the API", async function () {
  this.artic = new ArticAPI(this.api, this.attach);
  const { response, body } = await this.artic.getArtworks(1, 1);

  this.apiResponse = response;
  this.jsonBody = body;

  //console.log("API Response:", body);
});

Then("the response should have status {int}", async function (code) {
  const status = this.apiResponse.status();
  //console.log("Status:", status);

  assert.strictEqual(status, code, "Expected HTTP {code}");
});

Then("the API should return exactly {int} artworks", async function (item) {
  const count = this.jsonBody.data.length;
  //console.log("Returned items:", count);

  assert.strictEqual(count, item, "Expected API to return exactly {item} item");
});
