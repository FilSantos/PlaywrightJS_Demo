import { Before, After } from "@cucumber/cucumber";
import { chromium, request } from "@playwright/test";

//
// HOOK PARA TESTES @ui
//
Before({ tags: "@ui" }, async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After({ tags: "@ui" }, async function () {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});

//
// HOOK PARA TESTES @api
//
Before({ tags: "@api" }, async function () {
  this.api = await request.newContext();
});

After({ tags: "@api" }, async function () {
  await this.api.dispose();
});
