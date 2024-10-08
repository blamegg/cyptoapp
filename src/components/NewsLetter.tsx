import React from 'react';
import { FaPaperPlane } from "react-icons/fa";

const NewsLetter = () => {
  return (
   <>
   <div className='h-96 mt-20 w-full bg-nLetterbg'>
   <div className='flex justify-center items-center flex-col '>
        <div className='whitespace-break-spaces mt-20' >
           <span className='text-white text-40 '>Sign Into Our <span className='text-crypOrange text-40 font-semibold'>NewsLetter</span></span>
        </div>
        <div>
           <p className='text-13 font-bold mt-3 text-white'>WHAT DO YOU GET</p>
        </div>
    </div>

    <div className='flex justify-center gap-5 mt-20'>
        <input placeholder='Name' className='h-16 w-96 p-5'/>
        <input placeholder='Email' className='h-16 w-96 p-5'/>
        <button className=' bg-crypOrange w-44 p-5 flex items-center gap-5 text-white font-semibold'>SUBSCRIBE <span className='text-white'><FaPaperPlane /></span></button>
    </div>
   </div>
   </>
  );
}

export default NewsLetter;
