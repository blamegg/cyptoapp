"use client";
import React, { useState } from "react";
import CarouselCompOne from "./CarouselCompOne";
import CarouselCompTwo from "./CarouselCompTwo";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

export const TopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <CarouselCompOne key="compOne" />,
    <CarouselCompTwo key="compTwo" />,
  ];

  const nextCarousel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevCarousel = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + components.length) % components.length
    );
  };

  return (
    <div className="relative">
      <div className="carousel-container">{components[currentIndex]}</div>

      <button
        onClick={prevCarousel}
        className="absolute text-white font-thin z-50 left-2 top-1/2 transform -translate-y-1/2 bg-black opacity-60 hover:opacity-100 text-2xl p-2"
      >
<GoChevronLeft />
      </button>

      <button
        onClick={nextCarousel}
        className="absolute right-2 z-50 text-white top-1/2 transform -translate-y-1/2 bg-black opacity-60 hover:opacity-100 text-2xl p-2"
      >
<GoChevronRight/>
      </button>
    </div>
  );
};
