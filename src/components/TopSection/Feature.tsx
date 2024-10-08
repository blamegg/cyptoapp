
'use client';

import React, { useState } from 'react';
import { features } from './constants';
import { motion } from 'framer-motion';
import { backgroundimg1 } from '@/assets';

const Feature = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  return (
    <div className='mt-10'>
      <div className='text-center mb-20 '>
        <h2 className='font-normal text-4xl mb-4'>
          A Feature Rich <span className='font-bold text-customYellow'> Bitcoin Wallet</span>
        </h2>
        <p className='text-xs font-sans font-bold text-gray-500'>WHAT DO YOU GET</p>
      </div>
      <div className="flex justify-between space-x-6 mx-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="relative bg-white p-6 pt-10 py-28 shadow-lg min-h-96 rounded-md text-center overflow-hidden"
            whileHover="hover"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <motion.div
              className="absolute inset-0 z-0 bg-no-repeat bg-cover "
              initial={{ y: "100%" }}
              variants={{
                hover: { y: 0, transition: { duration: 0.3, ease: "easeOut" } },
              }}
              style={{
                backgroundImage: `url('https://w0.peakpx.com/wallpaper/328/227/HD-wallpaper-blue-dots-blue-dot-galaxy-samsung.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "white",
              }}
            />

            {/* Foreground content */}
            <div className="relative z-10">
              <motion.img
                src={feature.icon.src}
                alt={feature.title}
                className={`mx-auto mb-4  ${hovered === index ? "invert" : ''}`}
                whileHover={{ scale: 1.1 }}
                animate={hovered === index ? { y: [0, -10, 0] } : { y: 0 }} // Up and down movement
                transition={{ duration: 1.5, repeat: hovered === index ? Infinity : 0, ease: "easeInOut" }}
              />
              <motion.h3
                className={`text-sm font-normal mb-20 transition-colors duration-300 ${hovered === index ? "text-white" : 'text-black'}`}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className={`text-gray-600 text-lg font-light px-4 mb-20  font-sans transition-colors duration-300 ${hovered === index ? "text-white" : 'text-black'}`}
              >
                {feature.description}
              </motion.p>
              <motion.a
                href="#"
                className={`text-gray-800 text-sm hover:underline font-sans font-base font-medium transition-colors duration-300 ${hovered === index ? "text-yellow-500" : 'text-black'}`}
              >
                Learn More &#62;
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
