"use client";

import { ShoppingBasket } from "lucide-react";
import { Button } from "./ui/button";

export default function AddToCart({ price }: { price: number }) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="font-bold">
          <span className="text-4xl">{price}</span>{" "}
          <span className="text-base">$</span>
        </h3>
        <p className="text-xs font-semibold text-green-600">
          inclusive of all taxes
        </p>
      </div>
      <Button
        variant={"default"}
        className="flex gap-4 py-6 px-16 uppercase bg-pink-600 hover:bg-pink-500"
      >
        <ShoppingBasket />
        <span>Add To Bag</span>
      </Button>
    </div>
  );
}
