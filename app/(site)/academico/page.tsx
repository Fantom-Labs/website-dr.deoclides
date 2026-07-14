import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Produção Acadêmica e Científica | Dr. Deoclides" },
  description:
    "Publicações científicas, congressos e atuação acadêmica do Dr. Deoclides em neurocirurgia de coluna, escoliose e casos complexos.",
  alternates: {
    canonical: "/academico",
    languages: { "pt-BR": "/academico" },
  },
};

export default function AcademicoPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-16">
      <h1 className="text-navy font-serif text-3xl">Acadêmico</h1>
    </main>
  );
}
