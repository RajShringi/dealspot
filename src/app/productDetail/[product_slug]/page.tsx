import AddToCart from "@/components/AddToCart";
import ProductImage from "@/components/ProductImage";
import { getProductDetails } from "@/sanity/sanity-utils";
import { Truck } from "lucide-react";
import { PortableText, PortableTextComponents } from "next-sanity";
import React from "react";

type Props = {
  params: { product_slug: string };
};

const myPortableTextComponents: PortableTextComponents = {
  block: {
    // Ex. 1: customizing common block types
    h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
  },
  list: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => <ul className="mt-xl px-4">{children}</ul>,
  },
  listItem: {
    // Ex. 1: customizing common list types
    bullet: ({ children }) => (
      <li style={{ listStyleType: "circle" }} className="py-2 text-gray-700">
        {children}
      </li>
    ),
  },
};

export default async function ProductDetail({ params }: Props) {
  const product = await getProductDetails(params.product_slug);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-6">
      <div className="flex flex-col gap-6 lg:flex-row justify-between">
        {/* IMAGES */}
        <ProductImage slug={product.slug} images={product.images} />

        <div className="w-[45%] flex flex-col gap-6">
          {/* PRODUCT DETAILS */}
          <div>
            <PortableText
              value={product.content}
              components={myPortableTextComponents}
            />
          </div>
          <AddToCart price={product.price} />
          {/* DELIVERY OPTIONS */}
          <div className="flex flex-col gap-2">
            <h3 className="uppercase font-semibold tracking-wide flex gap-2 ">
              <span>Delivery options</span>
              <span>
                <Truck />
              </span>
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="text-sm text-gray-700">100% Original Products</li>
              <li className="text-sm text-gray-700">
                Pay on delivery might be available
              </li>
              <li className="text-sm text-gray-700">
                Easy 14 days returns and exchanges
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
