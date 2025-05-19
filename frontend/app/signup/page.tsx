"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { GlowEffect } from "@/components/ui/glow-effect"
import Image from "next/image"
import landingPage from "@/public/images/landing-page-bg.jpg"
import { FcGoogle } from "react-icons/fc"

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignUp = async () => {
    setIsLoading(true)
    // Add your Google OAuth logic here
    setIsLoading(false)
  }

  return (
    <main className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center">
        <Image 
          src={landingPage} 
          alt="signup background"
          className="w-full h-full object-cover"
          priority
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j..."
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Sign Up Form */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-3">
                Join the Adventure
              </h1>
              <p className="text-white/80 text-lg">
                Be part of the community that discovers and shares the best of campus life
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <GlowEffect
                  colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                  mode="colorShift"
                  blur="soft"
                  duration={3}
                  scale={0.9}
                />
                <Button
                  onClick={handleGoogleSignUp}
                  className="w-full relative bg-white hover:bg-gray-100 text-gray-900 rounded-xl py-6 text-lg flex items-center justify-center gap-3"
                  disabled={isLoading}
                >
                  <FcGoogle />
                  {isLoading ? "Creating account..." : "Sign up with Google"}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm">
                  Already have an account?{" "}
                  <a href="/login" className="text-white hover:text-white/80 font-medium">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 