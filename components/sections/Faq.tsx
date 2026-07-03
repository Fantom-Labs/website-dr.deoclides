import Image from "next/image";
import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";

const faqItems = [
  {
    question: "Toda dor na coluna precisa de cirurgia?",
    answer:
      "Não. A maioria dos casos é tratada de forma conservadora, com excelentes resultados. A cirurgia é indicada apenas quando é o único caminho para a sua qualidade de vida.",
  },
  {
    question: "Tenho medo de fazer cirurgia na coluna. É seguro?",
    answer:
      "É natural ter receio, já que a coluna sustenta o corpo e o movimento. Por isso cada caso é avaliado com profundidade e a cirurgia só é indicada quando realmente necessária, com planejamento detalhado e toda a tecnologia disponível para proteger os nervos e a medula.",
  },
  {
    question: "Como é a recuperação?",
    answer:
      "Varia conforme o caso e o tipo de procedimento. Na avaliação, você recebe uma explicação clara sobre o que esperar em cada etapa.",
  },
  {
    question: "O senhor atende por convênio?",
    answer:
      "Sim, atendimento por convênio e particular. Entre em contato para confirmar a cobertura do seu plano.",
  },
  {
    question: "Onde são feitas as consultas e cirurgias?",
    answer:
      "Consultas em Recife, nos consultórios Esmere e Neuron. As cirurgias são realizadas no Hospital Memorial São José e no Hospital Esperança.",
  },
];

export default function Faq() {
  return (
    <section className="bg-surface py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="border-line grid grid-cols-1 gap-10 rounded-2xl border bg-white p-20 text-center lg:grid-cols-[35fr_65fr] lg:text-left">
          <div className="lg:col-start-1 lg:row-start-1">
            <p className="text-navy font-sans text-sm font-semibold tracking-wide">
              FAQ
            </p>

            <h2 className="text-ink font-poppins mt-4 text-[28px] leading-tight font-medium">
              As perguntas mais frequentes no consultório
            </h2>
          </div>

          <Accordion
            items={faqItems}
            className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
          />

          <div className="lg:col-start-1 lg:row-start-2">
            <p className="text-slate font-sans leading-relaxed">
              Não encontrou a resposta? Nossa equipe está pronta para esclarecer
              suas dúvidas sobre nossos tratamentos.
            </p>

            <Link
              href="/contato"
              className="border-gold/30 text-ivory mt-6 inline-flex w-fit items-center gap-3 rounded-xl border bg-[#032c58] px-6 py-4 font-sans text-base font-medium backdrop-blur-md transition-colors hover:bg-[#032c58]/90"
            >
              <Image
                src="/zap.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              Envie uma mensagem
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
