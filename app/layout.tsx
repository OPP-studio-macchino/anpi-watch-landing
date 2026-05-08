import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "あんぴッチ | 毎日OKを記録するアプリ",
  description:
    "あんぴッチは、毎日OKを1回記録し、最後のOKから時間がたつと決まった順番でお知らせするアプリです。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
