'use client';

import { Star, Calendar, MapPin, Users} from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react";

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-12 px-6 relative group/feature dark:border-neutral-800 cursor-pointer min-h-[300px] w-full",
        (index === 0) && "lg:border-l dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      <div className="mb-6 relative z-10 px-8 text-neutral-600 dark:text-neutral-400">
        {React.isValidElement(icon) && React.cloneElement(icon, { className: "w-8 h-8" })}
      </div>
      <div className="text-xl font-bold mb-4 relative z-10 px-8 w-full h-16 flex items-center">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-red-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-base text-neutral-600 dark:text-neutral-300 w-full relative z-10 px-8">
        {description}
      </p>
    </div>
  );
};

export default function FeatureSection() {
  // Features data
  const features = [
    {
      id: 'feature-1',
      title: "lokL Picks",
      description: "Curated spots loved by students, not TripAdvisor tourist. Think vibey cafes, offbeat art gigs, and thrift hubs.",
      icon: <Star className="w-6 h-6" />,
    },
    {
      id: 'feature-2',
      title: "No Plans? No Problem!",
      description: "Scroll-proof plans for your weekend or evening break. We Bundle nearby spots into plans that won't waste your energy.",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      id: 'feature-3',
      title: "Cheap Thrills, Mapped Out",
      description: "We dont just tell you where to go, we show you how to get there, what it'll cost, and the smartest way to travel like a broke-but-brilliant student.",
      icon: <MapPin className="w-6 h-6" />,
    },
    {
      id: 'feature-4',
      title: "Rated by Roommates, Not Influencers",
      description: "All reviews are from students who've been there, done that  no #ads, no fluff, just honest chaos and chill.",
      icon: <Users className="w-6 h-6" />,
    },
  ];
  
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

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#3c2a2a]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What&apos;s in it for you?
        </motion.h2>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <Feature
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
