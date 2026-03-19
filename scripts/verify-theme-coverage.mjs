#!/usr/bin/env node
/**
 * Best-effort check: Tailwind ds-* utilities and var(--*ds*) in components + app
 * should have a matching custom property in theme.css @theme.
 *
 * Heuristic (not a full CSS parser). Run: node scripts/verify-theme-coverage.mjs
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, relative } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const themePath = join(root, "theme.css");
const theme = readFileSync(themePath, "utf8");

const defined = new Set();
const propRe = /--([\w-]+)\s*:/g;
let m;
while ((m = propRe.exec(theme)) !== null) {
  defined.add(m[1]);
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (p.endsWith(".tsx")) out.push(p);
  }
  return out;
}

const scanDirs = [join(root, "components"), join(root, "app")].filter((d) => {
  try {
    return statSync(d).isDirectory();
  } catch {
    return false;
  }
});

const files = scanDirs.flatMap((d) => walk(d));
const missing = new Map(); // expectedVar -> [{ file, snippet }]

function need(varName, file, snippet) {
  if (defined.has(varName)) return;
  if (!missing.has(varName)) missing.set(varName, []);
  missing.get(varName).push({ file: relative(root, file), snippet });
}

// var(--anything)
const varRe = /var\(\s*(--[\w-]+)\s*\)/g;

// bg-ds-x, text-ds-x, ... optional /opacity
const colorUtilityRe =
  /(?:^|[\s"'`(+:,])(?:(?:hover|focus|active|disabled|data-\[[^\]]+\]):)*((?:bg|text|border|ring|outline|fill|stroke|from|to|via|divide|placeholder|caret)-ds-[a-z0-9-]+)(?:\/[0-9]+)?(?=[\s"'`)/+:,]|$)/g;

const shadowRe =
  /(?:^|[\s"'`(+:,])(?:(?:hover|focus|active):)*shadow-(ds-[a-z0-9-]+)(?=[\s"'`)/+:,]|$)/g;

for (const file of files) {
  const src = readFileSync(file, "utf8");

  varRe.lastIndex = 0;
  while ((m = varRe.exec(src)) !== null) {
    const raw = m[1];
    if (raw.includes("radix")) continue;
    if (!raw.includes("ds-")) continue;
    const name = raw.replace(/^--/, "");
    need(name, file, m[0]);
  }

  colorUtilityRe.lastIndex = 0;
  while ((m = colorUtilityRe.exec(src)) !== null) {
    const util = m[1].replace(/\/[0-9]+$/, "");
    const parts = util.split("-");
    if (parts.length < 3 || parts[0] === "divide") continue;
    const token = parts.slice(1).join("-");
    if (!token.startsWith("ds-")) continue;
    need(`color-${token}`, file, m[1]);
  }

  shadowRe.lastIndex = 0;
  while ((m = shadowRe.exec(src)) !== null) {
    const token = m[1];
    need(`shadow-${token}`, file, m[1]);
  }
}

if (missing.size > 0) {
  console.error("verify-theme-coverage: missing theme variables for ds usage:\n");
  for (const [v, refs] of missing) {
    console.error(`  --${v}`);
    for (const r of refs.slice(0, 3)) {
      console.error(`    ${r.file}: ${r.snippet}`);
    }
    if (refs.length > 3) console.error(`    ... +${refs.length - 3} more`);
  }
  process.exit(1);
}

console.log(`OK: theme.css defines ${defined.size} @theme props; scanned ${files.length} tsx files.`);
