import { Github, Instagram, X } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-36 py-4">
          {/* LEFT */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg">Resources</h4>
            <Link className="text-sm" href="/">
              Find A Store
            </Link>
            <Link className="text-sm" href="/">
              Become A Member
            </Link>
            <Link className="text-sm" href="/">
              Send Us Feedback
            </Link>
          </div>
          {/* CENTER */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg">Help</h4>
            <Link className="text-sm" href="/">
              Order Status
            </Link>
            <Link className="text-sm" href="/">
              Delivery
            </Link>
            <Link className="text-sm" href="/">
              Returns
            </Link>
            <Link className="text-sm" href="/">
              Payment Options
            </Link>
          </div>
          {/* RIGHT */}
          <div className="flex flex-col gap-3">
            <h4 className="font-bold text-lg">Company</h4>
            <Link className="text-sm" href="/">
              About dealspot
            </Link>
            <Link className="text-sm" href="/">
              News
            </Link>
            <Link className="text-sm" href="/">
              Careers
            </Link>
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-300" />
        <div className="flex items-center justify-center gap-12 py-4">
          <Link href="/">
            <Instagram className="text-icon" />
          </Link>
          <Link href="/">
            <X className="text-icon" />
          </Link>
          <Link href="/">
            <Github className="text-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}
