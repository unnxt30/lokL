import type { LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export default function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  return (
    <Card className="rounded-2xl shadow-md border-0 bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-full bg-red-100 text-red-500">
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl text-[#3c2a2a]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
