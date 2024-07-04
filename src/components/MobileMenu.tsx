"use client";

import { Menu, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed  top-0 left-0 right-0 bg-white z-20">
      <div className="p-4 flex items-center justify-between bg-white h-20">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <ShoppingCart className="text-icon" />
          <span className="font-semibold uppercase tracking-wider text-lg">
            Dealspot
          </span>
        </Link>

        <button className="cursor-pointer">
          <Menu onClick={() => setOpen((prev) => !prev)} />
        </button>
      </div>

      {open && (
        <div className="absolute top-20 left-0 right-0 bottom-0 h-[calc(100vh-80px)] bg-black text-white flex flex-col gap-4 items-center justify-center py-4">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </div>
  );
}
