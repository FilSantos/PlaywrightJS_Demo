import { Before, After, AfterStep } from "@cucumber/cucumber";
import { chromium, request } from "@playwright/test";

//
// Test Hooks for @ui
//
Before({ tags: "@ui" }, async function () {
  try {
    this.browser = await chromium.launch({ headless: false });
  } catch (error) {
    // Fallback to headless mode if headful fails (e.g., in CI environments)
    this.browser = await chromium.launch({ headless: true });
  }

  this.context = await this.browser.newContext({
    recordVideo: {
      dir: "videos/",
      size: { width: 1280, height: 720 }
    }
  });

  this.page = await this.context.newPage();

});


After({ tags: "@ui" }, async function ({ result }) {
  
  
  if (result.status === "FAILED") {
    // Get video path BEFORE closing the page
    const videoPath = await this.page.video().path();

    // Attach to the HTML report
    await this.attach(`Video saved at:\n${videoPath}`, "text/plain");

    console.log("Video path:", videoPath);
  } else {

    await takeScreenshot(this.page, this.attach);
    //await takeScreenshotFile(this.page);
    
  }

  // Cleanup
  await this.page.close();
  await this.context.close();
  await this.browser.close();
});


//
// Screenshot after each Step – only for @ui
//
AfterStep({ tags: "@ui" }, async function ({ pickleStep, result }) {
  if (result?.status === "FAILED") {
    await takeScreenshot(this.page, this.attach);
    //await takeScreenshotFile(this.page);
  }

});

//
// Test Hooks for @api
//
Before({ tags: "@api" }, async function () {
  this.api = await request.newContext();
});

After({ tags: "@api" }, async function () {
  await this.api.dispose();
});

async function takeScreenshot(page, attach) {

  const screenshot = await page.screenshot();
  await attach(screenshot, "image/png"); // 👈 attach in HTML report

}

async function takeScreenshotFile(page) {

  const filePath = `screenshots/${Date.now()}.png`; // 👈 Save in file
  await page.screenshot({ path: filePath });
  console.log("Screenshot file:", filePath);
}
