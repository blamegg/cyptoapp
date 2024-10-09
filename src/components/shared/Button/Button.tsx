'use client';
import React, { useState} from 'react';
import { button1, button2 } from '@/assets/sharedSection'; // Adjust the import if needed

const Button = () => {
  const [isHovered, setIsHovered] = useState(false);
  
 

  return (
    <div className='rounded-full bg-transparent z-100 '> <button
    
   
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    className="fixed bottom-5 right-5  p-6 rounded-full  transition duration-300 ease-in-out animate-bounce"
    aria-label="Scroll to top"
  >
    <img 
      src={isHovered ? button2.src : button1.src} 
      alt="Scroll to top" 
      className="w-12 h-12" // Adjust size as needed
    />
  </button></div>
   
  );
};

export default Button;
