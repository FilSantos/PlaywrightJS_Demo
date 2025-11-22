import { Given, setDefaultTimeout } from "@cucumber/cucumber";
import { NavigateCommon } from "../pages/NavigateCommon.js";

// Increase default timeout to 30 seconds
setDefaultTimeout(30 * 1000);

Given('I open {string} homepage', async function (siteName) {

  const navigator = new NavigateCommon(this.page, this);
  await navigator.openSite(siteName);
});
