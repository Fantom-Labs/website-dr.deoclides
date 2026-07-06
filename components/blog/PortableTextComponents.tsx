import type { InferComponents } from "@portabletext/react";
import type { PostBySlugQueryResult } from "@/sanity.types";

type BodyComponents = InferComponents<NonNullable<PostBySlugQueryResult>["body"]>;

export const portableTextComponents: BodyComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-ink font-sans text-lg leading-relaxed">
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2 className="text-navy font-serif mt-12 text-2xl leading-snug md:text-3xl">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-navy font-serif mt-8 text-xl leading-snug md:text-2xl">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-gold text-navy/80 my-8 border-l-4 pl-6 font-serif text-xl italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ?? "";
      const isExternal = /^https?:\/\//.test(href);

      return (
        <a
          href={href}
          className="text-gold underline underline-offset-2"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
};
