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

export function PostCard({
  post,
  priority = false,
}: {
  post: PostsQueryResult[number];
  priority?: boolean;
}) {
  const slug = post.slug?.current;
  if (!slug) return null;

  const category = post.categories?.[0];

  return (
    <Link
      href={`/blog/${slug}`}
      className="group border-line flex flex-col overflow-hidden rounded-2xl border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      {post.mainImage ? (
        <div className="bg-bone relative aspect-16/10 overflow-hidden">
          <Image
            src={urlFor(post.mainImage).width(640).height(400).fit("crop").auto("format").url()}
            alt={post.mainImage.alt ?? post.title ?? ""}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-2 p-6">
        {category?.name ? (
          <span className="text-gold font-sans text-sm font-medium tracking-wide uppercase">
            {category.name}
          </span>
        ) : null}

        <h2 className="text-navy font-poppins text-xl leading-snug font-medium">
          {post.title}
        </h2>

        {post.excerpt ? (
          <p className="text-slate font-sans text-base leading-relaxed">
            {post.excerpt}
          </p>
        ) : null}

        {post.publishedAt ? (
          <time
            dateTime={post.publishedAt}
            className="text-slate font-sans text-sm mt-auto pt-2"
          >
            {formatDate(post.publishedAt)}
          </time>
        ) : null}
      </div>
    </Link>
  );
}
