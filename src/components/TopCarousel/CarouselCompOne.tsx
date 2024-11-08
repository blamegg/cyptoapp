"use client";
import React from "react";
import { motion } from "framer-motion";
import { vertcal,horizontal1,pichart } from "@/assets";
import { CarouselData } from "../constants";
import ScatteredCrypto from "./ScatteredCrypto";
import { EffectBlock } from "./EffectBlock";

export default function CarouselCompOne() {
  return (
    <div className="bg-customGray xl:min-h-[50rem]  md:min-h-[50rem] min-h-[30rem]    text-white md:p-8 lg:p-0 xl:p-8  flex justify-between items-center">
      <div className="flex md:w-[80%] xl:w-[80%] md:gap-auto xl:gap-auto gap-5 lg:mx-0    md:mx-0 xl:mx-auto sm:mx-0   md:pt-0 xl:pt-0  pt-20">
        {/* Left section with text */}
        <div className="w-1/2 md:-mt-20 xl:-mt-20 mt-0 sm:p-10 md:p-10 lg:p-10 xl:p-0 p-5">
          <motion.h2
            className="text-customYellow w-fit text-2xl mb-2 font-opensans "
            initial={{ opacity: 1, x: 0, backgroundColor: "#ffffff" }}
            animate={{ opacity: 1, x: 0, backgroundColor: "#00000000" }}
            transition={{ duration: 1 }}
          >
            <EffectBlock bgColor="bg-white">
              <p className="whitespace-nowrap text-16 md:text-2xl font-opensans">
                {" "}
                App with Awesome Features
              </p>
            </EffectBlock>
          </motion.h2>
          <motion.h1 className="text-5xl font-bold mb-4 w-fit">
            <EffectBlock bgColor="bg-customYellow" delay={0.5}>
              <p className="whitespace-nowrap sm:text-29 xl:text-5xl lg:text-5xl md:text-4xl text-20">
                {" "}
                Saraa Investment App
              </p>
            </EffectBlock>
          </motion.h1>

          <div className="flex gap-2 md:gap-8 xl:gap-8 mb-6 mt-10  ">
            {CarouselData.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.4,
                  stiffness: 800,
                  type: "spring",
                  damping: 20,
                }}
              >
                <img
                  src={crypto.image.src}
                  className=" md:h-auto md:w-auto xl:h-auto xl:w-auto h-10 w-8"
                  alt=""
                />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mb-6 font-Segoe font-thin md:text-16 text-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Grow your wealth with Saraa! Invest in gold and stocks effortlessly,
            track performance, and secure your future with ease.
          </motion.p>

          <div className="space-x-4 whitespace-nowrap">
            <motion.button
              className="bg-buttonColor text-white text-8 md:text-16 xl:text-16 font-bold md:px-8 xl:px-8 px-5 py-2 md:py-3 xl:py-3 hover:bg-white hover:text-black"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              GET STARTED
            </motion.button>

            <motion.button
              className="border-2 border-white md:px-8 xl:px-8 px-5 py-2 md:py-3 xl:py-3 text-8 md:text-16 xl:text-16  hover:bg-white hover:text-black font-bold"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
            >
              HOW IT WORKS
            </motion.button>
          </div>
        </div>
        {/* Right Section  */}
        <div className="relative w-1/2 md:mt-20 xl:mt-20 mt-28 md:translate-x-0 xl:translate-x-0 -translate-x-6 translate-y-10 ">
           <motion.div
            initial={{ x: -100, opacity: 1 }}
            animate={{ x: -100, y: -359, opacity: 1 }}
            className="z-40 min-h-[180vh] md:block hidden    absolute bg-transparent left-10 top-1/2 -translate-y-1/2 min-w-[50vw] "
          >
            <ScatteredCrypto />
          </motion.div>

          <motion.div
             initial={{ y: -700, opacity: 0 }}
             animate={{ y: -380, opacity: 1 }}
             transition={{ duration: 0.6, delay: 1.3 }}
             className="absolute top-64 ms:top-2/3 left-16 sm:left-10  md:transform xl:transform -translate-y-1/2  "
     
          >
            <img
              src={horizontal1.src}
              alt="Horizontal Screen"
              className="h-250 sm:h-300  ms:h-450  -translate-x-6 md:translate-x-36 lg:translate-x-28 xl:translate-x-0 -translate-y-5 sm:-translate-y-12 md:translate-y-0 xl:translate-y-0 "
              />
          </motion.div>
          <motion.div
            initial={{ y: -700, opacity: 0 }}
            animate={{ y: -380, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="z-20 absolute top-56 sm:top-2/3 ms:top-1/3  left-20 lg:left-24 xl:left-40  md:right-12 lg:right-8  xl:right-auto md:transform xl:transform -translate-y-1/2  "
            >
            <img
              src={vertcal.src}
              className="h-300 sm:h-[400px] ms:h-550   -translate-x-6 md:translate-x-36 lg:translate-x-28 xl:translate-x-0 -translate-y-5 sm:-translate-y-12 md:translate-y-0 xl:translate-y-0 "
              alt="Vertical Screen"
            />
          </motion.div>
          <motion.div
            initial={{ y: -700, opacity: 0 }}
            animate={{ y: -380, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute top-64  ms:top-2/3  -right-5 sm:right-0  md:transform xl:transform -translate-y-1/2  "
          >
            <img
              src={pichart.src}
              className="h-250 sm:h-300 ms:h-450  -translate-x-6 md:translate-x-36 lg:translate-x-28 xl:translate-x-0 -translate-y-5 sm:-translate-y-12 md:translate-y-0 xl:translate-y-0 "
              alt="Vertical Screen"
            />
          </motion.div>{" "}
        </div>
      </div>
    </div>
  );
}
