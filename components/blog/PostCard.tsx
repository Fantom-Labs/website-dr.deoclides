import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity/image";
import type { PostsQueryResult } from "@/sanity.types";

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function PostCard({ post }: { post: PostsQueryResult[number] }) {
  const slug = post.slug?.current;
  if (!slug) return null;

  const category = post.categories?.[0];

  return (
    <Link href={`/blog/${slug}`} className="group flex flex-col gap-4">
      {post.mainImage ? (
        <div className="bg-bone relative aspect-16/10 overflow-hidden rounded-lg">
          <Image
            src={urlFor(post.mainImage).width(640).height(400).fit("crop").auto("format").url()}
            alt={post.mainImage.alt ?? post.title ?? ""}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-2">
        {category?.name ? (
          <span className="text-gold font-sans text-sm font-medium tracking-wide uppercase">
            {category.name}
          </span>
        ) : null}

        <h2 className="text-navy font-serif text-xl leading-snug">
          {post.title}
        </h2>

        {post.excerpt ? (
          <p className="text-slate font-sans text-base leading-relaxed">
            {post.excerpt}
          </p>
        ) : null}

        {post.publishedAt ? (
          <time dateTime={post.publishedAt} className="text-slate font-sans text-sm">
            {formatDate(post.publishedAt)}
          </time>
        ) : null}
      </div>
    </Link>
  );
}
