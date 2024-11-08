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
      <div className="flex justify-between ms:flex-row md:gap-5 gap-20  flex-col items-center text-center !bg-gray-900 min-w-[100vw] lg:px-32 sm:p-20 min-h-[22rem] md:py-0 py-14 bg-transparent !bg-opacity-90">
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
                  rotation: crypto.rotation,
                  strokeLinecap: "butt",
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
