'use client';

import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"


interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  isDraggable?: boolean
}

export default function FeatureCard({ title, description, icon: Icon, isDraggable = false }: FeatureCardProps) {
  return (
    <motion.div
      className={`rounded-2xl shadow-md border-0 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 p-6 ${isDraggable ? 'cursor-grab active:cursor-grabbing' : 'cursor-pointer'}`}
      whileHover={{ 
        scale: 1.03,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" 
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center gap-4 mb-3">
        <motion.div 
          className="p-3 rounded-full bg-red-100 text-red-500"
          whileHover={{ 
            rotate: [0, -10, 10, -10, 0],
            transition: { duration: 0.5 }
          }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <h3 className="text-xl font-semibold text-[#3c2a2a]">{title}</h3>
      </div>
      {isDraggable && (
        <div className="absolute top-2 right-2 text-xs text-gray-400">
          <span className="italic">Drag me</span>
        </div>
      )}
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
