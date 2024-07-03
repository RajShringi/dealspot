import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

export default function Navbar() {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* MOBILE NAVIGATION */}
      <nav className="p-4 flex items-center justify-between bg-white h-20 relative sm:hidden">
        <Link href="/" className="flex items-center gap-2 cursor-pointer">
          <ShoppingCart className="text-icon" />
          <span className="font-semibold uppercase tracking-wider text-lg">
            Dealspot
          </span>
        </Link>
        <MobileMenu />
      </nav>
      {/* DESKTOP NAVIGATION */}
      <nav className="hidden p-4 sm:flex items-center justify-between bg-white h-20 relative">
        {/* LEFT */}
        <div className="flex items-center gap-12 w-1/2">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <ShoppingCart className="text-icon" />
            <span className="font-semibold uppercase tracking-wider text-lg">
              Dealspot
            </span>
          </Link>

          {/* LINKS */}
          <div className="hidden xl:flex items-center gap-4">
            <Link className="text-sm 2xl:text-base" href="/">
              Home
            </Link>
            <Link className="text-sm 2xl:text-base" href="/">
              Shop
            </Link>
            <Link className="text-sm 2xl:text-base" href="/">
              Deals
            </Link>
            <Link className="text-sm 2xl:text-base" href="/">
              About
            </Link>
            <Link className="text-sm 2xl:text-base" href="/">
              Contact
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-between gap-4 w-1/2">
          <SearchBar />
          <NavIcons />
        </div>
      </nav>
    </div>
  );
}
