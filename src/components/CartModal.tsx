"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { CartType } from "@/types/CartType";
import { Box } from "lucide-react";

export default function CartModal() {
  const { cart } = useCart();
  return (
    <div className=" absolute right-0 top-10 shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] z-20 bg-white p-4 w-max rounded-md flex flex-col gap-6">
      <h2 className="font-medium text-xl">Shopping Cart</h2>
      {cart.map((item) => (
        <Item key={item._id} item={item} />
      ))}

      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-4">
          <Box size={200} className="text-gray-400" />
          <div>
            <h3 className="text-gray-600 font-medium">
              Hey, It feel so light!
            </h3>
            <p className="text-xs text-gray-400">
              There is nothing in your bag
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex items-center justify-between gap-4">
            <p className="font-bold text-sm">Subtotal</p>
            <p className="font-bold text-sm">$40.5</p>
          </div>
          <p className="text-gray-400 text-xs">
            Shipping and taxes calculated at checkout
          </p>
          <div className="flex items-center justify-between gap-4">
            <Button variant="outline" size="sm">
              View Cart
            </Button>
            <Button variant="default" size="sm">
              Check out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Item({ item }: { item: CartType }) {
  const { removeProduct } = useCart();
  return (
    <div>
      <div className="flex justify-between gap-4">
        <Image
          src={item.Main_Image}
          alt={item.slug}
          width={72}
          height={100}
          className="object-cover rounded-md"
        />

        <div className="flex flex-col gap-4">
          {/* TOP */}
          <div className="flex justify-between gap-4">
            <div className="w-4/5">
              <h4 className="font-semibold">{item.title}</h4>
              <p className="text-xs text-gray-400">available</p>
            </div>
            <p className="text-sm p-1">
              $<span className="font-semibold">{item.price}</span>
            </p>
          </div>
          {/* BOTTOM */}
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-xs">Qty. {item.quantity}</p>
            <Button
              variant="link"
              size="sm"
              className="text-blue-400 p-0 font-normal text-xs"
              onClick={() => removeProduct(item._id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
