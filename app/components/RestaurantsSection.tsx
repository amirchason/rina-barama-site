'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const restaurants = [
  {
    id: 1,
    name: 'מסעדת אל-באבא',
    cuisine: 'דרוזי מסורתי',
    rating: 4.8,
    priceLevel: '₪₪',
    distance: '10 דקות',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2940',
    specialty: 'כבאב בתנור טאבון',
    kosher: false,
  },
  {
    id: 2,
    name: 'משק העין',
    cuisine: 'גורמה Farm to Table',
    rating: 4.9,
    priceLevel: '₪₪₪₪',
    distance: '18 דקות',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940',
    specialty: 'בשר בקר מקומי',
    kosher: true,
  },
  {
    id: 3,
    name: 'דוכן דרעי',
    cuisine: 'בשרים',
    rating: 4.7,
    priceLevel: '₪₪₪',
    distance: '15 דקות',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2940',
    specialty: 'כבש טלה',
    kosher: true,
  },
  {
    id: 4,
    name: 'בית הבורקס של סוהא',
    cuisine: 'מאפים דרוזיים',
    rating: 4.9,
    priceLevel: '₪',
    distance: '8 דקות',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2940',
    specialty: 'בורקס גבינה',
    kosher: false,
  },
  {
    id: 5,
    name: 'מסעדת מצפה חורשים',
    cuisine: 'איטלקי',
    rating: 4.8,
    priceLevel: '₪₪₪',
    distance: '22 דקות',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2940',
    specialty: 'פסטות ביתיות',
    kosher: false,
  },
  {
    id: 6,
    name: 'גלידת כפר חרוב',
    cuisine: 'גלידה ארטיזנלית',
    rating: 5.0,
    priceLevel: '₪₪',
    distance: '12 דקות',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=2940',
    specialty: 'פיסטוק אגוזי לוז',
    kosher: true,
  },
]

export default function RestaurantsSection() {
  return (
    <section id="restaurants" className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-primary-600 mb-4">מסעדות מומלצות</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            מהמטבח הדרוזי האותנטי ועד מסעדות גורמה - חווי את הטעמים של הגולן
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              className="card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
                  <span className="text-yellow-500">★</span>
                  <span className="font-bold text-gray-900">{restaurant.rating}</span>
                </div>
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {restaurant.distance}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                  <span className="text-gray-600 font-medium">{restaurant.priceLevel}</span>
                </div>

                <p className="text-primary-600 font-medium mb-3">{restaurant.cuisine}</p>

                <div className="mb-4">
                  <span className="text-sm text-gray-600">מומלץ במיוחד: </span>
                  <span className="text-sm font-semibold text-gray-900">{restaurant.specialty}</span>
                </div>

                <div className="flex items-center gap-2">
                  {restaurant.kosher && (
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      כשר
                    </span>
                  )}
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    מומלץ
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="/blog/best-restaurants-golan-heights-2025" className="btn-primary">
            צפו ברשימה המלאה של 15 מסעדות
          </a>
        </motion.div>
      </div>
    </section>
  )
}
