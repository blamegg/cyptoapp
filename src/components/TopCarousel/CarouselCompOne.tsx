"use client";
import React from "react";
import { motion } from "framer-motion";
import { verticalScreen, horizontalScreen } from "@/assets";
import { CarouselData } from "../constants";
import ScatteredCrypto from "./ScatteredCrypto";
import { EffectBlock } from "./EffectBlock";

export default function CarouselCompOne() {
  return (
    <div className="bg-customGray  md:min-h-[50rem] min-h-[30rem]    text-white md:p-8  flex justify-between items-center">
      <div className="flex md:w-[80%] md:gap-auto gap-5    md:mx-auto sm:mx-0   md:pt-0  pt-20">
        {/* Left section with text */}
        <div className="w-1/2 md:-mt-20 mt-0">
          <motion.h2
            className="text-yellow-500 w-fit text-2xl mb-2 font-opensans "
            initial={{ opacity: 1, x: 0, backgroundColor: "#ffffff" }}
            animate={{ opacity: 1, x: 0, backgroundColor: "#00000000" }}
            transition={{ duration: 1 }}
          >
          <EffectBlock bgColor="bg-white">

          <p className="whitespace-nowrap text-16 md:text-2xl"> App with Awesome Features</p> 
          </EffectBlock>
          </motion.h2>
          <motion.h1
            className="text-5xl font-bold mb-4 w-fit"
          >
          <EffectBlock bgColor="bg-customYellow" delay={.5}>

          <p className="whitespace-nowrap text-29 md:text-5xl">  CryptoCurrency App</p>
          </EffectBlock>
          </motion.h1>

          <div className="flex gap-2 md:gap-8 mb-6 mt-10  ">
            {CarouselData.map((crypto, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: index % 2 === 0 ? -40 : 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.4,stiffness:800 ,type:'spring',damping:20 }}
              >
                <img src={crypto.image.src} className=" md:h-auto md:w-auto h-10 w-8" alt="" />
              </motion.div>
            ))}
          </div>

          <motion.p
            className="mb-6 font-sans font-thin md:text-16 text-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Get to know the live rates of all the{" "}
            <strong className="font-bold">crypto currency</strong> without any{" "}
            <br />
            delay. Pay with crypto currency in more than{" "}
            <strong className="font-bold">20000 stores</strong>.
          </motion.p>

          <div className="space-x-4 whitespace-nowrap">
            <motion.button
              className="bg-customYellow text-white text-8 md:text-16 font-bold md:px-8 px-5 py-2 md:py-3 hover:bg-white hover:text-black"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              GET STARTED
            </motion.button>

            <motion.button
              className="border-2 border-white md:px-8 px-5 py-2 md:py-3 text-8 md:text-16  hover:bg-white hover:text-black font-bold"
              initial={{x: -100, opacity: 0 }}
              animate={{x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 2 }}
            >
              HOW IT WORKS
            </motion.button>
          </div>
        </div>
        {/* Right Section  */}
        <div className="relative w-1/2 md:mt-20 mt-28 md:translate-x-0 -translate-x-6 translate-y-10 ">
          <motion.div
            initial={{ x: -100, opacity: 1 }}
            animate={{ x: -100, y: -359, opacity: 1 }}
            className="z-40 min-h-[180vh] md:block hidden    absolute bg-transparent left-10 top-1/2 -translate-y-1/2 min-w-[50vw] "
          >
            <ScatteredCrypto />
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: -50, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            
       
          >
            <img
              src={horizontalScreen.src}
              alt="Horizontal Screen"
              className="md:min-w-[48vw]  min-w-[130%] md:pl-0 pl-20 -translate-x-10 md:translate-x-0 sm:-translate-x-10 sm:-translate-y-20 -translate-y-14 "
            />
          </motion.div>
          <motion.div
            initial={{ y: -700, opacity: 0 }}
            animate={{ y: -380, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="absolute top-52 sm:top-44 md:top-1/2 md:left-auto left-24 md:right-0 md:transform -translate-y-1/2  "
          >
            <img src={verticalScreen.src} className=" md:h-auto md:w-auto h-96 md:pt-0 pt-20 md:pb-0 sm:pb-0 pb-20 -translate-x-6 md:translate-x-0 -translate-y-5 sm:-translate-y-12 md:translate-y-0  " alt="Vertical Screen" />
          </motion.div>{" "}
        </div>
      </div>
    </div>
  );
}
