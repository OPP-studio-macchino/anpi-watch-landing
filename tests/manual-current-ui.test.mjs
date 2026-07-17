import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const manualPage = fs.readFileSync("components/manual/ManualPage.tsx", "utf8");
const manualData = fs.readFileSync("components/manual/manualData.ts", "utf8");

const currentAssets = [
  "/brand/home-ok.webp",
  "/brand/contacts-demo.webp",
  "/brand/records.webp",
];

test("manual previews use the current app screenshots", () => {
  for (const asset of currentAssets) {
    assert.match(manualPage, new RegExp(asset.replaceAll("/", "\\/")));
  }
});

test("manual no longer exposes the removed snooze UI", () => {
  const content = `${manualPage}\n${manualData}`;
  assert.doesNotMatch(content, /1時間 \/ 3時間 \/ 6時間/);
  assert.doesNotMatch(content, /通知だけ止めたい時/);
  assert.doesNotMatch(content, /snoozeSteps/);
});

test("records guidance points to the Records tab", () => {
  assert.match(manualPage, /下の「記録」タブ/);
  assert.match(manualPage, /ScreenPreview type="records"/);
  assert.doesNotMatch(manualPage, /記録は設定から見ます/);
});
