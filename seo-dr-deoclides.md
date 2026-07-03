# SEO — Website Dr. Deoclides

> Estratégia de palavras-chave, meta tags, dados estruturados e SEO local.
> Base: especialidade (coluna/escoliose), local (Recife/PE), dois públicos (B2C pacientes / B2B médicos) e funil Google Ads → site.
> **Validação de volume:** as palavras-chave abaixo estão priorizadas por intenção, não por volume. A Kommu valida volume real no Google Keyword Planner (conta de Ads) antes de fechar os grupos de campanha.

---

## 1. Arquitetura de palavras-chave

Organizada por intenção, porque é a intenção (não só o tema) que define onde a keyword entra: Ads, página institucional ou blog.

### 1.1. Alta intenção / transacional — prioridade Google Ads (B2C)
Quem busca isso já quer resolver. É aqui que o Ads gasta primeiro.

- cirurgia de escoliose recife
- cirurgia de coluna recife
- neurocirurgião recife
- neurocirurgião de coluna recife
- especialista em coluna recife
- médico de coluna recife
- cirurgia de hérnia de disco recife
- tratamento de escoliose recife
- cirurgia de escoliose pernambuco
- neurocirurgião especialista em coluna
- cirurgião de coluna recife

### 1.2. Procedimento-específico (transacional + página de especialidade)
- cirurgia de espondilolistese
- cirurgia de estenose de canal lombar
- tratamento de malformação de chiari
- artrodese de coluna
- cirurgia minimamente invasiva de coluna
- descompressão de coluna
- cirurgia de cifose

### 1.3. Informacional — SEO orgânico / blog (B2C)
Quem busca isso está pesquisando, com medo, comparando. Conteúdo educativo captura no topo do funil e constrói autoridade.

- escoliose tem cura
- escoliose precisa de cirurgia
- sintomas de escoliose
- escoliose em adultos
- escoliose infantil tratamento
- quando operar hérnia de disco
- dor na coluna quando procurar médico
- diferença entre ortopedista e neurocirurgião de coluna
- recuperação de cirurgia de coluna
- o que é espondilolistese
- malformação de chiari sintomas
- cifose tem tratamento
- dor nas costas que não passa

### 1.4. Marca
Defende o nome (e captura quem ouviu indicação e foi pesquisar — lembrando que a origem hoje é indicação + boca a boca).

- dr deoclides
- deoclides neurocirurgião
- dr deoclides recife
- deoclides coluna

### 1.5. B2B — médicos referenciadores
Baixo volume, alta qualificação. Mais para conteúdo/distribuição (Meta Ads + media kit) do que para busca, mas vale existir.

- encaminhamento neurocirurgia de coluna recife
- referência em deformidade de coluna pernambuco

---

## 2. Mapa palavra-chave → página

| Página | Keyword primária | Keywords de apoio |
|---|---|---|
| Home | neurocirurgião de coluna recife | especialista em coluna recife, cirurgião de coluna recife, dr deoclides |
| Especialidades | cirurgia de coluna recife | cirurgia de escoliose recife, hérnia de disco, espondilolistese, chiari, estenose |
| Sobre | dr deoclides neurocirurgião | especialista em coluna, fellowship coluna |
| Acadêmico | (autoridade/E-E-A-T, sem alvo transacional) | publicações neurocirurgia coluna |
| Blog (cada post) | 1 keyword informacional por post | ver pautas na seção 6 |
| Contato | neurocirurgião recife agendamento | médico de coluna recife, consulta neurocirurgião recife |

**Página de Especialidades:** é única, com seções âncora por procedimento (`#escoliose`, `#hernia-de-disco`, etc.). Cada seção alvo de uma keyword de procedimento. Quando migrarem para páginas próprias via Sanity (fase futura), cada uma vira uma landing de keyword.

---

## 3. Meta tags por página

Prontas para a Metadata API. Títulos ~55-60 caracteres, descrições ~150-160, sempre com keyword + local + gancho.

### Home
- **Title:** `Dr. Deoclides | Neurocirurgião de Coluna em Recife`
- **Description:** `Neurocirurgião especialista em coluna e escoliose em Recife. 14 anos de experiência e fellowship na UCL (Londres). Agende sua avaliação.`

### Especialidades
- **Title:** `Cirurgia de Coluna e Escoliose em Recife | Dr. Deoclides`
- **Description:** `Tratamento de escoliose, hérnia de disco, espondilolistese e casos complexos de coluna. Nem toda dor precisa de cirurgia — avalie com um especialista.`

### Sobre
- **Title:** `Sobre o Dr. Deoclides | Trajetória e Formação`
- **Description:** `Conheça o Dr. Deoclides: 14 anos de experiência, preceptor no Hospital da Restauração, fellowship na UCL (Londres) e treinamento na Alemanha.`

### Acadêmico
- **Title:** `Produção Acadêmica e Científica | Dr. Deoclides`
- **Description:** `Publicações científicas, congressos e atuação acadêmica do Dr. Deoclides em neurocirurgia de coluna, escoliose e casos complexos.`

### Blog
- **Title:** `Blog | Saúde da Coluna — Dr. Deoclides`
- **Description:** `Informação confiável sobre escoliose, hérnia de disco, dor na coluna e tratamentos, escrita por um neurocirurgião especialista em coluna.`

### Contato
- **Title:** `Contato e Agendamento | Dr. Deoclides — Recife`
- **Description:** `Agende sua avaliação com o Dr. Deoclides em Recife. Atendimento no Esmere e Neuron, convênios e particular. Fale pelo WhatsApp.`

> **Padrão de title template** no root: `%s` + ` | Dr. Deoclides` (a Home usa título próprio, sem sufixo duplicado).

---

## 4. Dados estruturados (Schema.org / JSON-LD)

### 4.1. Physician (global, no layout)
Vai no `<head>` de todas as páginas. Placeholders marcados com `[...]` entram quando confirmados.

```json
{
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Deoclides",
  "alternateName": "Deoclides Lima Bezerra Junior",
  "medicalSpecialty": "Neurosurgery",
  "url": "https://drdeoclides.com.br",
  "image": "https://drdeoclides.com.br/og/dr-deoclides.jpg",
  "description": "Neurocirurgião especialista em coluna e escoliose em Recife/PE. Tratamento de casos complexos de coluna.",
  "telephone": "[WhatsApp/telefone a confirmar]",
  "sameAs": [
    "https://www.doctoralia.com.br/deoclides-lima-bezerra-junior/neurocirurgiao/recife",
    "[Instagram a confirmar]"
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "Av. República do Líbano, 251, RioMar Trade Center, 12º andar [sala a confirmar]",
      "addressLocality": "Recife",
      "addressRegion": "PE",
      "addressCountry": "BR",
      "name": "Esmere (Cowork)"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Rua das Fronteiras, 175, Ed. Garagem do Hospital Memorial São José [sala a confirmar]",
      "addressLocality": "Recife",
      "addressRegion": "PE",
      "addressCountry": "BR",
      "name": "Neuron"
    }
  ],
  "availableService": [
    { "@type": "MedicalProcedure", "name": "Cirurgia de escoliose" },
    { "@type": "MedicalProcedure", "name": "Cirurgia de coluna de alta complexidade" },
    { "@type": "MedicalProcedure", "name": "Cirurgia de hérnia de disco" },
    { "@type": "MedicalProcedure", "name": "Tratamento de espondilolistese" }
  ]
}
```

### 4.2. FAQPage (na seção de FAQ da Home / Especialidades)
Liga as perguntas frequentes ao rich snippet do Google. As perguntas finais vêm da pergunta 29 do formulário (as 5 que ele mais ouve). Estrutura:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Toda dor na coluna precisa de cirurgia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Não. A maioria dos casos de dor na coluna é tratada de forma conservadora. A cirurgia é indicada apenas quando é o único caminho para a qualidade de vida do paciente."
      }
    }
    // + as demais perguntas (form, pergunta 29)
  ]
}
```

> Regra: o conteúdo do FAQPage no schema tem que ser **idêntico** ao texto visível na página (o Google penaliza FAQ-schema que não bate com a tela).

---

## 5. Open Graph & técnico

- **OG default:** `og:title`, `og:description` (espelham as meta tags), `og:image` (1200×630, com a marca + retrato — entra quando a Kommu captar; placeholder navy/gold até lá), `og:type: website`, `og:locale: pt_BR`.
- **Slugs** (pt-BR, sem acento, hifenizados): `/sobre`, `/especialidades`, `/academico`, `/blog`, `/blog/[slug]`, `/contato`.
- **sitemap.ts** incluindo posts do Sanity dinamicamente; **robots.ts** liberando tudo menos `/studio` e `/api`.
- **Canonical** por página (evita duplicação se houver parâmetros de Ads, ex.: `?gclid=`).

---

## 6. SEO local (crítico para médico)

Buscas médicas são fortemente locais ("perto de mim", cidade no termo). Isso pesa tanto quanto o on-page:

- **Google Business Profile (GBP)** — criar/reivindicar perfil para os locais de atendimento. É o que faz aparecer no Maps e no bloco local do Google. Ação da Kommu. Provavelmente o maior ganho de captação local fora o Ads.
- **NAP consistente** — Nome, Endereço e Telefone **idênticos** no site, no GBP e na Doctoralia. Divergência (ex.: "Esmere" vs "SMERI", abreviações diferentes) confunde o Google e dilui o ranqueamento local. Daí a importância de fechar os endereços/salas.
- **Doctoralia** — perfil já existe; serve como citação local forte. Linkar no `sameAs` do schema (já incluído).
- **Avaliações** — reviews no GBP e na Doctoralia são fator de ranking local e de conversão. Vale uma rotina (Kommu) de pedir avaliação a pacientes satisfeitos, respeitando o CFM.

---

## 7. Pautas iniciais de blog (para Helena)

Cada pauta mira uma keyword informacional da seção 1.3 e reforça E-E-A-T (experiência, especialização, autoridade, confiança — fator forte para saúde no Google). Bônus: várias nascem direto da voz dele no vídeo.

| Pauta | Keyword-alvo |
|---|---|
| Escoliose tem cura? O que a neurocirurgia oferece | escoliose tem cura |
| Nem toda dor na coluna precisa de cirurgia | dor na coluna quando procurar médico |
| Quando a hérnia de disco realmente exige cirurgia | quando operar hérnia de disco |
| Ortopedista ou neurocirurgião: quem trata a coluna? | diferença ortopedista e neurocirurgião coluna |
| Escoliose em adultos: sintomas e quando se preocupar | escoliose em adultos |
| Como é a recuperação de uma cirurgia de coluna | recuperação de cirurgia de coluna |
| O que é espondilolistese e como é tratada | o que é espondilolistese |

---

## 8. Conformidade (CFM)

O SEO/copy não pode conflitar com a publicidade médica regida pelo CFM. Pontos de atenção que afetam meta tags e conteúdo:

- Sem promessa ou garantia de resultado ("cura garantida", "100% de sucesso").
- Sem sensacionalismo nem termos como "o melhor", "o número 1".
- Sem antes/depois de pacientes.
- Conteúdo educativo e informativo é permitido e incentivado — é a base da estratégia de blog.

> A Kommu valida o copy final sob a ótica do CFM antes de publicar.

---

## 9. Resumo de ações por responsável

| Ação | Responsável |
|---|---|
| Implementar meta tags, schema, sitemap, robots, canonical | Fantom |
| Validar volume das keywords no Keyword Planner | Kommu |
| Estruturar grupos de campanha de Ads a partir da seção 1.1 | Kommu |
| Criar/otimizar Google Business Profile + NAP | Kommu |
| Escrever posts de blog (seção 7) e copy final | Kommu (Helena) |
| Validar copy sob CFM | Kommu |
| Confirmar endereços/salas e telefone (NAP) | Kommu / Dr. Deoclides |
