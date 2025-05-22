import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"
import TestimonialsSection from "@/components/testimonials-section"
import Trailer from "@/components/trailer"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <Trailer />
      <FeatureSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  )
}
