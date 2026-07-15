import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui/Eyebrow";

export const metadata: Metadata = {
  title: { absolute: "Produção Acadêmica e Científica | Dr. Deoclides" },
  description:
    "Publicações científicas, congressos e atuação acadêmica do Dr. Deoclides em neurocirurgia de coluna, escoliose e casos complexos.",
  alternates: {
    canonical: "/academico",
    languages: { "pt-BR": "/academico" },
  },
};

const formacao = [
  {
    period: "2013-2014",
    title: "Especialização em Cirurgia da Coluna Vertebral",
    place: "Hospital da Restauração",
    detail:
      'Título: "Tratamento Cirúrgico da Malformação de Chiari e Siringomielia". Orientador: Dr. Geraldo de Sá Carneiro.',
  },
  {
    period: "2012",
    title: "Observership in Neurosurgery",
    place: "Institute of Neurology, UCL, Londres",
    detail:
      "Deep brain stimulation and ablative surgery for Parkinson's Disease. Orientador: Ludvic Zrinzo. Bolsista da World Federation of Neurosurgical Societies.",
  },
  {
    period: "2008-2013",
    title: "Residência Médica em Neurocirurgia",
    place: "Hospital da Restauração",
    detail: "Bolsista do Ministério da Educação.",
  },
  {
    period: "2001-2006",
    title: "Graduação em Medicina",
    place: "Universidade Federal de Alagoas",
    detail: null,
  },
];

const atuacao = [
  {
    period: "2013-atual",
    title: "Preceptor do Serviço de Neurocirurgia",
    place: "Hospital da Restauração",
  },
  {
    period: "2013-atual",
    title: "Neurocirurgião",
    place: "Hospital Memorial São José",
  },
  {
    period: "2012-atual",
    title: "Plantonista de Neurocirurgia",
    place: "Hospital da Restauração",
  },
  {
    period: "2012",
    title: "Fellowship em Neurocirurgia",
    place: "Institute of Neurology, UCL, Londres",
  },
];

const producaoCientifica = [
  {
    year: "2012",
    title:
      "Deep brain stimulation and ablative surgery for PD between 2002 and 2012",
    venue: "European Society for Stereotactic and Functional Neurosurgery",
  },
  {
    year: "2012",
    title:
      "Unilateral Pallidotomy for Parkinson's Disease in the DBS era: results and complications",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2011",
    title:
      "Ferimento Penetrante Transorbital com hemiparesia ipsilateral: Relato de Caso",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2010",
    title:
      "Avaliação Epidemiológica dos Pacientes Portadores de Fratura Craniana Cirúrgica",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2010",
    title:
      "Tratamento Cirúrgico de Os Odontoideum por Via Transoral e Artrodese Cervical Via Posterior: Relato de Caso",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2010",
    title: "Empiema Subdural em Transição Bulbomedular em Criança",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2010",
    title: "Abordagem Cirúrgica de Cavernoma Mesencefálico: Relato de Caso",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2010",
    title:
      "Neuralgia do Trigêmeo causada por Aneurisma de Artéria Comunicante Posterior",
    venue: "Apresentação de trabalho em congresso",
  },
  {
    year: "2010",
    title:
      "Desempenho da Linguagem em Aneurismas Bilaterais da Artéria Cerebral Média Operados Mediante Acesso Único: Relato de Caso",
    venue: "Apresentação de trabalho em congresso",
  },
];

const congressos = [
  {
    year: "2012",
    name: "European Society for Stereotactic and Functional Neurosurgery",
  },
  { year: "2011", name: "XXVIII Congresso Brasileiro de Neurocirurgia" },
  { year: "2011", name: "Congresso da Academia Brasileira de Neurocirurgia" },
  {
    year: "2009",
    name: "Post-Graduate Course in Pediatric Neurosurgery, Sociedade Brasileira de Neurocirurgia Pediátrica",
  },
];

const premios = [
  {
    year: "2013",
    title: "Membro Titular da Sociedade Brasileira de Neurocirurgia",
  },
  { year: "2012", title: "Membro AOSpine" },
  {
    year: "2011",
    title: "Melhores notas na prova de R3 de Neurocirurgia da SBN",
  },
];

export default function AcademicoPage() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="bg-surface py-14 lg:py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <Eyebrow className="!text-ink">Acadêmico</Eyebrow>

          <h1 className="text-ink font-poppins mt-6 text-[32px] leading-tight font-medium">
            Uma trajetória construída com rigor científico
          </h1>

          <p className="text-slate mt-4 font-sans text-lg leading-relaxed">
            Formação, atuação e produção científica em neurocirurgia, da
            residência no Hospital da Restauração ao fellowship em Londres.
          </p>
        </div>
      </section>

      <section className="bg-surface pb-14 lg:pb-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-navy font-poppins text-[22px] font-medium">
            Formação acadêmica
          </h2>

          <div className="border-line divide-line mt-6 flex flex-col divide-y border-t">
            {formacao.map(({ period, title, place, detail }) => (
              <div
                key={title}
                className="grid gap-1 py-6 sm:grid-cols-[140px_1fr]"
              >
                <span className="text-gold font-sans text-sm font-semibold">
                  {period}
                </span>
                <div>
                  <p className="text-ink font-sans font-medium">{title}</p>
                  <p className="text-slate mt-1 text-sm">{place}</p>
                  {detail && (
                    <p className="text-slate mt-1 text-sm leading-relaxed">
                      {detail}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface pb-14 lg:pb-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-navy font-poppins text-[22px] font-medium">
            Atuação profissional
          </h2>

          <div className="border-line divide-line mt-6 flex flex-col divide-y border-t">
            {atuacao.map(({ period, title, place }) => (
              <div
                key={title + period}
                className="grid gap-1 py-6 sm:grid-cols-[140px_1fr]"
              >
                <span className="text-gold font-sans text-sm font-semibold">
                  {period}
                </span>
                <div>
                  <p className="text-ink font-sans font-medium">{title}</p>
                  <p className="text-slate mt-1 text-sm">{place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-14 lg:py-24">
        <div className="mx-auto max-w-[900px] px-4 sm:px-6 lg:px-8">
          <h2 className="text-ivory font-poppins text-[22px] font-medium">
            Produção científica
          </h2>

          <div className="mt-6 flex flex-col gap-4">
            {producaoCientifica.map(({ year, title, venue }) => (
              <div key={title} className="border-gold/30 rounded-xl border p-5">
                <p className="text-ivory font-sans leading-relaxed font-medium">
                  {title}
                </p>
                <p className="text-ivory/50 mt-2 font-sans text-sm">
                  {venue} · {year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-14 lg:py-24">
        <div className="mx-auto grid max-w-[900px] gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-navy font-poppins text-[22px] font-medium">
              Congressos e eventos
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {congressos.map(({ year, name }) => (
                <li key={name} className="text-slate font-sans text-sm">
                  <span className="text-gold font-semibold">{year}</span> ·{" "}
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-navy font-poppins text-[22px] font-medium">
              Prêmios e reconhecimentos
            </h2>
            <ul className="mt-6 flex flex-col gap-4">
              {premios.map(({ year, title }) => (
                <li key={title} className="text-slate font-sans text-sm">
                  <span className="text-gold font-semibold">{year}</span> ·{" "}
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
