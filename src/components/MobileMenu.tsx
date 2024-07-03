"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="cursor-pointer">
        <Menu onClick={() => setOpen((prev) => !prev)} />
      </button>

      {open && (
        <div className="absolute top-20 left-0 right-0 h-[calc(100vh-80px)] bg-black text-white flex flex-col gap-4 items-center justify-center py-4">
          <Link href="/">Home</Link>
          <Link href="/">Shop</Link>
          <Link href="/">Deals</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <Link href="/">Logout</Link>
          <Link href="/">Cart(1)</Link>
        </div>
      )}
    </>
  );
}
