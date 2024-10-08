"use client";
import React, { useState } from "react";
import CarouselCompOne from "./CarouselCompOne";
import CarouselCompTwo from "./CarouselCompTwo";

const TopCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const components = [
    <CarouselCompOne key="compOne" />, 
    <CarouselCompTwo key="compTwo" />
  ];

  const nextCarousel = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % components.length);
  };

  const prevCarousel = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + components.length) % components.length);
  };

  return (
    <div className="relative">
      <div className="carousel-container">{components[currentIndex]}</div>
      
      <button 
        onClick={prevCarousel} 
        className="absolute text-white z-50 left-2 top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-700 text-2xl p-2"
      >
        &#10094;
      </button>
      
      <button 
        onClick={nextCarousel} 
        className="absolute right-2 z-50 text-white top-1/2 transform -translate-y-1/2 bg-black hover:bg-gray-700 text-2xl p-2"
      >
        &#10095;
      </button>
    </div>
  );
};

export default TopCarousel;
