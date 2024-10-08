
"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { l1, l2, l3, l4, l5, l6, l7, l8 } from '@/assets';
import { positions } from './constants';

const images = [l1, l2, l3, l4, l5, l6, l7, l8];

const ScatteredCrypto = () => {
  return (
    <div className="relative w-[54vw] min-h-[80vh] ">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt={`Crypto ${index + 1}`}
          className="absolute"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            width: positions[index].width,
            transform: `rotate(${positions[index].rotation})`,
          }}
          initial={{ scale: 0, opacity: 0 }} 
          animate={{
            scale: 1,
            opacity: 1, 
          }}
          transition={{
            duration: 0.5, 
            delay: index * 0.1,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 10, 
            y: [0, -5, 0], 
          }} 
        />
      ))}
    </div>
  );
};

export default ScatteredCrypto;
