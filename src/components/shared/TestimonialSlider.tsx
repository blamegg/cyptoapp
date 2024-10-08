"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { profile1, profile2, profile3 } from '@/assets/sharedSection';
import Image from "next/image";

const testimonials = [
  {
    name: "Alice Brown",
    position: "Investor",
    quote: "Cryptapp has made tracking my cryptocurrency so simple and secure. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "John Smith",
    position: "Entrepreneur",
    quote: "A game-changer for my crypto investments! Cryptapp has an intuitive design and offers amazing insights.",
    image: profile2.src,
  },
  {
    name: "Emma Johnson",
    position: "Trader",
    quote: "With Cryptapp, I can track my portfolio easily and securely. It's a must-have tool for any crypto enthusiast.",
    image: profile3.src,
  },
  // Duplicate entries for demonstration
  {
    name: "Alice Brown",
    position: "Investor",
    quote: "Cryptapp has made tracking my cryptocurrency so simple and secure. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "John Smith",
    position: "Entrepreneur",
    quote: "A game-changer for my crypto investments! Cryptapp has an intuitive design and offers amazing insights.",
    image: profile2.src,
  },
  {
    name: "Emma Johnson",
    position: "Trader",
    quote: "With Cryptapp, I can track my portfolio easily and securely. It's a must-have tool for any crypto enthusiast.",
    image: profile3.src,
  },
];

const ITEMS_PER_PAGE = 3;

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(testimonials.length - ITEMS_PER_PAGE, 0) : prevIndex - ITEMS_PER_PAGE
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE >= testimonials.length ? 0 : prevIndex + ITEMS_PER_PAGE
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Automatically change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white lg:py-44 sm:py-28 md:py-32">
      <div className="flex flex-col justify-center items-center mb-10">
        <h2 className="text-40 font-semibold">
          <span className="text-crypOrange">Testimonials</span>
        </h2>
        <p className="text-13 font-semibold opacity-55">WHAT OUR USERS SAY</p>
      </div>

      <div className="mx-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {testimonials.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map((review, index) => (
            <div key={index} className="bg-white-100 p-6 md:p-14 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
              <div className="flex items-start mb-4">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 rounded-full mr-3"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-md md:text-lg font-semibold">{review.name}</h3>
                  <p className="text-gray-400 text-sm md:text-lg">{review.position}</p>
                </div>
              </div>
              <p className="text-black text-sm md:text-lg">{review.quote}</p>
            </div>
          ))}
        </div>

        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button
            className="p-3 sm:p-4 border-2 rounded-full bg-opacity-50 hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
          <button
            className="p-3 sm:p-4 border-2 rounded-full bg-opacity-50 hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
