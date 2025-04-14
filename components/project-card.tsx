"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  date?: string
  time?: string
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
            <Badge className="bg-navy/80 hover:bg-navy">Past Event</Badge>
          </div>
        )}
        {tags.length > 0 && (
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} className="bg-gold/80 hover:bg-gold">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        {date && (
          <div className="flex items-center gap-2 text-gold mb-2">
            <Calendar className="h-4 w-4" />
            <span className="text-sm font-medium truncate">
              {date}
              {time && ` • ${time}`}
            </span>
          </div>
        )}
        <CardTitle className="text-xl text-navy line-clamp-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Link href={buttonLink} className="w-full sm:w-auto">
          <Button className="bg-gold hover:bg-gold-dark text-white w-full sm:w-auto">{buttonText}</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
