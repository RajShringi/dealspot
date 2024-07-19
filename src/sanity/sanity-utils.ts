import { groq } from "next-sanity";
import { client } from "./config/client-config";
import { ProductCategoryType } from "@/types/ProductCategoryType";
import { ProductType } from "@/types/ProductType";
import { ProductDetailtype } from "@/types/ProductDetailType";

export async function getProductCategories(): Promise<ProductCategoryType[]> {
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

export async function getFilterProducts(slug: string): Promise<ProductType[]> {
  const query = groq`
  *[_type == "product" && productCategory->slug.current == $slug] {
    _id,
    title,
    "slug":slug.current,
    "Main_Image": Main_Image.asset->url,
    price,
  }
`;
  return client.fetch(query, { slug });
}

export async function getProductDetails(
  slug: string
): Promise<ProductDetailtype> {
  const query = groq`
   *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    "slug":slug.current,
    "Main_Image": Main_Image.asset->url,
    images[]{
    "id": asset->_id,
    "url": asset->url
  },
    price,
    content
  }
  `;
  return client.fetch(query, { slug });
}
