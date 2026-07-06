import { defineArrayMember, defineField, defineType } from "sanity";

function block(style: "normal" | "h2" | "h3" | "blockquote", text: string) {
  return {
    _type: "block" as const,
    _key: crypto.randomUUID(),
    style,
    markDefs: [],
    children: [{ _type: "span" as const, _key: crypto.randomUUID(), text }],
  };
}

export const post = defineType({
  name: "post",
  title: "Post",
  type: "document",
  initialValue: () => ({
    publishedAt: new Date().toISOString(),
    body: [
      block("h2", "Introdução"),
      block(
        "normal",
        "Escreva aqui um parágrafo de abertura que conecta com a dúvida ou o medo do leitor.",
      ),
      block("h2", "O que diz a ciência"),
      block(
        "normal",
        "Explique aqui o conteúdo técnico de forma acessível — causas, evidências, tratamento.",
      ),
      block("h3", "Quando procurar um especialista"),
      block(
        "normal",
        "Liste sinais de alerta ou situações em que vale buscar avaliação médica.",
      ),
      block("blockquote", "Nem toda dor na coluna precisa de cirurgia."),
      block("h2", "Conclusão"),
      block(
        "normal",
        "Feche reforçando a promessa central — devolver autonomia, movimento e independência — e convide para agendar uma avaliação.",
      ),
    ],
  }),
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "reference",
      to: [{ type: "author" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "category" }] })],
    }),
    defineField({
      name: "mainImage",
      title: "Imagem principal",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Texto alternativo",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado em",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Resumo",
      type: "text",
      description: "Usado no card de listagem. Máximo 200 caracteres.",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "body",
      title: "Corpo",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Meta título",
          type: "string",
          description:
            "Título para buscadores. Inclua a palavra-chave principal do post (ex.: 'escoliose tem cura'). Até 60 caracteres.",
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: "metaDescription",
          title: "Meta descrição",
          type: "text",
          description:
            "Descrição para buscadores e compartilhamento. Palavra-chave + gancho. Até 160 caracteres.",
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: "ogImage",
          title: "Imagem OG",
          type: "image",
          options: { hotspot: true },
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", media: "mainImage", subtitle: "publishedAt" },
  },
});
