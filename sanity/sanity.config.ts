import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { author } from "./schemas/author";
import { category } from "./schemas/category";
import { post } from "./schemas/post";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

export default defineConfig({
  name: "dr-deoclides",
  title: "Dr. Deoclides",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: [post, author, category],
  },
});
