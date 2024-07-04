"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const slides = [
  {
    id: 1,
    title: "Summer Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Winter Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Spring Sale Collections",
    description: "Sale! Up to 50% off!",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
    url: "/",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];
export default function Slider() {
  const [current, setCurrent] = useState(0);

  const handleClick = (index: number) => {
    setCurrent(index);
  };

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       setCurrent((prev) => {
  //         return prev === slides.length - 1 ? 0 : prev + 1;
  //       });
  //     }, 3000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <div className="overflow-hidden h-[calc(100vh-80px)] relative">
      <div
        className={`flex h-full transition-all ease-in-out duration-1000`}
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`flex flex-col w-full flex-shrink-0 lg:flex-row`}
          >
            {/* DESCRIPTION */}
            <div
              className={`${slide.bg} h-1/2 flex justify-center items-center text-center lg:h-full lg:w-1/2`}
            >
              <div className="flex flex-col items-center gap-4">
                <p className="text-base">{slide.description}</p>
                <h2 className="text-4xl font-semibold">{slide.title}</h2>
                <Button variant="default" size="sm" className="uppercase">
                  Shop Now
                </Button>
              </div>
            </div>
            {/* IMAGE */}
            <div className="relative h-1/2 lg:h-full lg:w-1/2">
              <Image src={slide.img} alt="" fill className="object-cover" />
            </div>
          </div>
        ))}
      </div>

      {/* SLIDER BUTTONS */}
      <div className="absolute flex items-center justify-center gap-2 bottom-3 left-1/2 -translate-x-1/2">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            onClick={() => handleClick(index)}
            className="w-3 h-3 ring-1 ring-gray-100 rounded-full flex items-center justify-center"
          >
            {current === index ? (
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            ) : (
              ""
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
