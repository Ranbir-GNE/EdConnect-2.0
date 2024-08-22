import { Pool } from "pg";

export const pool = new Pool({
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.PORT,
  database: process.env.DB_NAME,
});

export default async function dbConnect() {
  await pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error acquiring client", err.stack);
    }
    client.query("SELECT NOW()", (err, result) => {
      release();
      if (err) {
        return console.error("Error executing query", err.stack);
      }
      console.log("Connected to DB", result.rows);
    });
  });
}
