import { Given } from "@cucumber/cucumber";
import { NavigateCommon } from "../pages/NavigateCommon.js";

Given('I open {string} homepage', async function (siteName) {

  const navigator = new NavigateCommon(this.page, this);
  await navigator.openSite(siteName);
});
