"use client"

import { Button } from "@/components/ui/button"
import landingPage from "@/public/images/landing-page-bg.jpg"
import { EB_Garamond } from "next/font/google"
import Image from "next/image"


 const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
})

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-cover bg-center">
        <Image 
          src={landingPage} 
          alt="landing page"
          className="w-full h-full object-cover blur-[2px]"
          priority
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j..."
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className={`${garamond.variable} font-serif text-5xl md:text-7xl lg:text-9xl tracking-tight leading-tight text-white mb-6`}>
          Escape
          <br />
          the Campus Bubble
        </h1>
        
        <h3 className="text-xl md:text-3xl text-white/90 mb-8 max-w-3xl mx-auto space-y-3">
           <span className={`${garamond.variable} text-red-500  font-serif italic`}>lokL</span> helps college students discover cool, 
           affordable places to eat, chill, and explore in and around NCR — all reviewed and recommended by students like you. Whether it&apos;s a 
           hidden café or a weekend hangout, we help you go beyond just <span className={`${garamond.variable}text-red-500 font-serif italic`}>&ldquo;kuch bhi.&rdquo;</span>
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="relative">
            <Button size="lg" className="relative bg-red-500 hover:bg-red-600 text-white rounded-xl px-8 py-6 text-lg cursor-pointer">
              Start Exploring
            </Button>
          </div>
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
