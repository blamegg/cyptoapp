"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import {
  img01,
  img02,
  img03,
  img04,
  img05,
  img06,
  img07,
  img08,
  // img09,
  // img10,
  // img11,
  // img12,
  ss1,
  ss2,
  ss3,
  ss4
} from "@/assets/Middle-assests";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SsCarousel = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  const screenshot = [
   
    img01.src,
    img02.src,
    img03.src,
    img04.src,
    ss1.src,
    ss2.src,
    ss3.src,
    ss4.src,
    img05.src,
    img06.src,
    img07.src,
    img08.src,
    
    
  ];

  const slides = [];
  for (let i = 0; i < screenshot.length; i += 4) {
    if (isMobile) {
      slides.push(screenshot.slice(i, i + 1));
    } else {
      slides.push(screenshot.slice(i, i + 4));
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isAutoPlaying,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
      setIsAutoPlaying(false);
    },
  };

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="my-20">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center">
          <span>Saraa</span>{" "}
          <span className="text-crypOrange font-semibold">
            Live Screenshots
          </span>
        </h2>
        <p className="text-sm font-semibold opacity-55 mt-2">
        Saraa WORKS FOR YOUR SUCCESS
        </p>
      </div>

      <div className="w-full max-w-6xl h-auto mx-auto overflow-hidden mt-20 relative">
        <Slider ref={sliderRef} {...settings}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex}>
              <div className="md:grid sm:grid-cols-4 flex gap-4 p-6">
                {slide.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="aspect-square md:min-w-auto min-w-[20rem] relative cursor-pointer"
                    onClick={() => setIsAutoPlaying(false)}
                  >
                    <img
                      src={image}
                      alt={`Screenshot ${slideIndex * 4 + imageIndex + 1}`}
                      className="rounded-lg object-cover h-[550px] w-[250px] sm:ml-[30vw] lg:ml-0  cxs:ml-[10vw] csm:ml-[15vw] cxxs:ml-[5vw] border-red-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-20 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
                currentSlide === index ? "bg-crypOrange" : "bg-gray-300"
              } hover:bg-crypOrange`}
              style={{
                transform:
                  hoveredIndex === index ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
