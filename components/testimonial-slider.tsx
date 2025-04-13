"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  title: string
  image?: string
}

export function TestimonialSlider() {
  const testimonials: Testimonial[] = [
    {
      quote:
        "Touch & Restored gave me the support and resources I needed to rebuild my life after years of abuse. Their compassionate approach made all the difference in my healing journey.",
      name: "Sarah M.",
      title: "Survivor",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The children's program helped my kids process their trauma in a safe, supportive environment. I've seen such positive changes in their behavior and emotional well-being.",
      name: "Michael T.",
      title: "Parent",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "As a volunteer, I've witnessed firsthand the incredible impact this organization has on survivors. The dedication of the staff and the comprehensive approach to healing is truly inspiring.",
      name: "Jennifer L.",
      title: "Volunteer",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const next = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  const prev = () => {
    if (!isAnimating) {
      setIsAnimating(true)
      setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
      setTimeout(() => setIsAnimating(false), 500)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative bg-tan-light p-8 md:p-12 rounded-xl shadow-md overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 text-gold/10">
        <Quote size={120} />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Voices of Impact</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full border-gold/30 hover:border-gold hover:bg-gold/10"
            >
              <ChevronLeft className="h-5 w-5 text-gold" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full border-gold/30 hover:border-gold hover:bg-gold/10"
            >
              <ChevronRight className="h-5 w-5 text-gold" />
            </Button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[250px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-500 ${
                index === current
                  ? "opacity-100 translate-x-0"
                  : index < current
                    ? "opacity-0 -translate-x-full"
                    : "opacity-0 translate-x-full"
              }`}
            >
              <div className="testimonial-quote text-lg md:text-xl text-navy/80 italic mb-8">{testimonial.quote}</div>
              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-gold/30">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-navy/70">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
