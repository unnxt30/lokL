"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import landingPage from "@/public/images/landing-page-bg.jpg"
import { FcGoogle } from "react-icons/fc"
import Link from "next/link"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignIn = async () => {
    setIsLoading(true)
    // Add your Google OAuth logic here
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google/login`
    // setIsLoading(false)
  }

  return (
    <main className="min-h-screen relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center">
        <Image 
          src={landingPage} 
          alt="login background"
          className="w-full h-full object-cover"
          priority
          quality={80}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j..."
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Login Form */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/20">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-3">
                Welcome Back
              </h1>
              <p className="text-white/80 text-lg">
                Sign in to continue discovering and sharing your adventures
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="relative">
                <Button
                  onClick={handleGoogleSignIn}
                  className="w-full relative bg-white hover:bg-gray-100 text-gray-900 rounded-xl py-6 text-lg flex items-center justify-center gap-3 cursor-pointer"
                  disabled={isLoading}
                >
                  <FcGoogle />
                  {isLoading ? "Signing in..." : "Sign in with Google"}
                </Button>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm">
                  Don&apos;t have an account?{" "}
                  <Link href="/signup" className="text-white hover:text-white/80 font-medium">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
