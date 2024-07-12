import { createClient, groq } from "next-sanity";

export async function getProductCategories() {
  const client = createClient({
    projectId: "q8ayhtjl",
    dataset: "production",
  });

  const data = client.fetch(
    groq`*[_type == "productCategory"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        description
        }`
  );
  return data;
}
