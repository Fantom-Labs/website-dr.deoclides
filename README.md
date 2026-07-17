# Website Dr. Deoclides

Site institucional de um neurocirurgião especialista em coluna (Recife/PE) — landing de marketing voltada a SEO e Core Web Vitals, com blog headless via Sanity CMS.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![Sanity](https://img.shields.io/badge/Sanity-CMS-F03E2F?logo=sanity&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-Deploy-00C7B7?logo=netlify&logoColor=white)

**Documentação de produto completa:** [`project.md`](./project.md) — posicionamento, estratégia, marca e decisões de escopo do projeto.

## Sobre o projeto

Site de marketing (não é um app/dashboard) desenhado como destino de um funil de aquisição via Google Ads e como alicerce de autoridade digital para dois públicos: pacientes (tom acolhedor, foco em conversão) e médicos referenciadores (tom técnico, foco em rede de indicação). Toda decisão de stack e arquitetura foi guiada por dois requisitos de negócio: **rankear bem** (SEO) e **carregar rápido** (Core Web Vitals).

## Funcionalidades

- **Design system autoral ("O Eixo")** — biblioteca de componentes própria (Button, Section, Accordion, Container, StatItem etc.) construída sobre tokens de cor/tipografia do Tailwind v4, com Radix UI usado pontualmente onde a11y/interação exigem (`Dialog` no menu mobile, `Accordion` no FAQ).
- **Blog headless com Sanity CMS** — schemas tipados (`post`, `author`, `category`), queries GROQ com tipagem gerada via Sanity TypeGen, listagem + página de post com Portable Text e metadata dinâmica.
- **Revalidação incremental via webhook** — `app/api/revalidate` recebe o webhook do Sanity, valida o segredo com `timingSafeEqual` e dispara `revalidateTag`, publicando conteúdo novo sem rebuild.
- **Cache explícito do Next 16** — `cacheComponents` habilitado; páginas de dados usam `"use cache"` + `cacheTag`/`cacheLife` para controle fino de revalidação por rota (ex.: `sitemap.ts`).
- **SEO técnico** — Metadata API por página, dados estruturados JSON-LD (`Physician`, `MedicalBusiness`) no layout, `sitemap.ts` dinâmico (inclui posts do CMS) e `robots.ts`.
- **Analytics com gate de consentimento (LGPD)** — banner de consentimento que libera GA4/Meta Pixel/Google Ads somente após opt-in.
- **Performance orçada** — Lighthouse CI (`.lighthouserc.json`) com budgets de LCP < 2.5s e CLS < 0.1, rodando contra o build de produção.
- **Página de referência do design system** (`/ds`) — showcase interno dos componentes de UI para desenvolvimento e QA visual.
- **Sanity Studio embarcado** (`/studio`) — administração de conteúdo dentro da mesma aplicação Next, sem app separado.

## Stack e decisões técnicas

| Camada         | Tecnologia                                   | Por quê                                                                            |
| -------------- | --------------------------------------------- | ----------------------------------------------------------------------------------- |
| Framework      | Next.js 16 (App Router, Turbopack)            | Cache Components nativo, geração estática + revalidação sob demanda                 |
| Runtime        | React 19                                      | Server Components por padrão, menos JS no client                                    |
| Linguagem      | TypeScript                                    | Tipagem ponta a ponta, incluindo as queries do CMS                                   |
| Estilo         | Tailwind CSS v4 (`@theme`)                     | Tokens de design versionados como CSS, zero runtime de CSS-in-JS                     |
| Componentes    | Design system custom + Radix UI pontual        | Design autoral não se beneficia de um kit completo; Radix cobre a11y onde importa   |
| CMS            | Sanity + `next-sanity` + `@sanity/image-url`   | Conteúdo editável sem deploy, pipeline de imagem com hotspot                         |
| Tipagem de CMS | Sanity TypeGen                                | Queries GROQ com tipos gerados a partir do schema real                              |
| Utilitário     | `clsx`                                        | Merge condicional de classes nos primitivos de UI                                    |
| Performance    | Lighthouse CI                                 | Budgets de Core Web Vitals verificados no pipeline, não só no dev                    |
| Deploy         | Netlify (`@netlify/plugin-nextjs`), Node 20    | SSR/ISR do Next suportado nativamente na plataforma                                  |

## Arquitetura

```
app/
  (site)/                    # rotas públicas — header/footer institucional
    page.tsx                 # Home
    especialidades/page.tsx
    academico/page.tsx
    blog/
      page.tsx               # listagem (Sanity)
      [slug]/page.tsx        # post (Portable Text + JSON-LD Article)
    contato/page.tsx
  studio/[[...tool]]/        # Sanity Studio embarcado
  ds/page.tsx                # showcase do design system
  api/
    revalidate/route.ts      # webhook Sanity → revalidateTag
  sitemap.ts / robots.ts
  layout.tsx                 # fonts, JSON-LD, analytics, consent
components/
  ui/                        # primitivos do design system (+ wrappers Radix)
  sections/                  # blocos da Home (Hero, Specialties, Approach, FAQ...)
  blog/                      # PostCard, Portable Text renderer
  analytics/                 # Analytics + ConsentBanner (gate LGPD)
lib/
  sanity/                    # client, queries GROQ, helper de imagem
  seo/                       # geradores de JSON-LD
sanity/
  schemas/                   # post, author, category
content/
  tokens.css                 # design tokens "O Eixo"
```

A Home é composta por seções independentes (`Hero`, `About`, `Specialties`, `Approach`, `Convenios`, `Faq`, `Testimonials`, `Locations`), cada uma um componente isolado em `components/sections/`, permitindo reordenar ou remover blocos sem tocar na página.

## Design system — "O Eixo"

A coluna vertebral como eixo do design: vertical, segmentada em vértebras, com a curva da escoliose. Um traço dourado funciona como elemento-assinatura ao longo das páginas. Referência visual completa: [`conceito-visual-dr-deoclides.html`](./conceito-visual-dr-deoclides.html).

**Diretrizes:** Navy carrega autoridade; Gold entra só nos momentos que importam (CTA, detalhes); fundo sempre quente (nunca `#FFFFFF`); serifada itálica em dourado é o gesto humano da marca.

### Tokens

```css
--navy:        #15263F   /* primária — autoridade, rigor */
--navy-deep:   #0E1B2E   /* texto/fundo escuro */
--gold:        #C2A05B   /* acento premium — usar com parcimônia */
--gold-soft:   #D4BC84   /* acento sobre fundo escuro */
--ivory:       #F6F2E9   /* texto sobre navy / fundo quente */
--bone:        #ECE6D8   /* superfície secundária */
--slate:       #5E6E7E   /* texto de apoio */
--ink:         #1A2230   /* texto sobre claro */
--surface:     #FBF9F3   /* fundo da página */
--line:        rgba(21, 38, 63, 0.12)
```

Tipografia via `next/font`: **Newsreader** (display/editorial), **Instrument Sans** (corpo/UI), **Poppins** (títulos de destaque, ex.: H1 da Hero). Tokens completos em [`content/tokens.css`](./content/tokens.css).

## Rodando localmente

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000). As variáveis de ambiente (Sanity, Resend, Cloudflare Turnstile, analytics) estão documentadas em [`.env.example`](./.env.example).

### Scripts

| Comando                | Descrição                                                |
| ------------------------ | ----------------------------------------------------------- |
| `npm run dev`            | Servidor de desenvolvimento (Turbopack)                     |
| `npm run build`          | Build de produção                                            |
| `npm run lint`           | ESLint                                                       |
| `npm run format`         | Prettier (write)                                             |
| `npm run format:check`   | Prettier (check)                                             |
| `npm run typegen`        | Extrai o schema do Sanity e gera tipos das queries GROQ     |
| `npm run lhci`           | Lighthouse CI contra os budgets de performance               |

## Deploy

Netlify via `@netlify/plugin-nextjs`, Node 20. Configuração em [`netlify.toml`](./netlify.toml).
