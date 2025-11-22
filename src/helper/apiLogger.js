import fs from "fs";
import path from "path";

export class ApiLogger {
  constructor(attach) {
    this.attach = attach; // Cucumber attach
  }

async logAll({ url, status, timeMs, body }) {
    const fullLog =
      `================ API REQUEST ================\n` +
      `URL:${url}\n` +
      `================ API RESPONSE ================\n` +
      `Status: ${status}\n` +
      `Time: ${timeMs} ms\n` +
      `=============================================\n` +
      `Body:\n${JSON.stringify(body, null, 2)}\n` ;

    await this.attach(fullLog, {
      mediaType: "text/plain",
      name: "API Execution Log"
    });

    //save to folder in addition to folder requests with timestamp
    this.requestsDir = path.join(process.cwd(), "requests");
    if (!fs.existsSync(this.requestsDir)) {
      fs.mkdirSync(this.requestsDir, { recursive: true });
    }
    const filePath = `requests/${Date.now()}.txt`;
    fs.writeFileSync(filePath, fullLog, "utf-8");


  }
}
