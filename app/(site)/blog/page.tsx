import type { Metadata } from "next";
import { cacheLife, cacheTag } from "next/cache";
import { PostCard } from "@/components/blog/PostCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { client } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import type { PostsQueryResult } from "@/sanity.types";

export const metadata: Metadata = {
  title: { absolute: "Blog | Saúde da Coluna — Dr. Deoclides" },
  description:
    "Informação confiável sobre escoliose, hérnia de disco, dor na coluna e tratamentos, escrita por um neurocirurgião especialista.",
};

async function getPosts() {
  "use cache";
  cacheTag("posts");
  cacheLife("hours");
  return client.fetch<PostsQueryResult>(postsQuery);
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <main className="bg-surface flex flex-1 flex-col">
      <Section>
        <Container className="flex flex-col gap-12">
          {posts.length === 0 ? (
            <p className="text-slate font-sans text-lg">
              Em breve, conteúdo sobre saúde da coluna.
            </p>
          ) : (
            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <li key={post._id}>
                  <PostCard post={post} priority={index === 0} />
                </li>
              ))}
            </ul>
          )}
        </Container>
      </Section>
    </main>
  );
}
