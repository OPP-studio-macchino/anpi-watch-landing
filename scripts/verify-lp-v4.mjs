import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";

const require = createRequire(import.meta.url);
let ts;
try {
  ts = require("typescript");
} catch {
  const globalRoot = execFileSync("npm", ["root", "-g"], { encoding: "utf8" }).trim();
  ts = require(join(globalRoot, "typescript"));
}

const root = process.cwd();
const sourceRoots = ["app", "components"];
const files = [];

function walk(path) {
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const fullPath = join(path, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(fullPath);
  }
}

for (const dir of sourceRoots) walk(join(root, dir));

const diagnostics = [];
for (const file of files) {
  const source = readFileSync(file, "utf8");
  const result = ts.transpileModule(source, {
    fileName: file,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      jsx: ts.JsxEmit.Preserve,
      isolatedModules: true,
    },
    reportDiagnostics: true,
  });
  for (const diagnostic of result.diagnostics ?? []) {
    diagnostics.push({ file, diagnostic });
  }
}

if (diagnostics.length) {
  for (const { file, diagnostic } of diagnostics) {
    console.error(`${file}: ${ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n")}`);
  }
  process.exit(1);
}

const requiredAssets = [
  "public/brand/app-icon.png",
  "public/brand/home-ok.webp",
  "public/brand/home-success.webp",
  "public/brand/contacts-demo.webp",
  "public/brand/records.webp",
  "public/brand/settings.webp",
  "public/og-image.png",
  "public/twitter-card.png",
];

for (const asset of requiredAssets) {
  const path = join(root, asset);
  if (statSync(path).size < 1024) {
    throw new Error(`Asset is missing or too small: ${asset}`);
  }
}

console.log(`LP v4 verification passed: ${files.length} TypeScript files parsed; ${requiredAssets.length} assets checked.`);
