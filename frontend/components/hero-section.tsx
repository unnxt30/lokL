"use client"

import { Button } from "@/components/ui/button"
import { EB_Garamond } from "next/font/google"
import { Squares } from "./ui/square-background"

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  display: 'swap',
})

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.7}
          borderColor="#8b5c5c"
          squareSize={50}
          hoverFillColor="#000000"
          className="w-full h-full"
          lineWidth={1}
        />
        <div className="absolute inset-0 bg-[#3c2a2a]/80" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-7 text-center">
        <h1 className={`${garamond.variable} font-serif text-5xl md:text-7xl lg:text-7xl tracking-tight leading-[1.1] text-white mb-8`}>
          Escape the Campus Bubble
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <h3 className="text-lg md:text-2xl lg:text-2xl text-white/90 leading-relaxed mb-12">
            <span className={`${garamond.variable} text-red-500 font-serif italic`}>lokL</span> helps college students discover cool, budget-friendly spots to eat, chill, and explore around NCR — all reviewed by fellow students.
            <span className="block mt-4">
              Go beyond just <span className={`${garamond.variable} text-red-500 font-serif italic`}>&ldquo;kuch bhi.&rdquo;</span>
            </span>
          </h3>
        </div>

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
