"use client";
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { cryptoData } from "../constants";
import { ParallaxImg } from "@/assets";

const CryptoProgress = () => {
  return (
    <div
    className=""
    style={{
        backgroundImage: `url(${ParallaxImg.src})`,
       backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
    }}
     
    >
      <div className="flex justify-between md:flex-row md:gap-0 gap-20  flex-col items-center text-center !bg-gray-900 min-w-[100vw] md:px-32 p-20 min-h-[22rem] bg-transparent !bg-opacity-90">
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
    </div>
  );
};

export default CryptoProgress;
