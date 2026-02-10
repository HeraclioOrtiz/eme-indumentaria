import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import TrustBar from '@/components/sections/TrustBar'
import ServicesGrid from '@/components/sections/ServicesGrid'
import FeaturesSection from '@/components/sections/FeaturesSection'
import SocialProof from '@/components/sections/SocialProof'
import ConversionZone from '@/components/sections/ConversionZone'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ServicesGrid />
        <FeaturesSection />
        <SocialProof />
        <ConversionZone />
      </main>
      <Footer />
    </>
  )
}
