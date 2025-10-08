'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const attractions = [
  {
    id: 1,
    name: 'מפלי הבניאס',
    description: 'שמורת טבע מרהיבה עם מפלים ונחל מתגבר',
    distance: '15 דקות',
    category: 'טבע',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2940',
    highlights: ['מפלים', 'מסלולי טיול', 'פיקניק'],
    blogSlug: 'banias-waterfalls-complete-guide',
  },
  {
    id: 2,
    name: 'הר בנטל',
    description: 'נוף פנורמי 360 מעלות של כל רמת הגולן',
    distance: '20 דקות',
    category: 'נופים',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2940',
    highlights: ['תצפית', 'שקיעות', 'היסטוריה'],
    blogSlug: 'mount-bental-observation-point',
  },
  {
    id: 3,
    name: 'שמורת גמלא',
    description: 'עיר עתיקה, נשרים ומפל מרהיב',
    distance: '25 דקות',
    category: 'ארכיאולוגיה',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2940',
    highlights: ['נשרים', 'מפל 51 מטר', 'חורבות'],
    blogSlug: 'gamla-nature-reserve-guide',
  },
  {
    id: 4,
    name: 'חמת גדר',
    description: 'ספא טבעי עם מעיינות חמים ותנינים',
    distance: '30 דקות',
    category: 'בריאות',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2940',
    highlights: ['מעיינות חמים', 'תנינים', 'ספא'],
    blogSlug: 'hamat-gader-hot-springs-spa',
  },
  {
    id: 5,
    name: 'הר חרמון',
    description: 'אתר סקי וספורט חורף',
    distance: '35 דקות',
    category: 'ספורט',
    image: 'https://images.unsplash.com/photo-1605540436563-5bca919ae766?q=80&w=2940',
    highlights: ['שלג', 'סקי', 'מזחלות'],
    blogSlug: 'mount-hermon-ski-resort',
  },
  {
    id: 6,
    name: 'קצרין העתיקה',
    description: 'כפר מהתקופה התלמודית משוחזר',
    distance: '15 דקות',
    category: 'היסטוריה',
    image: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=2940',
    highlights: ['מוזיאון', 'סדנאות', 'אתר עתיקות'],
    blogSlug: 'ancient-katzrin-village',
  },
  {
    id: 7,
    name: 'יקבי גולן',
    description: 'טעימות יין ביקבים מובילים',
    distance: '20 דקות',
    category: 'גסטרונומיה',
    image: 'https://images.unsplash.com/photo-1474932525278-2044f21804e4?q=80&w=2940',
    highlights: ['יינות', 'טעימות', 'סיורים'],
    blogSlug: 'golan-wineries-guide-2025',
  },
  {
    id: 8,
    name: 'נחל אל-על',
    description: 'מסלול טיול אתגרי עם 5 מפלים',
    distance: '30 דקות',
    category: 'אתגר',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2940',
    highlights: ['הרפתקה', 'מפלים', 'היפוק'],
    blogSlug: 'nahal-el-al-waterfall-hike',
  },
]

export default function AttractionsSection() {
  return (
    <section id="attractions" className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-wood-700 mb-4">אטרקציות באזור</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל האטרקציות הטובות ביותר ברמת הגולן במרחק של דקות ספורות מהבקתות
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction, index) => (
            <Link key={attraction.id} href={`/blog/${attraction.blogSlug}`}>
              <motion.div
                className="card group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={attraction.image}
                    alt={attraction.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-wood-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {attraction.distance}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-wood-700">
                    {attraction.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl text-wood-700 mb-2 font-bold group-hover:text-primary-600 transition-colors">
                    {attraction.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{attraction.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {attraction.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>קרא עוד</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="/blog" className="btn-secondary">
            צפו במדריך המלא לאטרקציות
          </a>
        </motion.div>
      </div>
    </section>
  )
}
