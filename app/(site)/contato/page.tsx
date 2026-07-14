import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Contato e Agendamento | Dr. Deoclides — Recife" },
  description:
    "Agende sua avaliação com o Dr. Deoclides em Recife. Atendimento no Esmere e Neuron, convênios e particular. Fale pelo WhatsApp.",
  alternates: {
    canonical: "/contato",
    languages: { "pt-BR": "/contato" },
  },
};

export default function ContatoPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-16">
      <h1 className="text-navy font-serif text-3xl">Contato</h1>
    </main>
  );
}
