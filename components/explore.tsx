"use client"

import { useState, useEffect } from "react"
import { Search, Play, Info, MapPin, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { GlowEffect } from "@/components/ui/glow-effect"
import { Gallery4, type Gallery4Item } from "@/components/blocks/gallery4"
import { motion, AnimatePresence } from "framer-motion"

// Sample event data
const heroEvents = [
  {
    id: 1,
    title: "Paint WITH PUPPIES in Noida",
    price: "Under ₹300",
    tag: "Chill Vibes",
    description:
      "Join us for a relaxing painting session with adorable puppies. Perfect for art lovers and dog enthusiasts!",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Editor's Pick",
    duration: "2 hours",
    attendees: "15-20 people",
    location: "Sector 18, Noida"
  },
  {
    id: 2,
    title: "Rooftop Jazz Night",
    price: "₹500-800",
    tag: "Live Music",
    description: "Experience smooth jazz under the stars with Delhi's finest musicians on a beautiful rooftop venue.",
    image: "/placeholder.svg?height=600&width=1200",
    category: "This Weekend's Must-Try",
    duration: "3 hours",
    attendees: "50+ people",
    location: "CP, New Delhi"
  },
  {
    id: 3,
    title: "Food Truck Festival",
    price: "₹200-600",
    tag: "Food & Drinks",
    description: "Taste the best street food from 20+ food trucks in one amazing location. Family-friendly event!",
    image: "/placeholder.svg?height=600&width=1200",
    category: "Editor's Pick",
    duration: "All day",
    attendees: "200+ people",
    location: "Connaught Place"
  },
]

const hiddenGems = [
  {
    id: 1,
    name: "Pottery Workshop",
    price: "₹1,200",
    location: "Hauz Khas",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Creative",
    rating: 4.8,
    duration: "3 hours"
  },
  {
    id: 2,
    name: "Stand-up Comedy Night",
    price: "₹350",
    location: "Connaught Place",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Comedy",
    rating: 4.6,
    duration: "2 hours"
  },
  {
    id: 3,
    name: "Yoga in the Park",
    price: "₹150",
    location: "Lodhi Gardens",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Wellness",
    rating: 4.9,
    duration: "1 hour"
  },
  {
    id: 4,
    name: "Wine Tasting",
    price: "₹2,500",
    location: "Cyber City",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Food & Drink",
    rating: 4.7,
    duration: "2.5 hours"
  },
  {
    id: 5,
    name: "Photography Walk",
    price: "₹800",
    location: "Old Delhi",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Photography",
    rating: 4.5,
    duration: "4 hours"
  },
  {
    id: 6,
    name: "Cooking Class",
    price: "₹1,800",
    location: "Khan Market",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Culinary",
    rating: 4.8,
    duration: "3 hours"
  },
]

const weekendEvents = [
  {
    id: 1,
    name: "Music Festival",
    price: "₹1,500",
    location: "Pragati Maidan",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Music",
    rating: 4.9,
    duration: "6 hours"
  },
  {
    id: 2,
    name: "Art Exhibition",
    price: "₹200",
    location: "India Gate",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Art",
    rating: 4.3,
    duration: "2 hours"
  },
  {
    id: 3,
    name: "Food Festival",
    price: "₹300",
    location: "Select City Walk",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Food",
    rating: 4.6,
    duration: "4 hours"
  },
  {
    id: 4,
    name: "Dance Workshop",
    price: "₹600",
    location: "Karol Bagh",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Dance",
    rating: 4.7,
    duration: "2 hours"
  },
  {
    id: 5,
    name: "Book Reading",
    price: "₹100",
    location: "Daryaganj",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Literature",
    rating: 4.4,
    duration: "1.5 hours"
  },
  {
    id: 6,
    name: "Tech Meetup",
    price: "Free",
    location: "Gurgaon",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Technology",
    rating: 4.8,
    duration: "3 hours"
  },
]

const popularEvents = [
  {
    id: 1,
    name: "Bollywood Night",
    price: "₹800",
    location: "Nehru Place",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Entertainment",
    rating: 4.5,
    duration: "4 hours"
  },
  {
    id: 2,
    name: "Fitness Bootcamp",
    price: "₹500",
    location: "Central Park",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Fitness",
    rating: 4.6,
    duration: "1 hour"
  },
  {
    id: 3,
    name: "Gaming Tournament",
    price: "₹1,000",
    location: "Cyber Hub",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Gaming",
    rating: 4.8,
    duration: "5 hours"
  },
  {
    id: 4,
    name: "Meditation Session",
    price: "₹250",
    location: "Lotus Temple",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Wellness",
    rating: 4.9,
    duration: "1 hour"
  },
  {
    id: 5,
    name: "Craft Beer Tasting",
    price: "₹1,200",
    location: "Aerocity",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Drinks",
    rating: 4.4,
    duration: "2 hours"
  },
  {
    id: 6,
    name: "Startup Pitch",
    price: "₹300",
    location: "Okhla",
    image: "/placeholder.svg?height=300&width=400",
    tag: "Business",
    rating: 4.7,
    duration: "3 hours"
  },
]

// Transform function to convert event data to Gallery4Item format
function transformEventsToGalleryItems(events: Array<{
  id: number
  name: string
  price: string
  location: string
  image: string
  tag: string
  rating: number
  duration: string
}>): Gallery4Item[] {
  return events.map(event => ({
    id: event.id.toString(),
    title: event.name,
    description: `Join us for ${event.name} in ${event.location}. Duration: ${event.duration}`,
    price: event.price,
    location: event.location,
    duration: event.duration,
    rating: event.rating,
    tag: event.tag,
    href: `/event/${event.id}`,
    image: event.image || "/placeholder.svg?height=400&width=600"
  }))
}

export default function EventsPage() {
  const [currentHero, setCurrentHero] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  // Auto-rotate hero banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroEvents.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const currentHeroEvent = heroEvents[currentHero]

  // Transform event data for Gallery4 components
  const hiddenGemsGalleryItems = transformEventsToGalleryItems(hiddenGems)
  const weekendEventsGalleryItems = transformEventsToGalleryItems(weekendEvents)
  const popularEventsGalleryItems = transformEventsToGalleryItems(popularEvents)

  return (
    <div className="min-h-screen bg-[#3c2a2a]">

        {/* Simple Header */}
        <div className="pt-20 pb-8">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between">
              <div className="relative w-full">
                <Input
                  type="text"
                  placeholder="Search events, activities, places..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-12 h-10 text-sm rounded-xl backdrop-blur-sm"
                />
                <Button size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 bg-red-500 hover:bg-red-600 h-8 w-8 rounded-lg">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Banner */}
        <div className="relative h-[60vh] mb-16 overflow-hidden rounded-3xl mx-4 md:mx-8">
          <div className="absolute inset-0">
            <GlowEffect
              colors={['#ef4444', '#dc2626', '#b91c1c']}
              mode="flowHorizontal"
              blur="softest"
              className="opacity-20"
            />
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHero}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              {/* Text placeholder for hero banner */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">
                <span className="text-white text-8xl md:text-9xl font-bold opacity-20">
                  {currentHeroEvent.title.split(' ').slice(0, 2).map(word => word[0]).join('').toUpperCase()}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
            <div className="max-w-7xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${currentHero}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Badge className="mb-4 bg-red-500 hover:bg-red-600 text-white border-0 text-sm">
                      {currentHeroEvent.category}
                    </Badge>
                  </motion.div>
                  
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl text-white"
                  >
                    {currentHeroEvent.title}
                  </motion.h2>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="flex items-center gap-6 mb-4 text-white"
                  >
                    <div className="flex items-center">
                      <span className="font-semibold text-lg">{currentHeroEvent.price}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{currentHeroEvent.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{currentHeroEvent.attendees}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{currentHeroEvent.location}</span>
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <Badge variant="outline" className="border-white text-white mb-6">
                      {currentHeroEvent.tag}
                    </Badge>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="text-gray-200 text-lg mb-8 max-w-2xl"
                  >
                    {currentHeroEvent.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-8 py-3 text-base">
                        <Play className="mr-2 h-5 w-5" />
                        Check It Out
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white rounded-xl px-8 py-3 text-base">
                        <Info className="mr-2 h-5 w-5" />
                        More Info
                      </Button>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Hero Navigation Dots */}
          <div className="absolute bottom-6 right-6 md:right-8 flex gap-2">
            {heroEvents.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentHero ? "bg-white" : "bg-white/50 hover:bg-white/70"
                }`}
                onClick={() => setCurrentHero(index)}
              />
            ))}
          </div>
        </div>

        {/* Event Carousels */}
        <div className="max-w-7xl mx-auto">
          <Gallery4 
            title="Hidden Gems" 
            items={hiddenGemsGalleryItems}
          />
          <Gallery4 
            title="This Weekend" 
            items={weekendEventsGalleryItems}
          />
          <Gallery4 
            title="Popular Near You" 
            items={popularEventsGalleryItems}
          />
        </div>

        {/* Footer Spacing */}
        <div className="h-20" />
    </div>
  )
}
