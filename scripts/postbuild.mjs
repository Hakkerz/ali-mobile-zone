import { copyFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";

const src = join("node_modules", "sql.js", "dist", "sql-wasm.wasm");
const dest = join(".output", "server", "_libs", "sql-wasm.wasm");

const dir = dirname(dest);
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

copyFileSync(src, dest);
console.log(`Copied ${src} -> ${dest}`);
