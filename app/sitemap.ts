import type { MetadataRoute } from "next";
import { cacheLife, cacheTag } from "next/cache";
import { client } from "@/lib/sanity/client";
import { postSlugsQuery } from "@/lib/sanity/queries";
import type { PostSlugsQueryResult } from "@/sanity.types";

const BASE_URL = "https://drdeoclides.com.br";
const LAST_MODIFIED = "2026-06-19";

async function getPostEntries() {
  "use cache";
  cacheTag("posts");
  cacheLife("hours");
  return client.fetch<PostSlugsQueryResult>(postSlugsQuery);
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPostEntries();

  const postEntries: MetadataRoute.Sitemap = posts
    .filter((post) => post.slug)
    .map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ?? LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.5,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
    // "/sobre" fica fora até a rota ser reativada — hoje é redirect 307 para "/" (ver next.config.ts).
    {
      url: `${BASE_URL}/especialidades`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/academico`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contato`,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...postEntries,
  ];
}
