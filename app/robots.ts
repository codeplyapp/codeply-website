import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://codeply.dev";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/revalidate"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
