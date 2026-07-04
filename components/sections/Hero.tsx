import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative -mt-24 overflow-hidden lg:flex lg:min-h-screen lg:items-start lg:pt-24 lg:pb-14">
      <Image
        src="/images/hero-image.png"
        alt="Dr. Deoclides, neurocirurgião especialista em coluna"
        fill
        priority
        quality={100}
        sizes="100vw"
        className="hidden object-cover object-center lg:block"
      />

      <Image
        src="/images/hero-mobile.png"
        alt="Dr. Deoclides, neurocirurgião especialista em coluna"
        width={1800}
        height={1596}
        priority
        quality={100}
        sizes="100vw"
        className="block h-auto w-full lg:hidden"
      />

      <div className="relative mx-auto w-full max-w-[1400px] bg-[#04192D] px-4 pt-2 pb-10 sm:px-6 lg:mt-[64px] lg:bg-transparent lg:px-8 lg:pt-0 lg:pb-0">
        <div className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <div className="border-gold/40 bg-gold/10 text-ivory mb-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border px-4 py-1.5 font-sans text-[10px] tracking-wide uppercase lg:justify-start lg:text-sm">
            <span>Neurocirurgião</span>
            <span className="bg-ivory/40 size-1 rounded-full" aria-hidden />
            <span>Especialista em coluna</span>
          </div>

          <h1 className="text-ivory font-poppins text-[32px] leading-tight font-normal lg:text-4xl">
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
            className="border-gold/30 text-ivory mt-8 inline-flex items-center gap-3 rounded-xl border bg-[#032c58] px-6 py-4 font-sans text-base font-medium whitespace-nowrap backdrop-blur-md transition-colors hover:bg-[#032c58]/90"
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
