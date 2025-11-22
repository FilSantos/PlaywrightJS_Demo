import pkg from "pg";
const { Pool } = pkg;

export class PostgresDB {
  constructor(connectionString) {
    this.pool = new Pool({
      connectionString
    });
  }

  async query(sql, params = []) {
    const client = await this.pool.connect();
    try {
      const res = await client.query(sql, params);
      return res;
    } finally {
      client.release();
    }
  }

  async close() {
    await this.pool.end();
  }
}
