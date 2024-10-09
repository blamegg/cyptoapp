"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Parallax } from "react-parallax"; 
import { cryptoData } from "../constants";
import { ParallaxImg } from "@/assets";

const CryptoProgress = () => {
  return (
    <Parallax
      bgImage={ParallaxImg.src}
      strength={300}
      className="flex items-center min-w[100vh] h-[22rem] justify-center"
    >
      <div className="flex justify-between items-center text-center !bg-gray-900 min-w-[100vw] px-32 min-h-[22rem] bg-transparent !bg-opacity-90">
        {cryptoData.map((crypto, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-36 h-36 mb-2">
              <CircularProgressbar
                value={crypto.percentage}
                text={`${crypto.percentage}%`}
                styles={buildStyles({
                  pathColor: crypto.color,
                  textColor: "#ffffff",
                  trailColor: "#2B2B2B",
                  pathTransitionDuration: 0.5,
                  rotation: 0.3,
                })}
              />
            </div>
            <p className="text-white font-bold">{crypto.name}</p>
          </div>
        ))}
      </div>
    </Parallax>
  );
};

export default CryptoProgress;
