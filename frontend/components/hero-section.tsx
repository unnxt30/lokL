import { Button } from "@/components/ui/button"
import landingPage from "@/public/images/landing-page-bg.jpg"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-cover bg-center">
        <Image 
          src={landingPage} 
          alt="landing page"
          className="w-full h-full object-cover"
          priority
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j..."
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Curate Your Campus Life – Explore, Share, and Earn
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Discover hidden gems, travel tips, and student-rated hangouts near Shiv Nadar University.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-8 py-6 text-lg cursor-pointer">
            Start Exploring
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white/10 hover:text-white rounded-xl px-8 py-6 text-lg cursor-pointer"
          >
            Share Experience
          </Button>
        </div>
      </div>
    </section>
  )
}
