# Website Dr. Deoclides

Site institucional — Dr. Deoclides · Neurocirurgião · Especialista em Coluna · Recife/PE

**Documentação completa:** [`project.md`](./project.md)

## Sobre o projeto

Site de marketing (não é app/dashboard) para o Dr. Deoclides, destino do funil de aquisição (Google Ads → site) e alicerce da autoridade digital. Dois públicos: pacientes (conversão, tom acolhedor) e médicos referenciadores (autoridade, tom técnico). Precisa rankear (SEO) e carregar rápido (Core Web Vitals) — isso guia toda decisão de stack.

**Promessa-norte:** devolver a autonomia, o movimento, a independência do paciente.
**Pilar de confiança:** nem toda dor na coluna precisa de cirurgia.

## Conceito visual — "O Eixo"

A coluna vertebral como eixo do design: vertical, segmentada em vértebras, com a curva da escoliose. O traço dourado é o elemento-assinatura que percorre as páginas. Referência: [`conceito-visual-dr-deoclides.html`](./conceito-visual-dr-deoclides.html).

**Diretrizes:** Navy carrega autoridade; Gold entra só nos momentos que importam (CTA, detalhes); fundo sempre quente (nunca `#FFFFFF`); serifada itálica em dourado = o gesto humano.

### Design tokens

```
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

Fontes (`next/font`): **Newsreader** (display/editorial), **Instrument Sans** (corpo/UI), **Poppins** (títulos de destaque, ex.: H1 da Hero). Tokens completos em [`content/tokens.css`](./content/tokens.css).

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · Sanity · Netlify

Componentes: design system "O Eixo" custom + Radix pontual (Dialog no menu mobile, Accordion no FAQ) — sem shadcn completo, sem monorepo.

## Arquitetura de páginas

| Página         | Conteúdo                                                                                       |
| -------------- | ---------------------------------------------------------------------------------------------- |
| Home           | Hero → autoridade → confiança → especialidades → abordagem → sobre → prova social → fechamento |
| Sobre          | Trajetória, formação, mentores, filosofia                                                      |
| Especialidades | Página única com seções por procedimento                                                       |
| Acadêmico      | Publicações, congressos, ensino/preceptoria                                                    |
| Blog           | Listagem + post + categorias (Sanity CMS)                                                      |
| Contato        | Formulário + WhatsApp + endereços + mapa + convênios                                           |

CTA primário do site: **WhatsApp** (formulário de contato é secundário).

## Setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

## Deploy

Netlify via `@netlify/plugin-nextjs`. Configuração em [`netlify.toml`](./netlify.toml).
