import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

const specialties = [
  {
    title: "Coluna complexa",
    description:
      "Casos de alta complexidade e cirurgias de revisão, com planejamento.",
  },
  {
    title: "Hérnia de Disco",
    description:
      "Avaliação criteriosa entre o tratamento conservador e o cirúrgico.",
  },
  {
    title: "Dor crônica",
    description: "Investigação da causa real da dor para tratar a origem.",
  },
  {
    title: "Estenose do Canal",
    description:
      "Estabilização, descompressão e alívio da pressão sobre os nervos.",
  },
];

export default function Specialties() {
  return (
    <section className="bg-surface mt-[80px] pb-16 md:pb-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="bg-navy-deep grid grid-cols-1 gap-10 rounded-2xl p-20 lg:grid-cols-[35fr_65fr] lg:items-start">
          <div>
            <Eyebrow>Especialidades</Eyebrow>

            <h2 className="text-ivory font-poppins mt-6 text-3xl leading-tight font-medium sm:text-4xl">
              Especializado no tratamento dos casos mais complexos da coluna
            </h2>

            <p className="text-ivory/70 mt-4 font-sans text-lg leading-relaxed">
              A atuação focada nos quadros que exigem mais técnica, experiência
              e atenção individual.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specialties.map(({ title, description }) => (
              <div key={title} className="border-gold/30 rounded-xl border p-6">
                <div className="bg-gold flex size-9 items-center justify-center rounded-md">
                  <Image
                    src="/coluna.svg"
                    alt=""
                    width={36}
                    height={36}
                    className="size-9"
                  />
                </div>

                <h3 className="text-ivory mt-6 font-sans text-xl font-medium">
                  {title}
                </h3>
                <p className="text-ivory/70 mt-2 font-sans text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
