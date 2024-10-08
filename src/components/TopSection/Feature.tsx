"use client";

import React, { useState } from "react";
import { features } from "./constants";
import { motion } from "framer-motion";
import { pattern } from "@/assets";

const Feature = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [delayedHover, setDelayedHover] = useState<boolean>(false);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
    setTimeout(() => {
      setDelayedHover(true);
    }, 400);
  };

  const handleMouseLeave = () => {
    setHovered(null);
    setDelayedHover(false);
  };

  return (
    <div className="mt-10 bg-[#fafafa] pt-20 pb-20">
      <div className="text-center mb-20">
        <h2 className="font-normal text-4xl mb-4">
          A Feature Rich{" "}
          <span className="font-bold text-customYellow"> Bitcoin Wallet</span>
        </h2>
        <p className="text-xs font-sans font-bold text-gray-500">
          WHAT DO YOU GET
        </p>
      </div>
      <div className="flex justify-between space-x-6 mx-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 pt-10 py-28 shadow-lg min-h-96 rounded-md text-center overflow-hidden"
            whileHover="hover"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Background Gradient Image */}
            <motion.div
              className="absolute inset-0 z-0 bg-no-repeat bg-cover"
              initial={{ y: "100%" }}
              animate={
                hovered === index
                  ? { y: 0 }
                  : {
                      y: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }
              }
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{
                backgroundImage: `url('https://xmple.com/wallpaper/linear-blue-black-gradient-1080x1920-c2-010204-080b2b-a-225-f-14.svg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Pattern Image */}
            <img
              src={pattern.src}
              alt=""
              className="absolute inset-0 z-10 w-full h-full object-cover"
            />
            {/* Foreground content */}
            <div className="relative z-20">
              <motion.img
                src={feature.icon.src}
                alt={feature.title}
                className={`mx-auto mb-4 ${
                  delayedHover && hovered === index ? "invert" : ""
                }`}
                whileHover={{ scale: 1.1 }}
                animate={hovered === index ? { y: [0, -10, 0] } : { y: 0 }}
                transition={{
                  duration: 1.5,
                  repeat: hovered === index ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />
              <motion.h3
                className={`text-lg font-normal mb-20 transition-colors duration-300 ${
                  delayedHover && hovered === index
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className={`text-gray-600 text-lg font-light px-4 mb-20 font-sans transition-colors duration-300 ${
                  delayedHover && hovered === index
                    ? "text-white"
                    : "text-black"
                }`}
              >
                {feature.description}
              </motion.p>
              <motion.a
                href="#"
                className={`text-gray-800 text-sm hover:underline font-sans font-base font-medium transition-colors duration-300 ${
                  delayedHover && hovered === index
                    ? "text-yellow-500"
                    : "text-black"
                }`}
              >
                Learn More <span className="text-customYellow">&#62;</span>
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
