"use client";

import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { ProductDetailtype } from "@/types/ProductDetailType";

export default function AddToCart({ product }: { product: ProductDetailtype }) {
  const { addProduct } = useCart();

  return (
    <div className="flex items-center justify-between border-b border-gray-300 pb-4">
      <div>
        <h3 className="font-bold">
          <span className="text-4xl">{product.price}</span>
          <span className="text-base">$</span>
        </h3>
        <p className="text-xs font-semibold text-green-600">
          inclusive of all taxes
        </p>
      </div>
      <Button
        variant={"default"}
        className="flex gap-4 py-6 px-16 uppercase bg-pink-500 hover:bg-pink-400"
        onClick={() => {
          addProduct({
            _id: product._id,
            title: product.title,
            slug: product.slug,
            Main_Image: product.Main_Image,
            price: product.price,
            quantity: 1,
          });
        }}
      >
        <ShoppingBasket />
        <span>Add To Bag</span>
      </Button>
    </div>
  );
}
