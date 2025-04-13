import Image from "next/image"

interface PageHeaderProps {
  title: string
  backgroundImage?: string
  description?: string
}

export function PageHeader({
  title,
  backgroundImage = "/placeholder.svg?height=400&width=1920",
  description,
}: PageHeaderProps) {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/60"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-wave-pattern"></div>
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple/20 animate-float"></div>
      <div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gold/10 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">{title}</h1>
        {description && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-sm">{description}</p>
        )}
      </div>
    </section>
  )
}
