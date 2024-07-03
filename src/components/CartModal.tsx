import Image from "next/image";
import { Button } from "./ui/button";

export default function CartModal() {
  return (
    <div className=" absolute right-0 top-10 shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] z-20 bg-white p-4 w-max rounded-md flex flex-col gap-6">
      <h2 className="font-medium text-xl">Shopping Cart</h2>
      <Item />
      <Item />
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
    </div>
  );
}

function Item() {
  return (
    <div>
      <div className="flex justify-between gap-4">
        <Image
          src="https://images.pexels.com/photos/209695/pexels-photo-209695.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          width={72}
          height={100}
          className="object-cover rounded-md"
        />

        <div className="flex flex-col gap-4">
          {/* TOP */}
          <div className="flex justify-between gap-4">
            <div>
              <h4 className="font-semibold">Product Name</h4>
              <p className="text-xs text-gray-400">available</p>
            </div>
            <p className="text-sm p-1">$40.5</p>
          </div>
          {/* BOTTOM */}
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-xs">Qty. 1</p>
            <Button
              variant="link"
              size="sm"
              className="text-blue-400 p-0 font-normal text-xs"
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
