import test from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const manifestPath = join(root, "public/brand/assets-manifest.json");
const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));

test("all LP v4 assets exist and are non-empty", () => {
  for (const [name, item] of Object.entries(manifest)) {
    const path = join(root, "public", item.path.replace(/^\//, ""));
    assert.equal(existsSync(path), true, `${name} is missing: ${path}`);
    assert.ok(statSync(path).size > 1024, `${name} is unexpectedly small`);
  }
});

test("social cards use the required dimensions", () => {
  assert.deepEqual(manifest.ogImage, {
    path: "/og-image.png",
    width: 1200,
    height: 630,
  });
  assert.deepEqual(manifest.twitterCard, {
    path: "/twitter-card.png",
    width: 1200,
    height: 630,
  });
});

test("public contact and settings screenshots use synthetic data", () => {
  assert.equal(manifest.contactsDemo.pii, "synthetic");
  assert.equal(manifest.settings.phone, "synthetic");
});
