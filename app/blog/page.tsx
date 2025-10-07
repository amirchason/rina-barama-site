'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { allBlogPosts } from '@/app/data/blogPosts'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

const categoryLabels = {
  attractions: '🎯 אטרקציות',
  restaurants: '🍽️ מסעדות',
  hiking: '🥾 טיולים',
  tips: '💡 טיפים',
  seasonal: '🌸 עונתי',
  accommodation: '🏡 לינה',
  food: '🍴 אוכל',
  guides: '📚 מדריכים'
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter and search logic
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
      const matchesSearch = searchQuery === '' ||
        post.title.includes(searchQuery) ||
        post.excerpt.includes(searchQuery) ||
        post.seoKeywords.some(keyword => keyword.includes(searchQuery))

      return matchesCategory && matchesSearch
    })
  }, [selectedCategory, searchQuery])

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(allBlogPosts.map(post => post.category)))]

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white" dir="rtl">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-6">
              בלוג רמת הגולן
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              מדריכים מקיפים, המלצות מקומיות וכל מה שצריך לדעת על חופשה ברמת הגולן
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto mb-8"
          >
            <input
              type="text"
              placeholder="חיפוש במאמרים..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-stone-200 focus:border-emerald-500 focus:outline-none text-lg"
            />
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-emerald-600 text-white shadow-lg scale-105'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border-2 border-stone-200'
                }`}
              >
                {category === 'all' ? '🌟 הכל' : categoryLabels[category as keyof typeof categoryLabels]}
              </button>
            ))}
          </motion.div>

          {/* Results Count */}
          <div className="text-center text-stone-600 mb-8">
            נמצאו {filteredPosts.length} מאמרים
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                      {categoryLabels[post.category as keyof typeof categoryLabels]}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-stone-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>

                    <p className="text-stone-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-stone-500">
                      <div className="flex items-center gap-4">
                        <span>👤 {post.author}</span>
                        <span>⏱️ {post.readTime}</span>
                      </div>
                      <span className="text-emerald-600 font-medium group-hover:translate-x-2 transition-transform">
                        קראו עוד ←
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-stone-900 mb-2">
                לא נמצאו תוצאות
              </h3>
              <p className="text-stone-600">
                נסו לשנות את החיפוש או לבחור קטגוריה אחרת
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-l from-emerald-600 to-emerald-700 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              מוכנים לחופשה ברמת הגולן?
            </h2>
            <p className="text-xl text-emerald-50 mb-8">
              הבקתות שלנו ממתינות לכם לחוויה בלתי נשכחת
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#cabins"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl"
              >
                צפו בבקתות שלנו
              </Link>
              <a
                href="tel:050-5656582"
                className="bg-emerald-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl"
              >
                📞 050-5656582
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
