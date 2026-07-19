import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const termsPage = readFileSync("app/terms/page.tsx", "utf8");
const legalContent = readFileSync("components/legal/legalPublicContent.ts", "utf8");
const termsContent = `${termsPage}\n${legalContent}`;

test("terms support both iOS and Android store subscriptions", () => {
  for (const expected of [
    "iOSアプリまたはAndroidアプリ",
    "iOSではApp Store、AndroidではGoogle Play",
    "購入に利用したストア",
    "月額300円",
    "通知ごとの追加請求はありません",
  ]) {
    assert.ok(termsContent.includes(expected), `missing terms contract: ${expected}`);
  }
});

test("terms keep cancellation and refund store-neutral", () => {
  assert.match(legalContent, /購入、更新、解約は、購入に利用したストア/);
  assert.match(legalContent, /返金は、購入に利用したストアの規定および手続きに従います/);
  assert.doesNotMatch(legalContent, /iOSアプリ利用を前提とします/);
  assert.doesNotMatch(legalContent, /Appleのサブスクリプションとして管理されます/);
  assert.doesNotMatch(legalContent, /Appleのサブスクリプション管理画面から解約してください/);
});

test("terms preserve consent and safety boundaries", () => {
  for (const expected of [
    "2名の連絡先同意がそろうまで",
    "STOP後は、再同意が完了するまで",
    "危険、事故、死亡、病状、所在その他の状態を検知するサービスではありません",
    "救命、発見、所在確認その他の結果は保証されません",
  ]) {
    assert.ok(termsContent.includes(expected), `missing safety contract: ${expected}`);
  }
});
