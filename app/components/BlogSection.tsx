'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { blogPosts } from '../data/blogPosts'

export default function BlogSection() {
  const featuredPosts = blogPosts.slice(0, 3)

  return (
    <section id="blog" className="section-padding bg-gradient-to-b from-white to-wood-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-wood-700 mb-4">המדריך שלנו לגולן</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            כל מה שצריך לדעת על טיולים, מסעדות ואטרקציות ברמת הגולן
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="card group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post.category === 'hiking' && '🥾 טיולים'}
                  {post.category === 'restaurants' && '🍽️ מסעדות'}
                  {post.category === 'tips' && '💡 טיפים'}
                  {post.category === 'attractions' && '🎯 אטרקציות'}
                  {post.category === 'seasonal' && '🌸 עונתי'}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <time>{new Date(post.date).toLocaleDateString('he-IL')}</time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.seoKeywords.slice(0, 3).map((keyword) => (
                    <span
                      key={keyword}
                      className="px-2 py-1 bg-wood-100 text-wood-700 rounded text-xs"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <a
                  href={`/blog/${post.slug}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 transition-colors inline-flex items-center gap-2"
                >
                  קרא עוד
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="/blog" className="btn-secondary">
            צפו בכל המאמרים (30+)
          </a>
        </motion.div>
      </div>
    </section>
  )
}
