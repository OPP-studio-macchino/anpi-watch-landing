import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const component = readFileSync("components/home/HomePageV4.tsx", "utf8");
const css = readFileSync("components/home/HomePageV4.module.css", "utf8");

function collectStyleReferences(source) {
  return [...source.matchAll(/styles\.([A-Za-z0-9_]+)/g)].map((match) => match[1]);
}

function collectCssClasses(source) {
  return new Set([...source.matchAll(/\.([A-Za-z_][A-Za-z0-9_-]*)/g)].map((match) => match[1]));
}

test("every CSS module reference has a matching class", () => {
  const references = new Set(collectStyleReferences(component));
  const classes = collectCssClasses(css);
  const missing = [...references].filter((name) => !classes.has(name));
  assert.deepEqual(missing, []);
});

test("CSS braces are balanced", () => {
  let balance = 0;
  for (const char of css) {
    if (char === "{") balance += 1;
    if (char === "}") balance -= 1;
    assert.ok(balance >= 0, "CSS contains an unexpected closing brace");
  }
  assert.equal(balance, 0);
});
