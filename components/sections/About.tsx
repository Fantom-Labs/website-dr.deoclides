import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";

export default function About() {
  return (
    <section className="bg-surface py-8 lg:py-14">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[646/614] overflow-hidden rounded-2xl">
          <Image
            src="/images/s2-img.png"
            alt="Dr. Deoclides em seu consultório"
            fill
            quality={100}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="bg-navy-deep flex flex-col justify-center gap-6 rounded-2xl p-8 text-center sm:p-12 lg:text-left">
          <Eyebrow className="mx-auto lg:mx-0">Minha história</Eyebrow>

          <h2 className="text-ivory font-poppins text-[28px] leading-tight font-medium">
            Uma carreira inteira dedicada
            <br className="hidden lg:block" /> a cuidar de colunas
          </h2>

          <p className="text-ivory/70 font-sans text-lg leading-relaxed">
            Há 14 anos na medicina, com fellowship na University College London
            (UCL) e treinamento na Alemanha, o Dr. Deoclides é preceptor no
            Hospital da Restauração, onde forma novos cirurgiões e opera os
            casos mais desafiadores da coluna. Autor de publicações científicas,
            dedica sua prática a firmar a neurocirurgia como caminho seguro para
            o tratamento da escoliose e dos casos complexos.
          </p>

          {/* Botão desativado — apontava para /sobre, rota desativada (ver next.config.ts). Reativar junto com a rota. */}
        </div>
      </div>
    </section>
  );
}
