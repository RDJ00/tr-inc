"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { useState } from "react"

interface TeamMemberCardProps {
  name: string
  title: string
  bio: string
  image: string
}

export function TeamMemberCard({ name, title, bio, image }: TeamMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isTouched, setIsTouched] = useState(false)

  // Handle both hover for desktop and touch for mobile
  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => setIsHovered(false)
  const handleTouchStart = () => setIsTouched(!isTouched)

  // Content is shown either on hover or touch
  const isContentVisible = isHovered || isTouched

  return (
    <Card
      className="border-none shadow-md overflow-hidden transition-all duration-300 h-[350px] sm:h-[380px] md:h-[400px] w-full max-w-[320px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleTouchStart}
    >
      <div className="relative h-full w-full">
        {/* Image */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isContentVisible ? "opacity-20" : "opacity-100"
          }`}
        >
          <Image 
            src={image || "/placeholder.svg"} 
            alt={`${name}, ${title}`}
            fill 
            className="object-cover" 
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        {/* Content overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-4 sm:p-6 transition-all duration-500 ease-in-out ${
            isContentVisible ? "translate-y-0" : "translate-y-[calc(100%-80px)]"
          }`}
        >
          <div className="bg-white/90 -mx-4 sm:-mx-6 -mb-4 sm:-mb-6 p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#0A1E39]">{name}</h3>
            <p className="text-[#C79C4A] font-medium mb-2 sm:mb-4 text-sm sm:text-base">{title}</p>
            <p
              className={`text-muted-foreground text-sm sm:text-base transition-opacity duration-500 ${
                isContentVisible ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
              }`}
            >
              {bio}
            </p>
          </div>
        </div>
      </div>
    </Card>
  )
}
