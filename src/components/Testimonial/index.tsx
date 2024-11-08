'use client'
import React from "react";
import Slider from "react-slick"; 
import Image from "next/image";
import testimonials from "../constants"; 


const TestimonialSection = () => {
  
  const settings = {
    dots: false, 
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,  
    autoplaySpeed: 3000,  
    pauseOnHover: true,  
    arrows: false,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-32 mx-10 clg:mx-0">
      <div className="mx-auto clg:w-[80%] w-full">
        <Slider {...settings}>
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="testimonial-card flex flex-col justify-between items-center bg-white px-14 border-0 lg:border-r border-gray-200   h-auto   " 
            >
              <div className="flex flex-col justify-center items-center text-center gap-5 font-Segoe">
              <div className="text-4xl text-crypOrange font-serif font-extrabold">
    &ldquo;
</div>
                {/* <div className=" text-crypOrange"><img src={quote.src} alt="quote" height={24} width={24} /></div> */}
                <div className="text-16 font-light mb-7 text-textG overflow-hidden  leading-7">
                  {review.quote}
                </div>
              </div>
              <div className="flex flex-col justify-center items-center ">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="rounded-full my-5"
                  width={88}
                  height={88}
                />
                <h3 className="text-black font-bold font-ubuntu pb-2">{review.name}</h3>
                <p className="text-gray-400 text-12 font-bold font-ubuntu tracking-widest">{review.position}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
