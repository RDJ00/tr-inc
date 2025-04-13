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

  return (
    <Card
      className="border-none shadow-md overflow-hidden transition-all duration-300 h-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full">
        {/* Image */}
        <div
          className={`absolute inset-0 transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-20" : "opacity-100"
          }`}
        >
          <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        </div>

        {/* Content overlay */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-500 ease-in-out ${
            isHovered ? "translate-y-0" : "translate-y-[calc(100%-80px)]"
          }`}
        >
          <div className="bg-white/90 -mx-6 -mb-6 p-6">
            <h3 className="text-xl font-bold text-[#0A1E39]">{name}</h3>
            <p className="text-[#C79C4A] font-medium mb-4">{title}</p>
            <p
              className={`text-muted-foreground transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0 h-0 overflow-hidden"
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
