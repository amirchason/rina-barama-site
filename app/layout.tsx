import type { Metadata } from 'next'
import { Rubik, Assistant } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
  subsets: ['hebrew', 'latin'],
  variable: '--font-rubik',
  display: 'swap',
})

const assistant = Assistant({
  subsets: ['hebrew', 'latin'],
  variable: '--font-assistant',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'בקתות רינה ברמה | צימרים רומנטיים ברמת הגולן',
  description: '6 בקתות עץ יוקרתיות ורומנטיות בגבעת יואב, רמת הגולן. ג\'קוזי זוגי, מטבחון מאובזר, 10 דקות מהכנרת ו-15 דקות מחמת גדר. אירוח זוגי ומשפחתי מושלם.',
  keywords: 'צימרים ברמת הגולן, בקתות עץ, לינה ברמת הגולן, נופש זוגי, בקתות רומנטיות, גבעת יואב, צפון, ג\'קוזי, חמת גדר, כנרת',
  authors: [{ name: 'בקתות רינה ברמה' }],
  openGraph: {
    title: 'בקתות רינה ברמה | צימרים יוקרתיים ברמת הגולן',
    description: '6 בקתות עץ רומנטיות ויוקרתיות עם נוף פנורמי עוצר נשימה',
    type: 'website',
    locale: 'he_IL',
    siteName: 'בקתות רינה ברמה',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="he" dir="rtl" className={`${rubik.variable} ${assistant.variable}`}>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
