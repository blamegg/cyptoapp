"use client"
import React, { useState, useEffect } from 'react';
import { img4, img5, img6 } from '@/assests';

const Download = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className='flex justify-center items-center'>
        <div className='w-1/2 justify-center ml-32 items-center h-auto relative'>
          <div
            className={`mt-20 h-550 w-550 rounded-full border-40 border-black flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-' : 'opacity-0'} transition-all ease-in-out`}
          >
            <div className='h-350 w-350 rounded-full border-40 border-black flex items-center justify-center'>
              
            </div>
          </div>
          <img className='absolute h-650 -translate-y-92 translate-x-24' src={img4.src} />
        </div>

        <div className='w-1/2 mr-32'>
          <div className='mb-20 text-40'>
            <p className='text-bitBlack'>The Superior<span className='text-crypOrange font-bold'> Alternative</span></p>
          </div>

          <div>
            <p className='text-text leading-8 text-base opacity-70'>
              Maecenas posuere ac ex vitae fringilla. Fusce pulvinar luctus elit. Fusce <br />cursus lacus vel orci malesuada pharetra. Duis vel imperdiet enim. Vestibulum dolor metus. Condimentum vitae vehicula et, facilisis a nunc. Suspendisse potenti. Fusce ullamcorper ullamcorper convallis.
            </p>
          </div>

          <div className='flex mt-14 gap-7'>
            <img src={img5.src} />
            <img src={img6.src} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;












