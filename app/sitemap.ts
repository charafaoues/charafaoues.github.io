import type { MetadataRoute } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.SITE_URL ??
  "https://aouescharaf.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes: Array<{ path: string; priority: number }> = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.8 },
    { path: "/services", priority: 0.8 },
    { path: "/social-post", priority: 0.7 },
    { path: "/website-project", priority: 0.9 },
    { path: "/website-project/lumora", priority: 0.7 },
    { path: "/website-project/nova", priority: 0.7 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority,
  }));
}
