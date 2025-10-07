'use client'

import { useState } from 'react'
import Image from 'next/image'

interface CabinCarouselProps {
  images: string[]
  cabinName: string
}

export default function CabinCarousel({ images, cabinName }: CabinCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToPrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative group w-full h-full overflow-hidden">
      {/* Image Counter */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 bg-black/70 backdrop-blur-md text-white px-4 py-2 md:px-5 md:py-3 rounded-full text-sm md:text-base font-bold shadow-2xl">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Images - render all but only show current one */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              zIndex: index === currentIndex ? 10 : 0
            }}
          >
            <Image
              src={image}
              alt={`${cabinName} - תמונה ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Always visible on mobile, hover on desktop */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white transition-all flex items-center justify-center shadow-2xl md:opacity-0 md:group-hover:opacity-100 hover:scale-110 active:scale-95"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/95 backdrop-blur-sm hover:bg-white transition-all flex items-center justify-center shadow-2xl md:opacity-0 md:group-hover:opacity-100 hover:scale-110 active:scale-95"
            aria-label="Next image"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 md:gap-3 bg-black/60 backdrop-blur-md px-4 py-2.5 md:px-5 md:py-3 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 md:w-10 h-2.5 md:h-3 bg-white'
                    : 'w-2.5 md:w-3 h-2.5 md:h-3 bg-white/50 hover:bg-white/80 active:bg-white'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
