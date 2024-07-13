import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "q8ayhtjl",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-07-13",
});
