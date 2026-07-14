import Image from "next/image";
import { Accordion } from "@/components/ui/Accordion";
import { WHATSAPP_URL } from "@/lib/constants";

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
    <section className="bg-surface py-8 lg:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="border-line grid grid-cols-1 gap-10 rounded-2xl border bg-white px-6 py-8 text-center sm:p-12 lg:grid-cols-[35fr_65fr] lg:p-20 lg:text-left">
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
              suas dúvidas.
            </p>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border-gold/30 text-ivory mt-6 inline-flex w-fit items-center gap-3 rounded-xl border bg-[#032c58] p-5 font-sans text-base font-medium whitespace-nowrap backdrop-blur-md transition-colors hover:bg-[#032c58]/90"
            >
              <Image
                src="/zap.svg"
                alt=""
                width={24}
                height={24}
                className="size-6"
              />
              Envie uma mensagem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
