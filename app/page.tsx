import Header from './components/Header'
import Hero from './components/Hero'
import CabinsSection from './components/CabinsSection'
import AttractionsSection from './components/AttractionsSection'
import RestaurantsSection from './components/RestaurantsSection'
import BlogSection from './components/BlogSection'
import BookingSection from './components/BookingSection'
import Footer from './components/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CabinsSection />
      <AttractionsSection />
      <RestaurantsSection />
      <BlogSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
