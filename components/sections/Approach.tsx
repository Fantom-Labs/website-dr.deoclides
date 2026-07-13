import Image from "next/image";

const pillars = [
  {
    icon: "/diagnostico.svg",
    title: "Diagnóstico preciso",
    description:
      "Análise detalhada dos seus exames e da sua história. Tratar a coluna começa por entender, de verdade, a causa do problema.",
  },
  {
    icon: "/individual.svg",
    title: "Conduta individualizada",
    description:
      "O melhor caminho para o seu caso, que na maioria das vezes não é a cirurgia. Cada decisão apoiada em evidência e experiência.",
  },
  {
    icon: "/suporte.svg",
    title: "Acompanhamento próximo",
    description:
      "Acompanhamento atento e linguagem clara em cada etapa, para você entender o que está acontecendo e decidir com tranquilidade.",
  },
  {
    icon: "/heartbeat.svg",
    title: "Retorno à qualidade de vida",
    description:
      "O objetivo de cada decisão é um só: devolver o seu movimento, a sua autonomia e a liberdade de viver sem dor limitar o que você ama fazer.",
  },
];

export default function Approach() {
  return (
    <section className="bg-surface py-8 lg:py-14">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-ink font-poppins mx-auto max-w-md text-center text-[28px] leading-tight font-medium lg:mx-0 lg:text-left">
          Como cuidamos do seu caso
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[556/592] overflow-hidden rounded-2xl">
            <Image
              src="/images/s5-img.png"
              alt="Dr. Deoclides em consulta com paciente"
              fill
              quality={100}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-20">
            {pillars.map(({ icon, title, description }) => (
              <div key={title} className="flex items-start gap-6">
                <Image
                  src={icon}
                  alt=""
                  width={56}
                  height={56}
                  className="size-14 shrink-0"
                />
                <div>
                  <h3 className="text-navy font-poppins text-2xl font-medium">
                    {title}
                  </h3>
                  <p className="text-slate mt-2 font-sans leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
