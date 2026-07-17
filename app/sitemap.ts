import type { MetadataRoute } from "next";

const siteUrl = "https://www.anpi-watch.app";
const lastModified = new Date("2026-07-16T00:00:00+09:00");

const sitemapPaths = [
  { path: "/", changeFrequency: "weekly", priority: 1.0 },
  { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/notification-samples", changeFrequency: "monthly", priority: 0.8 },
  { path: "/for-family", changeFrequency: "monthly", priority: 0.8 },
  { path: "/for-contacts", changeFrequency: "monthly", priority: 0.8 },
  { path: "/before-you-start", changeFrequency: "monthly", priority: 0.7 },
  { path: "/how-it-works", changeFrequency: "monthly", priority: 0.8 },
  { path: "/trust", changeFrequency: "monthly", priority: 0.7 },
  { path: "/delivery-status", changeFrequency: "monthly", priority: 0.6 },
  { path: "/help/stop", changeFrequency: "monthly", priority: 0.6 },
  { path: "/share-message", changeFrequency: "monthly", priority: 0.6 },
  { path: "/support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.4 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.4 },
  { path: "/privacy-choices", changeFrequency: "yearly", priority: 0.4 },
  { path: "/tokushoho", changeFrequency: "yearly", priority: 0.4 },
  { path: "/manual", changeFrequency: "monthly", priority: 0.6 },
  { path: "/manual/faq", changeFrequency: "monthly", priority: 0.7 },
  { path: "/manual/tutorial", changeFrequency: "monthly", priority: 0.5 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapPaths.map(({ path, changeFrequency, priority }) => ({
    url: path === "/" ? `${siteUrl}/` : `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
