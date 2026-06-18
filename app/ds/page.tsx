import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import { StatItem } from "@/components/ui/StatItem";

const faqItems = [
  {
    question: "Toda dor na coluna precisa de cirurgia?",
    answer:
      "Não. A grande maioria dos casos de dor na coluna pode ser tratada de forma conservadora, sem cirurgia. A avaliação clínica detalhada e os exames de imagem são essenciais para definir o melhor caminho.",
  },
  {
    question: "O que é escoliose e quando precisa de tratamento cirúrgico?",
    answer:
      "Escoliose é uma curvatura lateral da coluna vertebral. O tratamento cirúrgico é indicado em casos de curvas progressivas, deformidades graves ou quando há comprometimento neurológico.",
  },
  {
    question: "Qual a diferença entre neurocirurgião e ortopedista de coluna?",
    answer:
      "Ambos tratam doenças da coluna. O neurocirurgião tem formação adicional em neurologia e neurocirurgia, sendo especialista em casos que envolvem nervos, medula e estruturas neurais.",
  },
];

export default function DesignSystemPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Container className="py-16">
        <Heading as="h1" className="mb-2">
          Design System — O Eixo
        </Heading>
        <p className="text-slate mb-16 font-sans">
          Visualização dos primitivos de UI do website Dr. Deoclides.
        </p>

        {/* Eyebrow */}
        <Section>
          <Eyebrow className="mb-3">Primitivo</Eyebrow>
          <Heading as="h2" className="mb-2">
            Eyebrow + Heading
          </Heading>
          <Eyebrow className="mb-2">Seção de exemplo</Eyebrow>
          <Heading as="h3">Subtítulo h3</Heading>
          <Heading as="h4" className="mt-2">
            Subtítulo h4
          </Heading>
          <p className="text-gold mt-4 font-serif text-2xl italic">
            Por trás de cada coluna existe uma história.
          </p>
        </Section>

        {/* Buttons */}
        <Section>
          <Eyebrow className="mb-4">Buttons</Eyebrow>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Agendar consulta</Button>
            <Button variant="gold">Saiba mais</Button>
            <Button variant="ghost">Ver publicações</Button>
          </div>
        </Section>

        {/* Stats */}
        <Section>
          <Eyebrow className="mb-6">StatItem</Eyebrow>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <StatItem value="14" label="anos de experiência" />
            <StatItem value="12" label="anos como preceptor no HR" />
            <StatItem value="5" label="publicações científicas" />
            <StatItem value="2" label="fellowships internacionais" />
          </div>
        </Section>

        {/* Accordion */}
        <Section>
          <Eyebrow className="mb-4">Accordion (FAQ)</Eyebrow>
          <Accordion items={faqItems} className="max-w-2xl" />
        </Section>

        {/* Palette */}
        <Section>
          <Eyebrow className="mb-4">Paleta</Eyebrow>
          <div className="flex flex-wrap gap-3">
            {[
              ["bg-navy", "text-ivory", "navy"],
              ["bg-navy-deep", "text-ivory", "navy-deep"],
              ["bg-gold", "text-navy-deep", "gold"],
              ["bg-gold-soft", "text-navy-deep", "gold-soft"],
              ["bg-ivory", "text-ink", "ivory"],
              ["bg-bone", "text-ink", "bone"],
              ["bg-slate", "text-ivory", "slate"],
              ["bg-surface border border-line", "text-ink", "surface"],
            ].map(([bg, text, name]) => (
              <div
                key={name}
                className={`${bg} ${text} rounded px-4 py-2 font-sans text-xs`}
              >
                {name}
              </div>
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}
