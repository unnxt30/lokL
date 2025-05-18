import { MessageSquare, Map, Award, Search } from "lucide-react"
import FeatureCard from "./feature-card"

export default function FeatureSection() {
  const features = [
    {
      title: "Student Tips & Reviews",
      description: "Get authentic recommendations and insights from fellow students who've been there.",
      icon: MessageSquare,
    },
    {
      title: "Travel Info + Routes",
      description: "Find the best ways to get around Delhi and Noida with student-verified transportation tips.",
      icon: Map,
    },
    {
      title: "Earn Badges & Points",
      description: "Contribute to the community and earn recognition for your helpful insights.",
      icon: Award,
    },
    {
      title: "Search + Filters",
      description: "Easily find exactly what you're looking for with powerful search and filtering options.",
      icon: Search,
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3c2a2a]">
          Discover the Best of Campus Life
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} title={feature.title} description={feature.description} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
