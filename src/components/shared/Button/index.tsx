'use client';
import React, { useState} from 'react';
import { button1, button2 } from '@/assets/sharedSection'; 

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='rounded-full bg-transparent z-100 '> <button
    
    onClick={handleButtonClick}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="fixed bottom-5 right-5  p-6 rounded-full  transition duration-300 ease-in-out animate-bounce"
    aria-label="Scroll to top"
  >
    <img 
      src={isHovered ? button2.src : button1.src} 
      alt="Scroll to top" 
      className="w-12 h-12"
    />
  </button></div>
   
  );
};

export default Button;
