import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-24 flex min-h-[860px] items-start overflow-hidden pt-24 pb-8 lg:min-h-screen lg:pb-14">
      <Image
        src="/images/hero-image.png"
        alt="Dr. Deoclides, neurocirurgião especialista em coluna"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="relative mx-auto mt-[64px] w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <div className="text-ivory/70 mb-6 flex flex-wrap items-center gap-3 font-sans text-sm tracking-wide uppercase">
            <span>Neurocirurgião em Recife</span>
            <span className="bg-ivory/40 size-1 rounded-full" aria-hidden />
            <span>Especialista em coluna</span>
          </div>

          <h1 className="text-ivory font-poppins text-4xl leading-tight font-normal">
            Por trás de cada coluna existe uma história. A sua merece ser olhada
            de forma única.
          </h1>

          <p className="text-ivory/80 mt-6 font-sans text-lg leading-relaxed">
            Quando a dor na coluna começa a limitar o que você ama fazer,
            encontrar segurança importa mais do que encontrar apenas um médico.
            Aqui, cada caso é olhado de forma única, porque o diagnóstico
            correto é sempre o primeiro passo.
          </p>

          <Link
            href="/contato"
            className="border-gold/30 text-ivory mt-8 inline-flex items-center gap-3 rounded-xl border bg-[#032c58] px-6 py-4 font-sans text-base font-medium backdrop-blur-md transition-colors hover:bg-[#032c58]/90"
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
    </section>
  );
}
