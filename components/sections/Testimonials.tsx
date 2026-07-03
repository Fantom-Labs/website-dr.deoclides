import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

const testimonials = [
  {
    avatar: "/images/avatar-1.png",
    name: "Glaucia Lopes",
    time: "2 anos atrás",
    text: "Excelente neurocirurgião.",
  },
  {
    avatar: "/images/avatar-2.png",
    name: "João Batista de Lima",
    time: "1 ano atrás",
    text: "Um Excelente profissional. Trata o paciente com respeito e cuidado. Exemplo de Médico.",
  },
  {
    avatar: "/images/avatar-3.png",
    name: "Marcelo Mendes",
    time: "2 anos atrás",
    text: "Profissional super atencioso e competente, recomendo plenamente.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <Eyebrow className="!text-ink">Depoimentos</Eyebrow>
        </div>

        <h2 className="text-ink font-poppins mt-6 text-center text-[28px] leading-tight font-medium">
          O que os pacientes dizem sobre
          <br />o Dr. Deoclides
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ avatar, name, time, text }) => (
            <div
              key={name}
              className="relative rounded-2xl bg-white p-6 shadow-sm"
            >
              <Image
                src="/google.svg"
                alt=""
                width={21}
                height={23}
                className="absolute top-6 right-6"
              />

              <div className="flex items-center gap-3">
                <Image
                  src={avatar}
                  alt=""
                  width={45}
                  height={45}
                  className="size-11 shrink-0 rounded-full object-cover"
                />
                <div>
                  <p className="text-ink font-sans text-base font-semibold">
                    {name}
                  </p>
                  <p className="text-slate font-sans text-xs">{time}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    src="/star.svg"
                    alt=""
                    width={23}
                    height={23}
                    className="size-5"
                  />
                ))}
                <Image
                  src="/verified.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="ml-1 size-4"
                />
              </div>

              <p className="text-slate mt-4 font-sans text-sm leading-relaxed">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
