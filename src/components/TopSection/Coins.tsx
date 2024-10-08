
"use client";
import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Parallax } from 'react-parallax'; // Parallax library
import { cryptoData } from './constants';



const CryptoProgress = () => {
  return (
    <Parallax
      bgImage="https://r4.wallpaperflare.com/wallpaper/285/256/939/bitcoin-money-wallpaper-f74f82a40f75df0acf22e441218157c5.jpg"
      strength={300}
      className=" flex items-center h-[20rem] justify-center ml-10 "
    >
      <div className="flex justify-between items-center text-center  bg-gray-900 min-w-[95vw] px-20 min-h-[20rem]  bg-transparent bg-opacity-80">
        {cryptoData.map((crypto, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-40 h-40 mb-2">
              <CircularProgressbar
                value={crypto.percentage}
                text={`${crypto.percentage}%`}
                styles={buildStyles({
                  pathColor: crypto.color,
                  textColor: "#ffffff",
                  trailColor: "#2B2B2B",
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
