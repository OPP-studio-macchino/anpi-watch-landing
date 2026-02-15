import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "anpi-watch | 防災連絡を、もっと確実に",
  description: "安否確認をスピーディに行うためのサービス anpi-watch のランディングページ"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
