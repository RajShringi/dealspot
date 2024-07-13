import { ProductCategory } from "@/types/ProductCategory";
import { groq } from "next-sanity";
import { client } from "./config/client-config";

export async function getProductCategories(): Promise<ProductCategory[]> {
  const data = client.fetch(
    groq`*[_type == "productCategory"]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        description,
        "Category_Image": Category_Image.asset->url
        }`
  );
  return data;
}
