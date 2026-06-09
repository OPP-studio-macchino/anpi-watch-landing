import "./globals.css";
import type { Metadata, Viewport } from "next";

const appName = "あんぴッチ";
const appTitle = "あんぴッチ | 毎日OKを記録するアプリ";
const appDescription =
  "あんぴッチは、毎日OKを1回記録し、最後のOKから時間がたつと決まった順番でお知らせするアプリです。";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://anpi-watch.app";

export const viewport: Viewport = {
  themeColor: "#0099A1"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: appName,
  title: {
    default: appTitle,
    template: `%s | ${appName}`
  },
  description: appDescription,
  alternates: {
    canonical: "/"
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    shortcut: ["/favicon.ico"]
  },
  appleWebApp: {
    capable: true,
    title: appName,
    statusBarStyle: "default"
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: appName,
    title: appTitle,
    description: appDescription,
    url: "/",
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
