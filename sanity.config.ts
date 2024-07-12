import schema from "@/sanity/schemas";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

const config = defineConfig({
  projectId: "q8ayhtjl",
  dataset: "production",
  basePath: "/admin", // url where we want our sanity studio to live
  plugins: [structureTool()],
  schema: {
    types: schema,
  },
});

export default config;
