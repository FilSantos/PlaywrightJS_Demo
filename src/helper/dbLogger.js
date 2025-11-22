import fs from "fs";
import path from "path";

export class DBLogger {
  constructor(attach) {
    this.attach = attach;
  }

  async logQuery({ sql, params, rowCount, rows, timeMs }) {

    const log = 
      `================ DB QUERY ================\n` +
      `Query: ${sql}\n` +
      `Parameters: ${JSON.stringify(params)}\n` +
      `Execution Time: ${timeMs} ms\n` +
      `Rows Returned: ${rowCount}\n` +
      `=========================================\n` +
      `Rows:\n${JSON.stringify(rows, null, 2)}\n`;

    // Attach no HTML report
    await this.attach(log, {
      mediaType: "text/plain",
      name: "DB Query Log"
    });


    //save to folder in addition to folder db-logs with timestamp
    //this.requestsDir = path.join(process.cwd(), "db-logs");
    //if (!fs.existsSync(this.requestsDir)) {
    //    fs.mkdirSync(this.requestsDir, { recursive: true });
    //}
    //const filePath = `db-logs/${Date.now()}.txt`;
    //fs.writeFileSync(filePath, log, "utf-8");
  }
}
