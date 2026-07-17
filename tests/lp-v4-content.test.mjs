import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

const homePage = read("app/page.tsx");
const homeComponent = read("components/home/HomePageV4.tsx");
const navigation = read("components/site/SiteNavigation.ts");
const layout = read("app/layout.tsx");

const prohibitedClaims = [
  "必ず助かります",
  "必ず見つかります",
  "危険を検知しました",
  "死亡を検知しました",
  "24時間監視しています",
  "自動で119",
  "孤独死を防ぎます",
];

test("home page exposes the LP v4 value proposition", () => {
  assert.match(homeComponent, /1日1回、「今日も大丈夫」の合図を/);
  assert.match(homeComponent, /合図が途切れた時は、決めた人へ/);
  assert.match(homeComponent, /「便りがないのは元気な便り」/);
  assert.doesNotMatch(homeComponent, /1日1回、OKを記録。/);
  assert.match(homeComponent, /2名がそれぞれ自分で同意/);
  assert.match(homeComponent, /月額300円/);
  assert.match(homeComponent, /通知追加料金なし/);
});

test("home page uses real product screenshot assets", () => {
  for (const asset of [
    "/brand/home-ok.webp",
    "/brand/home-success.webp",
    "/brand/contacts-demo.webp",
    "/brand/records.webp",
  ]) {
    assert.match(homeComponent, new RegExp(asset.replaceAll("/", "\\/")));
  }
  assert.doesNotMatch(homeComponent, /anpittchi-hero-night-apartment/);
  assert.doesNotMatch(homeComponent, /anpittchi-daily-ok-checkin-lifestyle/);
});

test("prohibited safety and guarantee claims are absent", () => {
  const combined = `${homePage}\n${homeComponent}\n${layout}`;
  for (const claim of prohibitedClaims) {
    assert.equal(combined.includes(claim), false, `prohibited claim found: ${claim}`);
  }
});

test("navigation prioritizes core buying questions", () => {
  for (const expected of ["/#how-it-works", "/#timeline", "/#for-who", "/#pricing", "/manual/faq"]) {
    assert.ok(navigation.includes(expected), `missing navigation target: ${expected}`);
  }
});

test("SEO includes canonical, social cards, and structured data", () => {
  assert.match(homePage, /SoftwareApplication/);
  assert.match(homePage, /FAQPage/);
  assert.match(homePage, /https:\/\/www\.anpi-watch\.app\//);
  assert.match(homePage, /\/og-image\.png/);
  assert.match(layout, /max-image-preview/);
});
