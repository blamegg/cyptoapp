"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import CarouselCompOne from "./CarouselCompOne";
import CarouselCompTwo from "./CarouselCompTwo";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
interface ArrowProps {
  onClick: () => void;
}
export const TopCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const settings = {
    dots: false, 
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    fade: true,
    nextArrow: <NextArrow onClick={() => {}} />,
    prevArrow: <PrevArrow onClick={() => {}} />, 
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentIndex(newIndex),
  };

  const components = [
    <CarouselCompOne key={`${currentIndex}-compOne`} />, 
    <CarouselCompTwo key={`${currentIndex}-compTwo`} />,
  ];

  return (
    <div className="relative">

      <div className="overlay" />
      <Slider {...settings}>
        {components.map((Component, index) => (
          <div key={index}>{Component}</div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="absolute right-2 z-50 text-white top-1/2 transform -translate-y-1/2 bg-black opacity-60 hover:opacity-100 text-2xl p-2"
      onClick={onClick}
    >
      <GoChevronRight />
    </button>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <button
      className="absolute left-2 z-50 text-white top-1/2 transform -translate-y-1/2 bg-black opacity-60 hover:opacity-100 text-2xl p-2"
      onClick={onClick}
    >
      <GoChevronLeft />
    </button>
  );
};
