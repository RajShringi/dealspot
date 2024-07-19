"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  slug: string;
  images: { id: string; url: string }[];
};

export default function ProductImage({ slug, images }: Props) {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="flex flex-col gap-6 w-full lg:w-[45%]">
      {/* MAIN IMAGE */}
      <div className="relative h-[500px] overflow-hidden rounded-lg">
        <Image
          src={images[activeImage].url}
          alt={images[activeImage].url}
          sizes="50vw"
          fill
          className="object-cover"
        />
      </div>
      {/* OTHER IMAGES */}
      <div className="flex items-center gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative w-[25%] h-20 overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setActiveImage(index)}
          >
            <Image
              src={image.url}
              alt={image.url}
              fill
              sizes="10vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
