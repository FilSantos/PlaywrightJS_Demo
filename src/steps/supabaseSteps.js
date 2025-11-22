import { Given, Then } from "@cucumber/cucumber";
import assert from "assert";
import { PostgresDB } from "../helper/postgresDB.js";
import { DBLogger } from "../helper/dbLogger.js";

Given("I connect to PostgreSQL", async function () {
  const connectionString = "postgresql://postgres.zfdrmguzsplnofgdrcuw:TestingPlayright@01@aws-1-us-east-1.pooler.supabase.com:6543/postgres";
  this.db = new PostgresDB(connectionString);
  this.dbLogger = new DBLogger(this.attach);
});

Then("the users table should contain a record with name {string}", async function (name) {
  const sql = "SELECT * FROM users WHERE name = $1";
  const params = [name];

  const start = Date.now();
  const res = await this.db.query(sql, params);
  const end = Date.now();

  // Log completo
  await this.dbLogger.logQuery({
    sql,
    params,
    rowCount: res.rowCount,
    rows: res.rows,
    timeMs: end - start
  });

  assert.ok(res.rowCount > 0, `Expected to find a record with name "${name}"`);
});

Then("close the database connection", async function () {
  await this.db.close();
});
