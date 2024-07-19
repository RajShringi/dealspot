import { PortableTextBlock } from "next-sanity";
import { ProductType } from "./ProductType";

export type ProductDetailtype = ProductType & {
  images: { id: string; url: string }[];
  content: PortableTextBlock[];
};
