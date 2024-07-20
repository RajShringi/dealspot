"use client";

import { Bell, Divide, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";
import CartModal from "./CartModal";
import { useCart } from "@/context/CartContext";

export default function NavIcons() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  const { cart } = useCart();
  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center gap-4 relative">
      <User className="text-icon cursor-pointer" onClick={handleProfile} />
      {isProfileOpen && (
        <div className=" absolute bg-white text-sm flex flex-col top-10 rounded-md p-2 shadow-[0px_3px_3px_0px_rgba(0,0,0,0.15)] z-20">
          <Button variant="ghost" size="sm">
            <Link href="/profile">Profile</Link>
          </Button>
          <Button variant="ghost" size="sm">
            <div>Logout</div>
          </Button>
        </div>
      )}
      <Bell className="text-icon cursor-pointer" />
      <div
        className="cursor-pointer relative"
        onClick={() => setIsCartOpen((prev) => !prev)}
      >
        <div className="absolute w-5 h-5 text-sm text-white flex items-center justify-center rounded-full bg-pink-400 z-30 left-[50%] -top-3">
          {cart.length}
        </div>
        <ShoppingBag className="text-icon" />
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
}
