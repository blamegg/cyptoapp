'use client';
import React, { useState } from 'react';
import {  FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import img from '../../assets/testimonial2.jpg'; 

const testimonials = [
  {
    name: "Anna Deynah",
    role: "UX Designer",
    quote: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    avatar: img.src,
  },
  {
    name: "John Doe",
    role: "Web Developer",
    quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis.",
    avatar: img.src,
  },
  {
    name: "Maria Kate",
    role: "Photographer",
    quote: "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    avatar: img.src,
  },
  {
    name: "Alex Smith",
    role: "Marketing Specialist",
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    avatar: img.src,
  },
  {
    name: "Emma Brown",
    role: "Content Writer",
    quote: "But I must explain to you how all this mistaken idea of denouncing pleasure.",
    avatar: img.src,
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 3; // Number of testimonials to show at once

  const showSlide = (index:number) => {
    const totalSlides = Math.ceil(testimonials.length / itemsToShow);
    if (index >= totalSlides) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(totalSlides - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="carousel relative max-w-6xl mx-auto">
      {/* Controls */}
      <button
        className="carousel-control carousel-control-prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        onClick={() => showSlide(currentIndex - 1)}
      >
        <FaChevronLeft />
      </button>
      <button
        className="carousel-control carousel-control-next absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        onClick={() => showSlide(currentIndex + 1)}
      >
        <FaChevronRight />
      </button>

      {/* Inner */}
      <div className='bg-gray-100 py-12'>
        <div
          className="carousel-inner flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }} 
        >
          {testimonials.map((testimonial, index) => (
            <div className="carousel-item min-w-[33.33%] p-4" key={index}>
              <div className="text-center">
                <img
                  className="rounded-full shadow-lg mb-4"
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  style={{ width: '150px' }}
                />
                <p className="text-lg italic text-gray-600 mb-2">“{testimonial.quote}”</p>
                <h5 className="mb-1 font-bold">{testimonial.name}</h5>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
