#!/usr/bin/env node
/**
 * Ensures every path in package.json "exports" exists (except package.json self-ref).
 * Run: node scripts/verify-exports.mjs
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const pkg = JSON.parse(readFileSync(join(root, "package.json"), "utf8"));
const exports = pkg.exports ?? {};
let failed = false;

for (const [subpath, target] of Object.entries(exports)) {
  if (typeof target !== "string") continue;
  if (subpath === "./package.json") continue;
  const abs = join(root, target);
  if (!existsSync(abs)) {
    console.error(`MISSING: ${subpath} -> ${target}`);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
}
console.log(`OK: ${Object.keys(exports).length} export entries verified.`);
