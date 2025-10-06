'use client'

import { useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

const heroSlides = [
  {
    image: 'https://www.rinabarama.co.il/wp-content/uploads/2018/01/110-Big2-1.jpg',
    title: 'בקתות רינה ברמה',
    subtitle: 'חווית נופש יוקרתית ברמת הגולן',
  },
  {
    image: 'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8806.jpg',
    title: 'בקתות עץ רומנטיות',
    subtitle: '6 בקתות מרווחות עם ג\'קוזי זוגי',
  },
  {
    image: 'https://www.rinabarama.co.il/wp-content/uploads/2018/01/123-Big-1.jpg',
    title: 'נוף פנורמי מרהיב',
    subtitle: 'מוקפים עצים וצמחייה מטופחת',
  },
  {
    image: 'https://www.rinabarama.co.il/wp-content/uploads/2018/01/2223-1.jpg',
    title: 'מיקום מושלם',
    subtitle: '10 דקות מהכנרת • 15 דקות מחמת גדר',
  },
  {
    image: 'https://www.rinabarama.co.il/wp-content/uploads/2018/01/3.jpg',
    title: 'אירוח זוגי ומשפחתי',
    subtitle: 'חדרים מרווחים עם כל השירותים',
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 30 },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Carousel */}
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container h-full">
          {heroSlides.map((slide, index) => (
            <div key={index} className="embla__slide relative h-full min-w-0 flex-[0_0_100%]">
              {/* Background Image with proper scaling */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
                <div className="container-custom">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <motion.h1
                      className="text-white text-shadow mb-6"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      className="text-xl md:text-2xl text-white text-shadow mb-8 max-w-3xl mx-auto"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.p>

                    {index === 0 && (
                      <motion.div
                        className="flex flex-wrap gap-4 justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      >
                        <a href="#booking" className="btn-primary">
                          הזמינו עכשיו
                        </a>
                        <a href="#cabins" className="btn-outline bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-primary-600">
                          גלו את הבקתות
                        </a>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all flex items-center justify-center text-white"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-3 bg-white rounded-full mt-2" />
        </motion.div>
      </motion.div>
    </section>
  )
}
