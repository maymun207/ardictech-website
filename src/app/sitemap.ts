import type { MetadataRoute } from "next";

const BASE_URL = "https://ardictech.com.tr";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          tr: `${BASE_URL}/tr`,
        },
      },
    },
    {
      url: `${BASE_URL}/tr`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: `${BASE_URL}/en`,
          tr: `${BASE_URL}/tr`,
        },
      },
    },
  ];
}
