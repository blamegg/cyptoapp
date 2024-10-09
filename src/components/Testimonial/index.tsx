
import React from "react";
import { profile1, profile2, profile3 } from "@/assets/sharedSection";
import Image from "next/image";

const testimonials = [
  {
    name: "Stephanie Welch",
    position: "INVISION",
    quote: "Great to stay on top of the process. Especially liked to play with the financial section when viewing properties. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "Sylvester Knight",
    position: "AIRBNB",
    quote: "Just started flat hunting. Your affordability calculator saved me some serious time to focus on what I can actually buy. Thanks so much.",
    image: profile2.src,
  },
  {
    name: "Andrew Bradshaw",
    position: "EVERNOTE",
    quote: "Thanks Plentific for helping us stay on top of a very stressful process! Finally exchanged and looking forward to complete.",
    image: profile3.src,
  },
  {
    name: "Stephanie Welch",
    position: "INVISION",
    quote: "Great to stay on top of the process. Especially liked to play with the financial section when viewing properties. Highly recommended!",
    image: profile1.src,
  },
  {
    name: "Sylvester Knight",
    position: "AIRBNB",
    quote: "Just started flat hunting. Your affordability calculator saved me some serious time to focus on what I can actually buy. Thanks so much.",
    image: profile2.src,
  },
  {
    name: "Andrew Bradshaw",
    position: "EVERNOTE",
    quote: "Thanks Plentific for helping us stay on top of a very stressful process! Finally exchanged and looking forward to complete.",
    image: profile3.src,
  },
];

const TestimonialSection = () => {
  return (
    <section className="bg-white py-28 ">
      <div className=" mx-auto  overflow-hidden w-[80%]">
        <div className="carousel">
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
        </div>
      </div>

   
    </section>
  );
};

export default TestimonialSection;
