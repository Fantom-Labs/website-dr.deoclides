export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="flex flex-1 items-center justify-center p-16">
      <h1 className="text-navy font-serif text-3xl">Post: {slug}</h1>
    </main>
  );
}
