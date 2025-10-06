'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CabinCarousel from './CabinCarousel'

const cabins = [
  {
    id: 1,
    name: 'בקתה 1',
    description: 'בקתת עץ רומנטית עם חדר שינה מרווח ומיטה זוגית גדולה',
    size: '52 מ"ר',
    guests: '2-4 אורחים',
    amenities: ['ג\'קוזי זוגי', 'מטבחון (מקרר, מיקרוגל)', 'טלוויזיה לווין', 'WiFi', 'מזגן', 'מרפסת פרטית'],
    images: [
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8806.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8669.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/78-Big.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/129-Big.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/110-Big2-1.jpg',
    ],
  },
  {
    id: 2,
    name: 'בקתה 2',
    description: 'בקתה מרווחת עם סלון מעוצב ופינת ישיבה נעימה',
    size: '52 מ"ר',
    guests: '2-4 אורחים',
    amenities: ['ג\'קוזי זוגי', 'מטבחון (מקרר, מיקרוגל)', 'טלוויזיה לווין', 'WiFi', 'מזגן', 'מרפסת פרטית'],
    images: [
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8708.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8392.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/DSC_8819.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/62-Big.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/123-Big-1.jpg',
    ],
  },
  {
    id: 3,
    name: 'בקתה 3',
    description: 'בקתה קסומה מוקפת עצים וצמחייה מטופחת',
    size: '52 מ"ר',
    guests: '2-4 אורחים',
    amenities: ['ג\'קוזי זוגי', 'מטבחון (מקרר, מיקרוגל)', 'טלוויזיה לווין', 'WiFi', 'מזגן', 'מרפסת פרטית'],
    images: [
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8352.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/148-Big-2.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8806.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/3.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/2223-1.jpg',
    ],
  },
  {
    id: 4,
    name: 'בקתה 4',
    description: 'בקתה יוקרתית עם חדר רחצה מפנק ומוצרי טיפוח',
    size: '52 מ"ר',
    guests: '2-4 אורחים',
    amenities: ['ג\'קוזי זוגי', 'מטבחון (מקרר, מיקרוגל)', 'טלוויזיה לווין', 'WiFi', 'מזגן', 'מרפסת פרטית'],
    images: [
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8669.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/129-Big.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8708.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/110-Big2-1.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/62-Big.jpg',
    ],
  },
  {
    id: 5,
    name: 'בקתה 5',
    description: 'בקתה שקטה ופרטית עם נוף מרהיב לרמת הגולן',
    size: '52 מ"ר',
    guests: '2-4 אורחים',
    amenities: ['ג\'קוזי זוגי', 'מטבחון (מקרר, מיקרוגל)', 'טלוויזיה לווין', 'WiFi', 'מזגן', 'מרפסת פרטית'],
    images: [
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/78-Big.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/148-Big-2.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8392.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/123-Big-1.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/DSC_8819.jpg',
    ],
  },
  {
    id: 6,
    name: 'בקתה 6',
    description: 'בקתה משפחתית מושלמת לזוגות ומשפחות',
    size: '52 מ"ר',
    guests: '2-4 אורחים',
    amenities: ['ג\'קוזי זוגי', 'מטבחון (מקרר, מיקרוגל)', 'טלוויזיה לווין', 'WiFi', 'מזגן', 'מרפסת פרטית'],
    images: [
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/2223-1.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8352.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8806.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2018/01/3.jpg',
      'https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8708.jpg',
    ],
  },
]

function CabinCard({ cabin, index }: { cabin: typeof cabins[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center py-20"
    >
      <div className="container-custom w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
          isEven ? '' : 'lg:flex-row-reverse'
        }`}>
          {/* Image Section */}
          <motion.div
            style={{ y: isEven ? y : undefined }}
            className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <CabinCarousel images={cabin.images} cabinName={cabin.name} />

              {/* Floating Size Badge */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 z-20 w-28 h-28 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-xl border-4 border-white"
              >
                <div className="text-center">
                  <div className="text-white font-bold text-2xl">{cabin.size.split(' ')[0]}</div>
                  <div className="text-white/90 text-xs font-semibold">מ"ר</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className={`space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          >
            {/* Number Badge */}
            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="text-8xl font-bold text-primary-600/10 leading-none">
                {String(cabin.id).padStart(2, '0')}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                {cabin.name}
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {cabin.description}
              </p>
            </motion.div>

            {/* Guests Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-gray-700 bg-gray-50 rounded-2xl px-6 py-4 w-fit"
            >
              <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="font-semibold text-lg">{cabin.guests}</span>
            </motion.div>

            {/* Amenities Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-3"
            >
              {cabin.amenities.map((amenity, i) => (
                <motion.div
                  key={amenity}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="w-2 h-2 rounded-full bg-primary-600"></div>
                  <span className="text-gray-700 text-sm font-medium">{amenity}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href="#booking"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 text-white rounded-full font-semibold text-lg hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <span>בדוק זמינות</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function CabinsSection() {
  return (
    <section id="cabins" className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="container-custom relative z-10">
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 px-6 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold text-sm"
          >
            הבקתות שלנו
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            6 בקתות יוקרתיות
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            כל בקתה מעוצבת בקפידה עם ג'קוזי פרטי, נוף מרהיב וכל הנוחות שתצטרכו
          </p>
        </motion.div>
      </div>

      {/* Cabins */}
      <div className="relative z-10">
        {cabins.map((cabin, index) => (
          <CabinCard key={cabin.id} cabin={cabin} index={index} />
        ))}
      </div>

      {/* Bottom CTA */}
      <motion.div
        className="container-custom relative z-10 py-20 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-12 shadow-2xl">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            מוכנים לחופשה מושלמת?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            הזמינו עכשיו ותיהנו מחווית אירוח יוקרתית ברמת הגולן
          </p>
          <a
            href="#booking"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary-600 rounded-full font-bold text-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            <span>בדקו זמינות</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
