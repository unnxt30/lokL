import { Button } from "@/components/ui/button"

export default function CtaSection() {
  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#3c2a2a]">Built by students, for students.</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Join our community of Shiv Nadar University students sharing their favorite spots and experiences.
        </p>
        <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white rounded-xl px-8 py-6 text-lg">
          Contribute Now
        </Button>
      </div>
    </section>
  )
}
