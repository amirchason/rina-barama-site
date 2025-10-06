'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4 text-primary-400">
              בקתות רינה ברמה
            </h3>
            <p className="text-gray-300 mb-4">
              6 בקתות עץ יוקרתיות ורומנטיות בגבעת יואב, רמת הגולן. חווית נופש בלתי נשכחת מוקפת עצים וצמחייה מטופחת.
            </p>
            <div className="text-gray-300">
              <p className="mb-1">📧 rinabarama@gmail.com</p>
              <p>10 דקות מהכנרת • 15 דקות מחמת גדר</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <a href="#cabins" className="text-gray-300 hover:text-primary-400 transition-colors">
                  הבקתות שלנו
                </a>
              </li>
              <li>
                <a href="#attractions" className="text-gray-300 hover:text-primary-400 transition-colors">
                  אטרקציות באזור
                </a>
              </li>
              <li>
                <a href="#restaurants" className="text-gray-300 hover:text-primary-400 transition-colors">
                  מסעדות מומלצות
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-primary-400 transition-colors">
                  בלוג
                </a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-primary-400 transition-colors">
                  הזמנות
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Posts */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">מאמרים פופולריים</h4>
            <ul className="space-y-2">
              <li>
                <a href="/blog/hiking-trails-golan-heights-2025" className="text-gray-300 hover:text-primary-400 transition-colors">
                  10 מסלולי טיול מומלצים
                </a>
              </li>
              <li>
                <a href="/blog/best-restaurants-golan-heights-2025" className="text-gray-300 hover:text-primary-400 transition-colors">
                  15 מסעדות מומלצות
                </a>
              </li>
              <li>
                <a href="/blog/family-vacation-golan-heights-week" className="text-gray-300 hover:text-primary-400 transition-colors">
                  טיול משפחתי מושלם
                </a>
              </li>
              <li>
                <a href="/blog/winter-golan-heights-activities" className="text-gray-300 hover:text-primary-400 transition-colors">
                  חורף ברמת הגולן
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">יצירת קשר</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:0505656582" className="hover:text-primary-400 transition-colors">
                  050-5656582
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-primary-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  גבעת יואב<br />
                  רמת הגולן, ישראל
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>
            © {currentYear} בקתות רינה ברמה. כל הזכויות שמורות.
          </p>
          <p className="text-sm mt-2">
            נבנה עם ❤️ בישראל | <a href="/privacy" className="hover:text-primary-400">מדיניות פרטיות</a> | <a href="/terms" className="hover:text-primary-400">תנאי שימוש</a>
          </p>
        </div>
      </div>

      {/* Schema.org Structured Data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LodgingBusiness",
          "name": "בקתות רינה ברמה",
          "image": "https://www.rinabarama.co.il/wp-content/uploads/2017/11/DSC_8669.jpg",
          "description": "6 בקתות עץ יוקרתיות ורומנטיות בגבעת יואב, רמת הגולן. חווית נופש בלתי נשכחת מוקפת עצים וצמחייה מטופחת",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "גבעת יואב",
            "addressLocality": "גבעת יואב",
            "addressRegion": "רמת הגולן",
            "addressCountry": "IL"
          },
          "telephone": "+972-50-5656582",
          "email": "rinabarama@gmail.com",
          "url": "https://www.rinabarama.co.il",
          "priceRange": "₪₪₪",
          "starRating": {
            "@type": "Rating",
            "ratingValue": "4.9"
          },
          "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": "ג'קוזי זוגי"},
            {"@type": "LocationFeatureSpecification", "name": "WiFi"},
            {"@type": "LocationFeatureSpecification", "name": "מטבחון מאובזר"},
            {"@type": "LocationFeatureSpecification", "name": "מזגן"},
            {"@type": "LocationFeatureSpecification", "name": "טלוויזיה לווין"},
            {"@type": "LocationFeatureSpecification", "name": "מרפסת פרטית"},
            {"@type": "LocationFeatureSpecification", "name": "BBQ"}
          ]
        })
      }} />
    </footer>
  )
}
