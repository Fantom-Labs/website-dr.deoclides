import Image from "next/image";
import Link from "next/link";
import { Eyebrow } from "@/components/ui/Eyebrow";

const locations = [
  {
    name: "ESMERE RECIFE",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.147596767052!2d-34.89447142499181!3d-8.086426391941979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f3bba7d92eb%3A0x85605ce7758622cb!2sESMERE%20RECIFE!5e0!3m2!1spt-BR!2sbr!4v1783104297933!5m2!1spt-BR!2sbr",
  },
  {
    name: "Neuron",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.4073975754654!2d-34.89944442568945!3d-8.059860280528369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1862da627f21%3A0xae1c7974e329743a!2sNeuron!5e0!3m2!1spt-BR!2sbr!4v1783104334535!5m2!1spt-BR!2sbr",
  },
];

export default function Locations() {
  return (
    <section className="bg-surface py-8 lg:py-14">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-deep grid min-h-[600px] grid-cols-1 gap-10 rounded-2xl px-6 py-8 sm:p-12 lg:grid-cols-[35fr_65fr] lg:p-20">
          <div className="order-1 text-center lg:hidden">
            <Eyebrow>Locais de atendimento</Eyebrow>
          </div>

          <div className="order-2 flex flex-col gap-6 lg:order-2">
            {locations.map(({ name, embedSrc }) => (
              <iframe
                key={name}
                src={embedSrc}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title={`Mapa — ${name}`}
                className="h-[200px] w-full max-w-[588px] rounded-2xl border-0"
              />
            ))}
          </div>

          <div className="order-3 text-center lg:order-1 lg:text-left">
            <div className="hidden lg:block">
              <Eyebrow>Locais de atendimento</Eyebrow>
            </div>

            <h2 className="text-ivory font-poppins text-[28px] leading-tight font-medium lg:mt-6">
              Atendimento em ambientes pensados para o seu cuidado
            </h2>

            <p className="text-ivory/70 mt-4 font-sans text-lg leading-relaxed">
              Da primeira consulta à cirurgia, cada etapa acontece em espaços de
              referência em Recife.
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
              Agende uma avaliação
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
