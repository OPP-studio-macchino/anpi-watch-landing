import "./globals.css";
import type { Metadata } from "next";

const appName = "あんぴッチ";
const appTitle = "あんぴッチ | 最後のOKから時間がたつと順番にお知らせします";
const appDescription =
  "毎日OKを1回記録するアプリです。最後のOKから時間がたつと、24時間から48時間以上まで決まった順番でお知らせします。";

export const metadata: Metadata = {
  title: appTitle,
  description: appDescription,
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: appName,
    title: appTitle,
    description: appDescription,
    url: "/app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "あんぴッチのアプリアイコンと説明"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: appTitle,
    description: appDescription,
    images: ["/twitter-card.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
