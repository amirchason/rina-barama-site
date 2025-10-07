import { Metadata } from 'next'
import { notFound } from 'next/navigation'
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

// Generate static params for all blog posts
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = allBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'מאמר לא נמצא',
    }
  }

  return {
    title: `${post.title} | בקתות רינה ברמה`,
    description: post.excerpt,
    keywords: post.seoKeywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = allBlogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = allBlogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white" dir="rtl">
      <Header />

      <article className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 text-sm text-stone-600">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              בית
            </Link>
            {' > '}
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">
              בלוג
            </Link>
            {' > '}
            <span className="text-stone-900">{post.title}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
              {categoryLabels[post.category as keyof typeof categoryLabels]}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-stone-600 mb-8 pb-8 border-b-2 border-stone-200">
            <div className="flex items-center gap-2">
              <span>👤</span>
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>📅</span>
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏱️</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg prose-stone max-w-none
              prose-headings:font-bold prose-headings:text-stone-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-stone-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-stone-900 prose-strong:font-bold
              prose-ul:my-6 prose-li:my-2
              prose-blockquote:border-r-4 prose-blockquote:border-emerald-500 prose-blockquote:pr-6 prose-blockquote:italic"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-l from-emerald-600 to-emerald-700 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              מוכנים לחוות את רמת הגולן בעצמכם?
            </h2>
            <p className="text-xl text-emerald-50 mb-6">
              הבקתות שלנו ממתינות לכם לחופשה בלתי נשכחת
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#cabins"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 transition-all shadow-lg hover:shadow-xl inline-block"
              >
                צפו בבקתות שלנו
              </Link>
              <a
                href="tel:050-5656582"
                className="bg-emerald-800 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-900 transition-all shadow-lg hover:shadow-xl inline-block"
              >
                📞 050-5656582
              </a>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t-2 border-stone-200">
            <h3 className="text-xl font-bold text-stone-900 mb-4">שתפו את המאמר</h3>
            <div className="flex gap-4">
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all"
              >
                📘 Facebook
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-all"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-20 px-4 bg-stone-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-stone-900 mb-8 text-center">
              מאמרים נוספים שיעניינו אתכם
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-stone-600 text-sm line-clamp-2 mb-4">
                      {relatedPost.excerpt}
                    </p>
                    <div className="text-sm text-stone-500">
                      ⏱️ {relatedPost.readTime}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
