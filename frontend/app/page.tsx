import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeatureSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
