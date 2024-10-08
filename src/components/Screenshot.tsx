"use client"

import React, { useState, useEffect } from 'react'

import { img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12 } from '@/assets/Middle-assests';


const Screenshot = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

 

    const screenshot = [img01.src,img02.src,img03.src,img04.src,img05.src,img06.src,img07.src,img08.src,img09.src,img10.src,img11.src,img12.src,];

    const slides = []
  for (let i = 0; i < screenshot.length; i += 4) {
    slides.push(screenshot.slice(i, i + 4))
  }


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide()
    }

    if (touchStart - touchEnd < -75) {
      prevSlide()
    }
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  return (
    <>
    <div className='mt-20'>
        <div className='flex flex-col justify-center items-center'>
            <div>
                <span className='whitespace-break-spaces'><span className='text-40'>Cryptap</span> <span className='text-crypOrange text-40 font-semibold'>Live Screenshots</span></span>
            </div>
            <div>
                <span className='text-13 font-semibold opacity-55'>CRYPTAP WORKS FOR YOUR SUCCESS</span>
            </div>
        </div>

        <div className=" w-full max-w-7xl h-auto  mx-auto overflow-hidden mt-20 ">
      <div 
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="w-full flex-shrink-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6">
              {slide.map((image, imageIndex) => (
                <div key={imageIndex} className="aspect-square relative">
                  <img
                    src={image}
                    alt={`Image ${slideIndex * 4 + imageIndex + 1}`}
                    className="rounded-lg object-cover h-550 w-250 "
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className=" bottom-4 left-1/2 translate-x-47 mt-20  transform  flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ease-in-out ${
              currentSlide === index ? 'bg-crypOrange' : 'bg-gray-300'
            } hover:bg-crypOrange `}
            style={{
                transform: hoveredIndex === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
              }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Screenshot;
