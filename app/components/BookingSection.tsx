'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkin: '',
    checkout: '',
    guests: '2',
    cabin: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would integrate with your booking system
    const whatsappMessage = `שלום, אני מעוניין להזמין בקתה:
שם: ${formData.name}
טלפון: ${formData.phone}
תאריכי אירוח: ${formData.checkin} עד ${formData.checkout}
מספר אורחים: ${formData.guests}
${formData.message ? `הערות: ${formData.message}` : ''}`

    const whatsappUrl = `https://wa.me/972505656582?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section id="booking" className="section-padding gradient-primary">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Right Side - Info */}
          <motion.div
            className="text-white"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6">הזמינו את הבקתה שלכם</h2>
            <p className="text-xl mb-8 text-primary-100">
              התחילו לתכנן את החופשה המושלמת שלכם ברמת הגולן. צרו קשר ונשמח לעזור
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">טלפון</h4>
                  <a href="tel:0505656582" className="text-primary-100 hover:text-white text-lg">
                    050-5656582
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">כתובת</h4>
                  <p className="text-primary-100">
                    גבעת יואב<br />
                    רמת הגולן, ישראל
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">שעות פעילות</h4>
                  <p className="text-primary-100">
                    ראשון-חמישי: 08:00-22:00<br />
                    שישי-שבת: 08:00-18:00
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-sm rounded-2xl">
              <h4 className="text-white font-bold mb-3">💎 הצעה מיוחדת</h4>
              <p className="text-primary-100 mb-2">
                הזמינו 3 לילות ומעלה וקבלו הנחה של 10%!
              </p>
              <p className="text-sm text-primary-200">
                *ההצעה בתוקף למגיבים דרך האתר בלבד
              </p>
            </div>
          </motion.div>

          {/* Left Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl shadow-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">טופס הזמנה מהירה</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">שם מלא *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="הזינו את שמכם"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">טלפון *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="050-1234567"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">אימייל</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">כניסה *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkin}
                      onChange={(e) => setFormData({ ...formData, checkin: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">יציאה *</label>
                    <input
                      type="date"
                      required
                      value={formData.checkout}
                      onChange={(e) => setFormData({ ...formData, checkout: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">מספר אורחים *</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors"
                  >
                    <option value="1">1 אורח</option>
                    <option value="2">2 אורחים</option>
                    <option value="3">3 אורחים</option>
                    <option value="4">4 אורחים</option>
                    <option value="5">5 אורחים</option>
                    <option value="6">6 אורחים</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">הערות נוספות</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="ספרו לנו על צרכים מיוחדים או שאלות"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-lg py-4"
                >
                  שלח בקשה בוואטסאפ 💬
                </button>

                <p className="text-sm text-gray-500 text-center">
                  תקבלו תשובה תוך מספר דקות בוואטסאפ
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
