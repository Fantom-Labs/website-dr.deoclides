---
name: project-md-sync
description: Mantém o project.md como fonte única de verdade do site do Dr. Deoclides. Use SEMPRE no início de qualquer task de desenvolvimento, refatoração, decisão técnica ou dúvida de arquitetura/stack/conteúdo — leia o project.md antes de agir. Use TAMBÉM sempre que uma decisão, dependência, estrutura, fluxo, token de design ou requisito mudar durante o trabalho: proponha a atualização do project.md e só aplique após aprovação explícita do usuário. Acione mesmo que a task não mencione documentação — manter o project.md fiel ao código é parte de toda entrega.
user-invocable: false
---

# project-md-sync

O `project.md` (na raiz do projeto) é a **fonte única de verdade** do website do Dr. Deoclides: posicionamento e estratégia, voz e promessa, marca, conceito visual "O Eixo", stack definida, design tokens, arquitetura de informação, schema do Sanity, plano de SEO/LGPD, dados confirmados, ordem de execução e pontos em aberto. Esta skill garante duas coisas: que toda decisão **leia** o project.md antes de agir, e que ele **permaneça fiel** ao código — sempre com aprovação do usuário antes de qualquer alteração.

## Regra 1 — Ler antes de agir

No início de qualquer task técnica (criar página/seção, refatorar, configurar, decidir stack/lib, modelar schema do Sanity, mexer em rota/fluxo, aplicar design tokens):

1. Leia o `project.md` na raiz do projeto.
2. Use-o como contexto autoritativo. Se a task pedir algo que **contradiz** o project.md, **pare e sinalize** antes de seguir — não improvise nem assuma que o documento está errado. Exemplos de contradição:
   - Trocar a stack definida (ex.: usar Vercel no lugar do Netlify; Pages Router em vez de App Router; CSS Modules ou styled-components em vez de Tailwind v4; outro CMS no lugar do Sanity).
   - Instalar **shadcn/ui completo** quando a decisão foi componentes custom + Radix pontual.
   - Criar **uma página por especialidade** quando a decisão é página única de Especialidades com seções.
   - Construir a **landing page de Ads separada** antes de resolver o ponto em aberto com o Arthur (página no site vs. isolada).
   - Usar **branco puro (`#FFFFFF`)** no lugar do token `--surface`, ou cores fora da paleta "O Eixo".
   - Disparar **GA4/Meta Pixel/Google Ads sem o gate de consentimento LGPD**.
   - Enviar o formulário de contato para outro destino que não **Resend**.
   - Criar **monorepo/Turborepo** quando a decisão é app Next único com Studio embarcado.
3. Se a informação necessária não estiver no project.md, siga com a melhor decisão alinhada ao que já está documentado e registre que isso é candidato a virar entrada nova (ver Regra 2).

## Regra 2 — Atualizar com aprovação

O project.md deve refletir a realidade do código. Sempre que, durante uma task, algo **mudar ou for definido**, proponha a atualização — **nunca edite sem aprovação**.

**Gatilhos de atualização** (não exaustivo):
- Nova dependência adicionada ou removida (e o porquê).
- Mudança de stack, versão major, ferramenta ou abordagem.
- Novo design token ou ajuste na paleta/tipografia "O Eixo".
- Nova pasta/arquivo estrutural ou mudança no significado de uma pasta.
- Novo schema/campo no Sanity, ou mudança no fluxo de revalidação (webhook).
- Novo fluxo (formulário, consentimento, tempo real) ou alteração em um existente.
- Novo requisito, regra de negócio ou decisão de UX/copy relevante.
- Novo dado confirmado do Dr. Deoclides (endereço, número, especialidade, etc.).
- Resolução de um item da seção "14. Pontos em aberto".

**Fluxo de aprovação:**
1. Ao detectar um gatilho, **não edite ainda**. Apresente a proposta assim:
   - **Seção afetada** do project.md (ex.: "6. Stack", "7. Design tokens", "14. Pontos em aberto").
   - **O que muda** — em um diff curto ou antes/depois objetivo.
   - **Motivo** — uma linha.
2. Pergunte explicitamente: **"Aplico essa atualização no project.md?"**
3. Aplique **somente** após o "sim". Se o usuário ajustar a proposta, incorpore o ajuste antes de gravar.
4. Faça a menor edição possível que mantenha o documento coerente — não reescreva seções inteiras sem necessidade.

## O que NÃO fazer
- Não editar o project.md silenciosamente, "de passagem", junto com outra mudança.
- Não duplicar informação que já existe — atualize no lugar certo.
- Não inflar o documento com detalhes de implementação efêmeros (nomes de variáveis, classes, código). O project.md descreve **decisões e estrutura**, não cada linha de código.
- Não remover contexto de domínio (posicionamento, voz/promessa, marca, dados confirmados) sem que o código/projeto realmente tenha mudado.
- Não cravar dado não confirmado como confirmado (ex.: número de sala dos consultórios) — manter a marcação de "a confirmar" até validação.

## Forma das propostas
Mantenha o estilo do documento: tabelas para stack/dados/requisitos, prosa curta para fluxos e estratégia, pt-BR. Ao propor, mostre só o trecho que muda — não cole o arquivo inteiro.

## Exemplo

> Durante a EP-01 (T8), conectei o Sanity e adicionei `next-sanity` e `@sanity/image-url`, com o Studio embarcado em `app/studio/[[...tool]]`.
>
> **Proposta de atualização do project.md** — Seção 6 (Stack) e Seção 8 (Estrutura de pastas):
> Confirmar que `next-sanity` + `@sanity/image-url` estão instalados e que o Studio vive em `app/studio/[[...tool]]/page.tsx` (já previsto na estrutura).
> Motivo: passo concluído na EP-01, vira referência para as queries GROQ e o pipeline de imagem dos próximos passos.
>
> **Aplico essa atualização no project.md?**