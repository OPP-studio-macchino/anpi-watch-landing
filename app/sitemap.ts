import type { MetadataRoute } from "next";

const siteUrl = "https://www.anpi-watch.app";

const sitemapPaths = [
  "/",
  "/pricing",
  "/notification-samples",
  "/for-family",
  "/for-contacts",
  "/before-you-start",
  "/how-it-works",
  "/trust",
  "/delivery-status",
  "/help/stop",
  "/share-message",
  "/support",
  "/privacy",
  "/terms",
  "/privacy-choices",
  "/tokushoho",
  "/manual",
  "/manual/faq",
  "/manual/tutorial"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map((path) => ({
    url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`
  }));
}
