'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import lokL from "@/public/images/lokL-logo.svg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image 
                src={lokL} 
                alt="lokL Logo" 
                width={100} 
                height={50} 
                className="h-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/explore" className="text-gray-700 hover:text-red-500 px-3 py-2 font-medium">
              Explore
            </Link>
            <Link href="/login" className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Login
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-red-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
            <Link href="/explore" className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">
              Explore
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/contribute" className="text-gray-700 hover:text-red-500 block px-3 py-2 rounded-md text-base font-medium">
              Contribute
            </Link>
            <Link href="/login" className="block w-full text-center mt-3 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 