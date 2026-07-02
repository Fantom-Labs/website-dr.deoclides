---
name: git-commit
description: Padrão de commits do projeto (Fantom). Use SEMPRE que houver mudanças prontas para versionar — ao concluir uma task, um arquivo ou um bloco de trabalho coerente. O agente PROPÕE a mensagem no padrão definido, ESPERA o ok do usuário, commita localmente e NUNCA dá push (o push é sempre manual, feito pelo usuário). Acione mesmo que o usuário não peça "commita" explicitamente — sugerir o commit no momento certo é parte do fluxo.
user-invocable: false
---

# git-commit

Padrão de commits do projeto. Garante histórico limpo, consistente e legível. Duas regras inegociáveis de fluxo:

1. **Nunca dar `git push`.** O push é exclusivamente manual, feito pelo usuário quando ele quiser. O agente só commita localmente.
2. **Sempre propor a mensagem e esperar o "ok"** antes de rodar `git commit`. Não commitar sem aprovação explícita.

## Fluxo

1. Quando houver mudanças prontas para versionar (task concluída, arquivo finalizado, bloco coerente de trabalho), proponha o commit — mesmo que o usuário não tenha pedido.
2. Verifique o que está em staging (`git status`, `git diff --staged`). Se nada estiver staged, mostre o que mudou e proponha o `git add` dos arquivos relevantes.
3. Apresente a **mensagem proposta** no padrão abaixo + a lista de arquivos que entram.
4. Pergunte explicitamente: **"Commito assim?"**
5. Só rode `git commit` após o "ok". Se o usuário ajustar a mensagem, incorpore antes.
6. **Nunca** rode `git push`. Se o usuário quiser publicar, lembre que o push é manual.

## Estrutura da mensagem

```
[emoji] [tipo]: [mensagem curta em letras minúsculas]
```

| Emoji | Tipo | Quando usar |
|---|---|---|
| ✨ | feature | Nova funcionalidade |
| 🐛 | fix | Correção de bug ou erro |
| 📝 | docs | Só documentação (README, project.md, wikis) |
| 🎨 | style | Mudança visual sem alterar lógica (CSS, formatação, cores, UI) |
| ⚡ | perf | Mudança que melhora desempenho |
| ♻️ | refactor | Refatoração que não corrige bug nem cria feature |
| 🧪 | test | Adição/modificação de testes |
| 🚀 | deploy | Deploy, CI/CD, infraestrutura |
| 🔒️ | security | Correção de vulnerabilidade ou melhoria de segurança |
| 🧹 | chore | Tarefas repetitivas, atualização de dependências (sem mexer na lógica) |
| 🐉 | epic | Entrega massiva, fusão de branch grande, lançamento de versão |

Ajustes visuais simples (cor, espaçamento, pequeno ajuste de UI) usam `🎨 style`.

## Boas práticas

- **Seja direto:** a mensagem diz *o que* foi feito, não *como*. Curta.
- **Imperativo/presente:** `fix: corrige X`, não `corrigido` nem `corrigindo`.
- **Um propósito por commit:** não misture `feature` com `fix`. Se o trabalho tem dois propósitos, proponha **dois commits separados** (faça o staging seletivo com `git add <arquivos>` de cada grupo).
- **Minúsculas** na mensagem após o tipo.
- Não inclua assinatura de ferramenta/agente na mensagem nem no corpo do commit.

## Exemplos

```
✨ feature: adiciona seção de confiança na home
🐛 fix: corrige rota duplicada entre app/page e (site)/page
📝 docs: atualiza stack no project.md para next 16.2.7
🎨 style: aplica tokens "O eixo" no botão primário
🧹 chore: adiciona dependências do sanity
🚀 deploy: configura netlify plugin e node 20
```

## Exemplo de proposta ao usuário

> Mudanças prontas para commit (T1 — scaffold):
> - `package.json`, `tsconfig.json`, `next.config.ts`, `app/layout.tsx`, `app/page.tsx`
>
> **Mensagem proposta:**
> `🚀 deploy: faz scaffold do next 16 com typescript e tailwind v4`
>
> **Commito assim?** (lembrando: não dou push — isso fica com você)
