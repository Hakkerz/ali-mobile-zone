import { drizzle } from "drizzle-orm/sql-js";
import initSqlJs, { Database } from "sql.js";
import * as schema from "./schema";
import path from "path";
import fs from "fs";

const dbPath = path.resolve(process.cwd(), "data", "amz.db");

let sqlite: Database;

async function createDb() {
  const SQL = await initSqlJs();

  const dir = path.dirname(dbPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(dbPath)) {
    const buffer = fs.readFileSync(dbPath);
    sqlite = new SQL.Database(buffer);
  } else {
    sqlite = new SQL.Database();
  }

  sqlite.run("PRAGMA journal_mode = DELETE");
  sqlite.run("PRAGMA foreign_keys = ON");

  setInterval(() => saveDb(), 3000);
}

function saveDb() {
  if (!sqlite) return;
  try {
    const data = sqlite.export();
    const buffer = Buffer.from(data);
    const dir = path.dirname(dbPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dbPath, buffer);
  } catch (err) {
    console.error("Failed to save database:", err);
  }
}

process.on("exit", () => saveDb());

await createDb();

export const db = drizzle(sqlite, { schema });

export function initDb() {
  sqlite.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);
  saveDb();
}
