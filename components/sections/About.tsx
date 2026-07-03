import Image from "next/image";
import Link from "next/link";
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

        <div className="bg-navy-deep flex flex-col justify-center gap-6 rounded-2xl p-8 sm:p-12">
          <Eyebrow>Minha história</Eyebrow>

          <h2 className="text-ivory font-poppins text-[28px] leading-tight font-medium">
            Uma carreira inteira dedicada a cuidar de colunas
          </h2>

          <p className="text-ivory/70 font-sans text-lg leading-relaxed">
            Há 14 anos na medicina, com fellowship na University College London
            (UCL) e treinamento na Alemanha, o Dr. Deoclides é preceptor no
            Hospital da Restauração, onde forma novos cirurgiões e opera os
            casos mais desafiadores da coluna. Autor de publicações científicas,
            dedica sua prática a firmar a neurocirurgia como caminho seguro para
            o tratamento da escoliose e dos casos complexos.
          </p>

          <Link
            href="/sobre"
            className="border-gold/30 text-ivory hover:bg-ivory/5 mt-2 inline-flex w-fit items-center gap-4 rounded-full border px-5 py-3 font-sans text-lg font-medium backdrop-blur-md transition-colors"
          >
            <Image
              src="/play.svg"
              alt=""
              width={17}
              height={19}
              className="h-4 w-auto"
            />
            Conheça minha trajetória
          </Link>
        </div>
      </div>
    </section>
  );
}
