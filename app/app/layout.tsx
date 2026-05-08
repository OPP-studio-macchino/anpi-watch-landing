import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "あんぴッチ | 最後のOKから時間がたつと順番にお知らせします",
  description:
    "毎日OKを1回記録するアプリです。最後のOKから時間がたつと、24時間から48時間以上まで決まった順番でお知らせします。"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
