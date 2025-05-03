"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

interface TeamMemberCardProps {
  name: string
  title: string
  bio: string
  image: string
}

export function TeamMemberCard({ name, title, bio, image }: TeamMemberCardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden transition-all duration-300 w-full max-w-[320px] flex flex-col">
      {/* Image section - increased height and adjusted object positioning */}
      <div className="relative h-[280px] w-full">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={`${name}, ${title}`}
          fill 
          className="object-cover object-top" 
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      {/* Content section */}
      <div className="p-4 sm:p-5 bg-white flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-[#0A1E39]">{name}</h3>
        <p className="text-[#C79C4A] font-medium mb-3 text-sm sm:text-base">{title}</p>
        {bio && (
          <p className="text-muted-foreground text-sm sm:text-base">
            {bio}
          </p>
        )}
      </div>
    </Card>
  )
}
