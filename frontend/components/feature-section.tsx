'use client';

import { MessageSquare, Map, Award, Search } from "lucide-react"
import { useState, useRef, useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion"
import FeatureCard from "./feature-card"
import type { LucideIcon } from "lucide-react"

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  position: number;
  side: 'left' | 'right';
}

export default function FeatureSection() {
  // Features data
  const initialFeatures: Feature[] = [
    {
      id: 'feature-1',
      title: "Student Tips & Reviews",
      description: "Get authentic recommendations and insights from fellow students who've been there.",
      icon: MessageSquare,
      position: 0,
      side: 'left'
    },
    {
      id: 'feature-2',
      title: "Travel Info + Routes",
      description: "Find the best ways to get around Delhi and Noida with student-verified transportation tips.",
      icon: Map,
      position: 1,
      side: 'right'
    },
    {
      id: 'feature-3',
      title: "Earn Badges & Points",
      description: "Contribute to the community and earn recognition for your helpful insights.",
      icon: Award,
      position: 2,
      side: 'left'
    },
    {
      id: 'feature-4',
      title: "Search + Filters",
      description: "Easily find exactly what you're looking for with powerful search and filtering options.",
      icon: Search,
      position: 3,
      side: 'right'
    },
  ];

  const [features] = useState<Feature[]>(initialFeatures);
  const lineRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardSpacing = 130; // Fixed spacing between dots
  const controls = useAnimationControls();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  // Calculate the line's dimensions after render
  useEffect(() => {
    controls.start("visible"); // Start the animation immediately
    
    // Wait for layout to be ready
    const timeoutId = setTimeout(() => {
      // Ensure animations are running
      controls.start("visible");
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [controls]);

  // Function to get the y position for a card based on its position index
  const getYPosition = (position: number) => {
    return position * cardSpacing; // Fixed spacing between cards (pixels)
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#3c2a2a]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover the Best of Campus Life
        </motion.h2>

        <div className="relative" style={{ minHeight: '600px' }}>
          {/* Dotted line */}
          <div 
            ref={lineRef}
            className="absolute hidden md:block left-1/2 top-0 bottom-0 w-0.5 border-l border-dashed border-red-300 transform -translate-x-1/2 z-0" 
            style={{ height: '550px', marginTop: '50px' }} 
          />
          
          <motion.div 
            className="relative h-full"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {features.map((feature) => {
              return (
                <motion.div 
                  key={feature.id}
                  className={`absolute z-10 flex items-center w-full ${feature.side === 'left' ? 'justify-start' : 'justify-end'}`}
                  variants={itemVariants}
                  style={{ 
                    top: getYPosition(feature.position),
                    zIndex: 10
                  }}
                >
                  {/* Card with content */}
                  <motion.div 
                    className={`md:w-1/2 relative ${feature.side === 'left' ? 'md:pr-8' : 'md:pl-8'}`}
                    drag="y"
                    dragConstraints={{
                      top: -50,
                      bottom: 50
                    }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    whileDrag={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
                      zIndex: 50
                    }}
                  >
                    <FeatureCard 
                      title={feature.title} 
                      description={feature.description} 
                      icon={feature.icon} 
                      isDraggable={true}
                    />
                    
                    {/* Connector dot - fixed to the card */}
                    <div 
                      className={`absolute top-1/2 ${feature.side === 'left' ? 'right-0' : 'left-0'} transform translate-y-[-50%] 
                                 ${feature.side === 'left' ? 'translate-x-[50%]' : 'translate-x-[-50%]'} 
                                 w-5 h-5 rounded-full bg-red-100 border-2 border-red-300 z-30`}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Instruction text */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-500 w-full">
            <p className="italic">Try dragging the cards up and down!</p>
          </div>
        </div>
      </div>
    </section>
  )
}
