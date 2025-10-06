'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

interface CabinCarouselProps {
  images: string[]
  cabinName: string
}

export default function CabinCarousel({ images, cabinName }: CabinCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  console.log(`${cabinName} has ${images.length} images:`, images)

  return (
    <div className="relative group">
      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-20 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl">
        {selectedIndex + 1} / {images.length}
      </div>

      {/* Carousel Container */}
      <div
        className="rounded-3xl"
        ref={emblaRef}
        style={{ overflow: 'hidden' }}
      >
        <div style={{ display: 'flex', touchAction: 'pan-y pinch-zoom' }}>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 100%',
                minWidth: 0,
                height: '500px',
                position: 'relative'
              }}
            >
              <Image
                src={image}
                alt={`${cabinName} - תמונה ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Show on hover */}
      {images.length > 1 && (
        <>
          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 hover:bg-white transition-all flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 hover:scale-110 transform"
            aria-label="Previous image"
          >
            <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 hover:bg-white transition-all flex items-center justify-center shadow-2xl opacity-0 group-hover:opacity-100 hover:scale-110 transform"
            aria-label="Next image"
          >
            <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === selectedIndex
                    ? 'w-8 h-3 bg-white'
                    : 'w-3 h-3 bg-white/50 hover:bg-white/80'
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
