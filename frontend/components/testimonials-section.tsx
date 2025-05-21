'use client'

import { AnimatedTestimonials } from "./blocks/animated-testimonials"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Aryan Singh",
      role: "Computer Science",
      company: "Class of 2025",
      content: "lokL helped me discover amazing cafes and study spots around Greater Noida that I never knew existed. The student reviews are super honest and relatable!",
      avatar: ""
    },
    {
      id: 2,
      name: "Riya Sharma",
      role: "Business Studies",
      company: "Class of 2024",
      content: "Finally, a platform that understands student budgets! The weekend plans feature saved me from endless 'kaha chale?' discussions with friends.",
      avatar: ""
    },
    {
      id: 3,
      name: "Dhruv Patel",
      role: "Design",
      company: "Class of 2026",
      content: "As a first-year student, lokL was a lifesaver. It helped me explore beyond the usual campus hangouts and find some really cool spots.",
      avatar: ""
    },
    {
      id: 4,
      name: "Zara Khan",
      role: "Economics",
      company: "Class of 2025",
      content: "The detailed transport info and budget breakdowns are super helpful. Plus, the community recommendations have never disappointed!",
      avatar: ""
    }
  ]

  return (
    <section className="w-full">
      {/* <AuroraBackground className="w-full min-h-[80vh]" showRadialGradient={true}> */}
        <div className="relative z-10 w-full">
          <AnimatedTestimonials
            title={`"Trust me Bro" Reviews`}
            subtitle="Don't just take our word for it - hear from fellow students who've discovered their favorite spots through lokL."
            badgeText="Student Approved"
            testimonials={testimonials}
            autoRotateInterval={5000}
            className="bg-transparent"
          />
        </div>
      {/* </AuroraBackground> */}
    </section>
  )
} 