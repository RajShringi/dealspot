import { getFilterProducts } from "@/sanity/sanity-utils";
import { ProductType } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params: {
    category_slug: string;
  };
};

export default async function page({ params }: Props) {
  const { category_slug } = params;
  const products = await getFilterProducts(category_slug);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-6 h-[calc(100vh-80px)] overflow-auto productList-container">
      {/* BANNER */}
      <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64 rounded-lg my-6">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* PRODUCTS */}
      {products.length == 0 ? (
        <div>
          <div></div>
        </div>
      ) : (
        <div className="flex gap-x-8 gap-y-16 justify-between flex-wrap">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function Product({ product }: { product: ProductType }) {
  return (
    <Link
      href={`/prdocut/${product.slug}`}
      className="w-full sm:w-[45%] lg:w-[22%] bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition-all ease-in-out hover:scale-110 hover:z-10"
    >
      <div className="relative h-[200px]">
        <Image
          src={product.Main_Image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="py-2 text-center">
        <h3 className="font-light text-lg">{product.title}</h3>
        <p className="flex items-center justify-center gap-1 font-medium text-2xl">
          <span className="font-bold text-base">$</span>
          {product.price}
        </p>
      </div>
    </Link>
  );
}
