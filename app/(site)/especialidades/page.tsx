import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Cirurgia de Coluna e Escoliose em Recife | Dr. Deoclides" },
  description:
    "Tratamento de escoliose, hérnia de disco, espondilolistese e casos complexos de coluna. Nem toda dor precisa de cirurgia — avalie com um especialista.",
  alternates: {
    canonical: "/especialidades",
    languages: { "pt-BR": "/especialidades" },
  },
};

export default function EspecialidadesPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-16">
      <h1 className="text-navy font-serif text-3xl">Especialidades</h1>
    </main>
  );
}
