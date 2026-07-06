import type { Metadata } from "next";
import { cacheLife, cacheTag } from "next/cache";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portableTextComponents } from "@/components/blog/PortableTextComponents";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { client } from "@/lib/sanity/client";
import { urlFor } from "@/lib/sanity/image";
import {
  postBySlugQuery,
  postSlugsQuery,
} from "@/lib/sanity/queries";
import type {
  PostBySlugQueryResult,
  PostSlugsQueryResult,
} from "@/sanity.types";

async function getPost(slug: string) {
  "use cache";
  cacheTag("posts", `post-${slug}`);
  cacheLife("days");
  return client.fetch<PostBySlugQueryResult>(postBySlugQuery, { slug });
}

export async function generateStaticParams() {
  const slugs = await client.fetch<PostSlugsQueryResult>(postSlugsQuery);

  const params = slugs
    .map((entry) => entry.slug)
    .filter((slug): slug is string => Boolean(slug))
    .map((slug) => ({ slug }));

  // Cache Components exige ao menos um param em generateStaticParams.
  // Sem posts ainda no Sanity, usamos um placeholder — notFound() abaixo
  // trata qualquer slug (incluindo este) que não exista de verdade.
  return params.length > 0 ? params : [{ slug: "__placeholder__" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.seo?.metaTitle || post.title || undefined;
  const description = post.seo?.metaDescription || post.excerpt || undefined;
  const ogImageSource = post.seo?.ogImage ?? post.mainImage;
  const ogImage = ogImageSource
    ? urlFor(ogImageSource).width(1200).height(630).fit("crop").auto("format").url()
    : undefined;

  return {
    title,
    description,
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.publishedAt ?? undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630 }] : undefined,
    },
  };
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post._updatedAt,
    author: post.author?.name
      ? { "@type": "Person", name: post.author.name }
      : undefined,
    image: post.mainImage
      ? [urlFor(post.mainImage).width(1200).height(630).fit("crop").auto("format").url()]
      : undefined,
  };

  return (
    <main className="bg-surface flex flex-1 flex-col">
      <Section>
        <Container className="flex max-w-3xl flex-col gap-8">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />

          <Link href="/blog" className="text-gold font-sans text-sm">
            ← Voltar para o blog
          </Link>

          <header className="flex flex-col gap-4">
            {post.categories && post.categories.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {post.categories.map((category) =>
                  category.name ? (
                    <span
                      key={category.slug?.current ?? category.name}
                      className="text-gold font-sans text-sm font-medium tracking-wide uppercase"
                    >
                      {category.name}
                    </span>
                  ) : null,
                )}
              </div>
            ) : null}

            <h1 className="text-navy font-serif text-3xl leading-tight md:text-4xl">
              {post.title}
            </h1>

            <div className="text-slate flex flex-wrap items-center gap-3 font-sans text-sm">
              {post.author?.name ? <span>{post.author.name}</span> : null}
              {post.author?.name && post.publishedAt ? <span>·</span> : null}
              {post.publishedAt ? (
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              ) : null}
            </div>
          </header>

          {post.mainImage ? (
            <div className="bg-bone relative aspect-16/9 overflow-hidden rounded-lg">
              <Image
                src={urlFor(post.mainImage)
                  .width(1200)
                  .height(675)
                  .fit("crop")
                  .auto("format")
                  .url()}
                alt={post.mainImage.alt ?? post.title ?? ""}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          ) : null}

          {post.body ? (
            <div className="flex flex-col gap-6">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
