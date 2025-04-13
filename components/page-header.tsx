import Image from "next/image"
import { motion } from "framer-motion"

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
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 to-navy/60"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-6 bg-wave-pattern"></div>
      <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-purple/20 animate-float hidden sm:block"></div>
      <div
        className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-gold/10 animate-float hidden sm:block"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container relative z-10 text-center text-white px-4 sm:px-6">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 drop-shadow-md"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p 
            className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  )
}
