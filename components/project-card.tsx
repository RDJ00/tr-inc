"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  date?: string
  time?: string
  location?: string
  buttonText?: string
  buttonLink?: string
  isPast?: boolean
  tags?: string[]
}

export function ProjectCard({
  title,
  description,
  image,
  date,
  time,
  location,
  buttonText = "Learn More",
  buttonLink = "#",
  isPast = false,
  tags = [],
}: ProjectCardProps) {
  return (
    <Card className="border-none shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isPast && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#0A1E39]/80 hover:bg-[#0A1E39]">Past Event</Badge>
          </div>
        )}
        {tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-[#C79C4A]/80 hover:bg-[#C79C4A]">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="space-y-2">
          {date && (
            <div className="flex items-center gap-2 text-[#C79C4A]">
              <Calendar className="h-4 w-4" />
              <span className="text-sm font-medium truncate">
                {date}
                {time && ` • ${time}`}
              </span>
            </div>
          )}
          {location && (
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm truncate">{location}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-xl text-[#0A1E39] line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={buttonLink} className="w-full sm:w-auto">
          <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white w-full sm:w-auto">{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
