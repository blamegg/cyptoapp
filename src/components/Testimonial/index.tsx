import React from "react";
import Slider from "react-slick"; 
import Image from "next/image";
import testimonials from "../constants"; 

const TestimonialSection = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-white py-28">
      <div className="mx-auto overflow-hidden w-[80%]">
        <Slider {...settings}>
          {testimonials.map((review, index) => (
            <div
              key={index}
              className="testimonial-card bg-white-100 p-6 md:p-14 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="flex flex-col justify-center items-center gap-4 text-center font-sans">
                <div className="text-[#FEA301] text-[34px]">″</div>
                <div className="text-gray-400 text-sm flex gap-3">
                  {review.quote}
                </div>
                <Image
                  src={review.image}
                  alt={review.name}
                  className="rounded-full mb-2"
                  width={88}
                  height={88}
                />
                <div>
                  <h3 className="text-black font-bold pb-2">{review.name}</h3>
                  <p className="text-gray-400 text-[10px] font-bold font-serif">{review.position}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
