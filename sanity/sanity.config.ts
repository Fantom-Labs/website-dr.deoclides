import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "dr-deoclides",
  title: "Dr. Deoclides",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [], // schemas de conteúdo adicionados no EP-02 (blog)
  },
});
