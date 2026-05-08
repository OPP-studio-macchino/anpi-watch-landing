import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LAST OK | 返事が途切れたら、段階的に知らせる",
  description:
    "ひとり暮らしのための静かな確認フロー。毎日のOKが途切れたときだけ、本人通知から始めて最大48時間で連絡先2名へ段階的に共有します。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
