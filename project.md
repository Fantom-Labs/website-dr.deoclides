# project.md — Website Dr. Deoclides

> Fonte única de verdade do projeto. Tudo que for decidido entra aqui.
> **Parceria:** Fantom (design & desenvolvimento) × Kommu Comunicação (estratégia, conteúdo & tráfego)
> **Última atualização:** Junho 2026

---

## 1. Visão geral

Site institucional de marketing para o **Dr. Deoclides**, neurocirurgião especialista em coluna e escoliose, em Recife/PE. O site é o destino do funil de aquisição (Google Ads → site) e o alicerce da construção de autoridade digital.

**Não é** um app/dashboard. É conteúdo que precisa rankear (SEO) e carregar rápido (Core Web Vitals). Isso define toda a stack.

- **Domínio:** `doutordeoclides.com.br` (registro pela Kommu, no CPF do Dr. Deoclides)
- **Prazo-alvo:** ~30 dias
- **Repositório:** GitHub `fantom-labs`

---

## 2. Posicionamento e estratégia

### Dois públicos

**B2C — Pacientes (foco de conversão)**
Pacientes de coluna/escoliose de alta complexidade e familiares, em momento de vulnerabilidade e medo (déficits motores, perda de mobilidade). 90% convênio. Captação via Google Ads (intenção direta: "cirurgia de escoliose recife"). Tom acolhedor e desmistificador.

**B2B — Médicos referenciadores (autoridade)**
Pediatras, ortopedistas, geriatras, reumatologistas. Objetivo: rede de indicação + convites para congressos. Tom técnico. Captação futura via Meta Ads (distribuição de artigos científicos).

### Origem atual dos pacientes

Indicação de colegas + boca a boca. O site + Ads é um canal **novo** — não há tráfego digital hoje.

### Tráfego (definido com a Kommu)

Início: 100% Google Ads. Evolução: 70% Google Ads / 30% Meta Ads (remarketing e marca).

---

## 3. Voz e promessa

Extraídos de vídeo gravado pelo próprio Dr. Deoclides. Esta é a voz real — o copy do site deriva daqui (Helena refina).

**Tom:** cristão, acolhedor, orientador. Autoridade sem frieza. Acadêmico sem ser inacessível.

**Promessa-norte (fechamento de tudo):**

> Devolver a sua autonomia, o seu movimento, a sua independência.

**Pilares de mensagem:**

1. Cada coluna é uma história — olhar único para cada caso
2. O diagnóstico correto é o primeiro passo para o tratamento eficaz
3. **Nem toda dor na coluna precisa de cirurgia** (diferencial de confiança — desarma o medo)
4. Quando a intervenção é o único caminho, não há espaço para incertezas
5. Ciência (evidências) + inovação (tecnologia) + experiência (casos complexos) caminham juntas

**Frases levantáveis (a refinar):**

- "Por trás de cada coluna existe uma história."
- "Você não busca apenas um médico. Você busca segurança."
- "Nem toda dor na coluna precisa de cirurgia."

---

## 4. Marca

- **Nome de exibição:** Dr. Deoclides (o "Junior" foi removido para construir autoridade sênior)
- **Nome legal:** Deoclides Lima Bezerra Junior
- **Assinatura:** Dr. Deoclides | Neurocirurgião — Especialista em Coluna
- **Logo:** monograma "D" fundido a uma coluna vertebral estilizada (curva fluida = tratamento de deformidades/escoliose). Solicitar vetores à Kommu (SVG, PNG, variações fundo claro/escuro).
- **Cores da marca:** Deep Navy (azul-marinho) + Champagne Gold (dourado)
- **Manual da marca:** em finalização pela Kommu — solicitar via Google Drive

---

## 5. Conceito visual — "O Eixo"

A coluna como eixo do design: vertical, segmentada em vértebras, com a curva da escoliose. O motivo da coluna (traço dourado) é o elemento-assinatura que percorre as páginas. Ecoa a própria voz do médico ("por trás de cada coluna existe uma história").

Arquivo de referência: `conceito-visual-dr-deoclides.html`

---

## 6. Stack (travada)

| Camada          | Tecnologia                                                        |
| --------------- | ----------------------------------------------------------------- |
| Framework       | Next.js 16.2.7 (App Router, Turbopack default)                    |
| Runtime React   | React 19.2                                                        |
| Linguagem       | TypeScript                                                        |
| Estilo          | Tailwind CSS v4 (tokens via `@theme`)                             |
| Fontes          | next/font — Newsreader (display) + Instrument Sans (corpo)        |
| CMS             | Sanity + next-sanity + @sanity/image-url (Studio em `/studio`)    |
| Queries CMS     | GROQ + cache explícito (`cacheTag` / `revalidateTag` via webhook) |
| Componentes     | Custom (design system "O Eixo") + Radix pontual                   |
| Utilitários     | clsx (helper `cn` para merge de classes nos primitivos)           |
| Formulário      | React Hook Form + Zod + @hookform/resolvers                       |
| Envio de e-mail | Resend + React Email                                              |
| Imagens         | next/image + pipeline de imagem do Sanity (hotspot)               |
| SEO             | Metadata API + Schema.org + sitemap + robots                      |
| Analytics       | GA4 + Meta Pixel + Google Ads (gated por consentimento LGPD)      |
| Anti-spam       | Honeypot + Cloudflare Turnstile (verificados no route handler)    |
| Tipagem CMS     | Sanity TypeGen (queries GROQ tipadas)                             |
| Performance     | Lighthouse CI com budgets (LCP < 2.5s, CLS < 0.1) no pipeline     |
| Testes          | Playwright smoke tests (opcional, após existirem páginas)         |
| Deploy          | Netlify (`@netlify/plugin-nextjs`), Node 20                       |
| Repositório     | GitHub `fantom-labs`                                              |

### Notas do Next.js 16

- Turbopack é default no dev e no build (sem flag). Não usar config custom de webpack (build falha de propósito).
- Caching é explícito (Cache Components / `use cache`). Melhor para nosso caso: controle fino de revalidação por página.
- `cacheLife` / `cacheTag` estáveis (sem prefixo `unstable_`).
- Middleware renomeado para `proxy.ts`. Não usamos middleware pesado — provavelmente nenhum.
- Node mínimo 20 — garantir no Netlify.

### Radix — apenas onde há a11y/interação

- Dialog → menu mobile (drawer)
- Accordion → FAQ (perguntas frequentes)
- Demais componentes (hero, stats, especialidades, footer) são custom no design system.

### Por que não shadcn completo, não monorepo

- Design muito autoral → shadcn exigiria mais override do que estilo do zero. Usamos a fundação de a11y do Radix sem a camada estética do shadcn.
- Site web único → app Next único com Studio embarcado. Sem Turborepo.

---

## 7. Design tokens

Valores do conceito "O Eixo". Entram no `@theme` do Tailwind v4.

```
/* Cores */
--navy:        #15263F   /* primária — autoridade, rigor */
--navy-deep:   #0E1B2E   /* texto/fundo escuro */
--gold:        #C2A05B   /* acento premium — usar com parcimônia */
--gold-soft:   #D4BC84   /* acento sobre fundo escuro */
--ivory:       #F6F2E9   /* texto sobre navy / fundo quente */
--bone:        #ECE6D8   /* superfície secundária */
--slate:       #5E6E7E   /* texto de apoio */
--ink:         #1A2230   /* texto sobre claro */
--surface:     #FBF9F3   /* fundo da página (quente, nunca branco puro) */
--line:        rgba(21, 38, 63, 0.12)  /* divisores */
```

```
/* Tipografia */
--font-serif:  'Newsreader'        /* display, títulos, momentos editoriais/acadêmicos */
--font-sans:   'Instrument Sans'   /* corpo, UI, sobrancelhas */
```

**Diretrizes:** Navy carrega a autoridade; Gold entra só nos momentos que importam (CTA, detalhes, a curva da coluna). Fundo quente (nunca `#FFFFFF`) é o que separa o site de uma clínica fria. Serifada itálica em dourado = o gesto humano.

---

## 8. Arquitetura de informação

### Site institucional

| Página         | Conteúdo                                                                                                                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Home           | Hero (história + olhar único) → números de autoridade → confiança ("nem toda dor precisa de cirurgia") → especialidades → abordagem (3 pilares) → sobre (resumo) → prova social → fechamento (a missão) |
| Sobre          | Trajetória, formação (UCL, Alemanha, HR), mentores, filosofia, valores                                                                                                                                  |
| Especialidades | **Página única** com seções por procedimento (não uma página por procedimento)                                                                                                                          |
| Acadêmico      | 5 publicações, congressos, ensino/preceptoria                                                                                                                                                           |
| Blog           | Listagem + post + categorias (Sanity CMS)                                                                                                                                                               |
| Contato        | Formulário + WhatsApp + endereços + mapa + convênios                                                                                                                                                    |

### Estrutura sugerida de pastas

```
app/
  (site)/
    page.tsx                 # Home
    sobre/page.tsx
    especialidades/page.tsx
    academico/page.tsx
    blog/
      page.tsx               # listagem
      [slug]/page.tsx        # post
    contato/page.tsx
    layout.tsx               # header/footer institucional
  studio/[[...tool]]/page.tsx  # Sanity Studio embarcado
  api/
    contato/route.ts         # POST → Resend
    revalidate/route.ts      # webhook Sanity → revalidateTag
  sitemap.ts
  robots.ts
  layout.tsx                 # root (fonts, consent, analytics)
components/
  ui/                        # primitivos custom (+ wrappers Radix)
  sections/                  # hero, stats, especialidades, confianca, etc.
lib/
  sanity/                    # client, queries (GROQ), image-url
  schema/                    # zod schemas
  seo/                       # structured data helpers
sanity/
  schemas/                   # post, author, category
content/
  tokens.css                 # design tokens "O Eixo"
```

---

## 9. Sanity (CMS)

**Fase 1 — apenas blog.** Schema inicial:

- `post` — title, slug, excerpt, coverImage (hotspot), body (Portable Text), category (ref), publishedAt, seo (title/description/og)
- `author` — Dr. Deoclides (single)
- `category` — nome, slug

Revalidação: webhook do Sanity → `app/api/revalidate/route.ts` → `revalidateTag`. Conteúdo fresco sem rebuild.

**Fase futura:** páginas por especialidade e seção "Para Médicos" entram no mesmo schema, permitindo à Kommu publicar sem deploy.

---

## 10. SEO e conversão

> Estratégia completa (palavras-chave, meta tags prontas, schema, SEO local, pautas de blog, CFM): ver `seo-dr-deoclides.md`.

- **Metadata API** por página (title, description, OG dinâmico)
- **Schema.org / JSON-LD:** `Physician`, `MedicalBusiness`, `MedicalProcedure`, e `FAQPage` (ligado às perguntas frequentes do formulário → potencial rich snippet)
- **sitemap.ts** + **robots.ts**
- **next/image** para retratos e imagens do blog
- HTML semântico, headings corretos

### LGPD + Analytics

Banner de consentimento que **gateia** GA4, Meta Pixel e Google Ads — scripts só disparam após opt-in. IDs de tracking vêm da Kommu (entram na reta final, não bloqueiam o desenvolvimento).

---

## 11. Formulário de contato

- CTA primário do site continua sendo **WhatsApp**. O formulário é secundário.
- Fluxo: `app/api/contato/route.ts` recebe POST → valida honeypot + Cloudflare Turnstile → valida com Zod → dispara e-mail via Resend (template React Email) para o consultório.
- O mesmo schema Zod valida no cliente (UX, via React Hook Form) e no servidor (segurança).
- Domínio de envio verificado: `doutordeoclides.com.br`.

---

## 12. Dados confirmados

| Campo           | Valor                                                                 |
| --------------- | --------------------------------------------------------------------- |
| Nome (exibição) | Dr. Deoclides                                                         |
| Nome legal      | Deoclides Lima Bezerra Junior                                         |
| CRM             | PE 17015                                                              |
| RQE             | 1548                                                                  |
| Especialidade   | Neurocirurgião · Especialista em Coluna                               |
| Experiência     | 14 anos (formado 2012); 12 anos preceptor no HR                       |
| Formação intl.  | Fellowship UCL (Londres) + treinamentos na Alemanha                   |
| Mentores        | Prof. Cavalli, Prof. Alexander Rosato (SP)                            |
| Publicações     | 5 trabalhos científicos recentes                                      |
| Doctoralia      | doctoralia.com.br/deoclides-lima-bezerra-junior/neurocirurgiao/recife |

### Locais de atendimento

| Local                        | Tipo            | Endereço                                                                                                      |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------- |
| Esmere (Cowork)              | Consultório     | RioMar Trade Center, Av. República do Líbano, 251, 12º andar, Pina, Recife/PE _(sala a confirmar)_            |
| Neuron                       | Consultório     | Rua das Fronteiras, 175, Ed. Garagem do Hospital Memorial São José, Boa Vista, Recife/PE _(sala a confirmar)_ |
| Memorial São José            | Cirúrgico       | Recife/PE                                                                                                     |
| Hospital Esperança           | Cirúrgico       | Recife/PE                                                                                                     |
| Hospital da Restauração (HR) | Preceptoria/SUS | Av. Gov. Agamenon Magalhães, s/n, Boa Vista, Recife/PE, CEP 52.010-040                                        |

### Alocação de tempo

Consultório 30% · Bloco cirúrgico 30% · Preceptoria/educação (HR) 20% · SUS 20%. Marketing rentabiliza os 60% de consultório+bloco; os 40% de HR/SUS são âncora de autoridade.

---

## 13. Ordem de execução

**Independe de terceiros — começa já:**

1. Scaffold `create-next-app` (Next 16, TS, Tailwind v4, App Router)
2. Design tokens "O Eixo" no `@theme` + fontes via next/font
3. Layout base (header + footer) + sistema de componentes
4. Home (seções na ordem da seção 8) com conteúdo placeholder
5. Páginas Sobre, Especialidades, Acadêmico, Contato
6. Sanity: schema do blog + Studio em `/studio` + páginas de blog + webhook de revalidação
7. Formulário de contato → Resend
8. SEO técnico: metadata, structured data, sitemap, robots
9. Banner LGPD + injeção condicional de analytics

**Depende da Kommu (reta final, não bloqueia):** 10. Apontar `doutordeoclides.com.br` para o Netlify 11. IDs de tracking (GA4, Google Ads, Meta Pixel) 12. Retratos profissionais (design funciona com placeholder até lá) 13. Vetores da marca + manual

---

## 14. Pontos em aberto

- [ ] **Landing page de Ads:** página dentro do site (`/escoliose`) ou separada sem navegação? Impacta escopo/custo. → alinhar com Arthur
- [ ] Confirmar números de sala (Esmere e Neuron) e horários de atendimento → Kommu/Dr. Deoclides
- [ ] Registro e apontamento do domínio → Kommu
- [ ] IDs de tracking → Kommu
- [ ] Vetores da marca + manual finalizado → Kommu
- [ ] Lista final de especialidades para a página → Dr. Deoclides (formulário)
- [ ] Grau de explicitação de fé/valores cristãos no site → Dr. Deoclides (formulário)
- [ ] Versão em inglês: lançamento ou fase futura? → Dr. Deoclides (formulário)
- [ ] Números de autoridade (nº de cirurgias, residentes formados) → Dr. Deoclides (formulário)
- [ ] Depoimentos e material fotográfico existente: onde estão → Dr. Deoclides (formulário)

---

## 15. Divisão de responsabilidades

| Frente                                                                  | Responsável    |
| ----------------------------------------------------------------------- | -------------- |
| Design system, UI/UX, frontend, infra, deploy, SEO técnico, integrações | Fantom (Múcio) |
| Estratégia de conteúdo, copywriting, blog, direção editorial            | Kommu (Helena) |
| Gestão de projeto, cliente, domínio, contas de anúncio                  | Kommu (Arthur) |
| Tráfego pago (Google Ads, Meta Ads)                                     | Kommu          |
| Validação de conteúdo, materiais, retratos, casos                       | Dr. Deoclides  |
