"use client"
import React, { useState, useEffect } from 'react';
import {  img5, img6 ,mobile} from '@/assets/Middle-assests';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const Downloads = () => {
  const [isVisible, setIsVisible] = useState(true);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    handleResize(); 
    window.addEventListener("resize", handleResize); 
    return () => window.removeEventListener("resize", handleResize); 
  }, []);
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); 
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        ref={ref}
        className="flex clg:flex-row flex-col justify-center items-center mb-20"
      >
        <div className="w-1/2 justify-center ml-32 items-center h-auto relative">
           <div
            className={`mt-20  md:h-550 md:w-550 rounded-full border-50 border-white md:border-black hidden clg:flex items-center justify-center transition-opacity duration-500 ${
              isVisible ? "opacity-5" : "opacity-0"
            } transition-all ease-in-out`}
          >
            <div className="md:h-350 md:w-350 rounded-full border-50 border-white md:border-black flex items-center justify-center"></div>
          </div> 
 
           <motion.img
            className='absolute clg:block hidden md:h-650  -translate-y-92 translate-x-24'
            src={mobile.src}
            initial={{ x: -500, y: -600, opacity: 0 }}
            animate={isInView ? { x:isMobile?-100: 95, y: isMobile?-250:-600, opacity: 1 } : {}} 
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
          <motion.img
            className="clg:hidden  block md:h-[750px]"
             initial={{ x: -500, y: -600, opacity: 0 }}
            animate={isInView ? { x: -50, y: 40, opacity: 1 } : {}} 
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            src={mobile.src}
          />
        </div>

        <div className="clg:w-1/2 min-h-full md:mr-32 clg:mt-0 mt-20 mx-10 ">
          <div className="mb-16 text-40 ">
            <p className="text-bitBlack">
              The Superior
              <span className="text-crypOrange font-bold  "> Alternative</span>
            </p>
          </div>

          <div>
            <p className="text-text leading-7 text-base opacity-70 ">
              Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus
              elit. Fusce <br /> cursus lacus vel orci malesuada pharetra. Duis
              vel imperdiet enim. Vestibulum dolor metus. Condimentum vitae
              vehicula et, facilisis a nunc. Suspendisse potenti. Fusce
              ullamcorper ullamcorper convallis.
            </p>
          </div>

          <div className="flex md:flex-row flex-col mt-12 gap-7 ">
            <img
              className="hover:opacity-80 md:w-auto w-[60%] transition-all duration-500"
              src={img5.src}
            />
            <img
              className="hover:opacity-80 transition-all md:w-auto w-[60%] duration-500"
              src={img6.src}
            />
          </div>
        </div>
      </div>
    </>
  );
};
