import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

// Grid preparado para até 15 nomes (12 confirmados + 3 de reserva) sem precisar ajustar o layout.
const convenios = [
  "CAMPE",
  "Assefaz Saúde",
  "BC Saúde",
  "Camed Saúde",
  "Capesaúde",
  "Compesa Saúde",
  "Fachesf",
  "Fisco Saúde",
  "Mediservice",
  "Saúde Petrobras",
  "Postal Saúde",
  "Saúde Caixa",
];

export default function Convenios() {
  return (
    <section className="bg-surface py-8 lg:py-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[556/592] overflow-hidden rounded-2xl lg:order-2">
          <Image
            src="/images/s4-img.png"
            alt="Dr. Deoclides"
            fill
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-start lg:order-1">
          <Eyebrow className="!text-ink mx-auto lg:mx-0">Planos de saúde</Eyebrow>

          <h2 className="text-ink font-poppins mt-6 text-center text-[28px] leading-tight font-medium lg:text-left">
            Atendimento pelo seu plano de saúde
          </h2>

          <p className="text-slate mt-4 text-center font-sans text-lg leading-relaxed lg:text-left">
            O Dr. Deoclides atende pelos principais convênios de saúde de
            Pernambuco. Consulte a lista abaixo entre em
            contato pelo WhatsApp em caso de dúvidas.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {convenios.map((name) => (
              <div
                key={name}
                className="flex h-16 items-center justify-start gap-2 rounded-xl p-4 text-left"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#032c58"
                  className="shrink-0"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-navy font-sans text-sm font-medium">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
