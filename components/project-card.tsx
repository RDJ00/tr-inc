"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ButtonConfig {
  text: string
  link: string
  primary?: boolean
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  date?: string
  time?: string
  buttonText?: string
  buttonLink?: string
  buttons?: ButtonConfig[]
  isPast?: boolean
  tags?: string[]
  className?: string
}

export function ProjectCard({
  title,
  description,
  image,
  date,
  time,
  buttonText = "Learn More",
  buttonLink = "#",
  buttons,
  isPast = false,
  tags = [],
  className = "",
}: ProjectCardProps) {
  return (
    <Card className={`border-none shadow-md overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] flex flex-col h-full ${className}`}>
      <div className="relative aspect-video overflow-hidden flex-shrink-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      <div className="flex flex-col flex-grow">
        <CardHeader className="pb-2 flex-shrink-0">
          {date && (
            <div className="flex items-center gap-2 text-gold mb-2">
              <Calendar className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm font-medium truncate">
                {date}
                {time && ` • ${time}`}
              </span>
            </div>
          )}
          <CardTitle className="text-xl text-navy line-clamp-2">{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-4 flex-grow overflow-hidden">
          <p className="text-navy/70 line-clamp-4 md:line-clamp-3">{description}</p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 mt-auto pt-2">
          {buttons ? (
            // Render multiple buttons if provided
            buttons.map((button, index) => (
              <Link key={index} href={button.link} className="flex-1 min-w-24">
                <Button 
                  className={button.primary !== false 
                    ? "bg-gold hover:bg-gold-dark text-white w-full" 
                    : "bg-navy/10 hover:bg-navy/20 text-navy w-full"
                  }
                >
                  {button.text}
                </Button>
              </Link>
            ))
          ) : (
            // Backward compatibility for single button
            <Link href={buttonLink} className="w-full sm:w-auto">
              <Button className="bg-gold hover:bg-gold-dark text-white w-full sm:w-auto">{buttonText}</Button>
            </Link>
          )}
        </CardFooter>
      </div>
    </Card>
  )
}
