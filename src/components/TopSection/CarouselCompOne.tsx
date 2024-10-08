"use client";
import React from "react";
import { motion } from "framer-motion";
import { verticalScreen, horizontalScreen } from "@/assets";
import { CarouselData } from "./constants";
import ScatteredCrypto from "./ScatteredCrypto";

export default function CarouselCompOne() {
  return (
    <div className="bg-customGray min-h-[55rem] text-white p-8 flex justify-between items-center">
      <div className="w-1/2 -mt-20">
        <motion.h2
          className="text-yellow-500 w-fit text-2xl mb-2 "
          initial={{ opacity: 0, x: -40, backgroundColor: "#ffffff" }}
          animate={{ opacity: 1, x: 0, backgroundColor: "#00000000" }}
          transition={{ duration: 1 }}
        >
          App with Awesome Features
        </motion.h2>
        <motion.h1
          className="text-5xl font-bold mb-4 w-fit"
          initial={{ opacity: 0, y: 20, backgroundColor: "#fea301" }}
          animate={{ opacity: 1, y: 0, backgroundColor: "#00000000" }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          CryptoCurrency App
        </motion.h1>

        <div className="flex gap-8 mb-6 mt-10">
          {CarouselData.map((crypto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={crypto.image.src} alt="" />
            </motion.div>
          ))}
        </div>

        <motion.p
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get to know the live rates of all the <strong>crypto currency</strong>{" "}
          without any delay. Pay with crypto currency in more than{" "}
          <strong>20000 stores</strong>.
        </motion.p>

        <div className="space-x-4">
          <motion.button
            className="bg-customYellow text-white font-bold px-8 py-3 hover:bg-white hover:text-black"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            GET STARTED
          </motion.button>

          <motion.button
            className="border-2 border-white py-3 px-8 hover:bg-white hover:text-black font-bold"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            HOW IT WORKS
          </motion.button>
        </div>
      </div>

      <div className="relative w-1/2 mt-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: -100, y: -359, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="z-40 min-h-[180vh] absolute bg-transparent left-10 top-1/2 -translate-y-1/2 min-w-[50vw]"
        >
          <ScatteredCrypto />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <img
            src={horizontalScreen.src}
            alt="Horizontal Screen"
            className="min-w-[52vw]"
          />
        </motion.div>
        <motion.div
          initial={{ y: -700, opacity: 0 }}
          animate={{ y: -380, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="absolute top-1/2 right-0 transform -translate-y-1/2"
        >
          <img src={verticalScreen.src} alt="Vertical Screen" />
        </motion.div>{" "}
      </div>
    </div>
  );
}
