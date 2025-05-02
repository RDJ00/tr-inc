"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Music } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function DiningWithTheQueenPage() {
  return (
    <>
      <PageHeader
        title="Dining with the Queen"
        description="An Elegant Fundraiser Supporting Abused Children"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  "Dining with the Queen" was an elegant fundraising dinner hosted by Jacqueline Sinclair to 
                  support children who have experienced abuse. The sophisticated evening created an atmosphere 
                  of both refinement and compassion, bringing together supporters committed to making a 
                  difference in the lives of vulnerable children in our community.
                </p>
                
                <p className="text-navy/70 mb-6">
                  The event was highlighted by the presence of special guest 2nd Chance, a renowned gospel artist 
                  whose powerful performances added an inspiring dimension to the evening. Guests enjoyed an 
                  exceptional fine dining experience at the Midland 8 Clubhouse while contributing to essential 
                  programs that provide vital services, resources, and support for children who have experienced 
                  abuse and trauma.
                </p>
                
                <p className="text-navy/70 mb-6">
                  Funds raised during this special evening directly supported therapeutic services, educational 
                  resources, and safe environments for children healing from abuse. The elegant affair not only 
                  raised critical funds but also increased awareness about the ongoing needs of these children 
                  and celebrated the community's commitment to protecting and nurturing those most vulnerable.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> July 30, 2022
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Location:</span> Midland 8 Clubhouse
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Music className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Special Guest:</span> 2nd Chance, Gospel Artist
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Fundraiser",
                      "Child Abuse Prevention",
                      "Children's Services",
                      "Community Support",
                      "Charity Dinner",
                      "Gospel Music",
                      "Child Welfare"
                    ].map((tag, index) => (
                      <Badge key={index} className="bg-gold/80 hover:bg-gold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <div className="sticky top-24">
                  <div className="overflow-hidden">
                    <div className="relative w-full h-auto" style={{ minHeight: "500px" }}>
                      <Image
                        src="/events/webp/dining-with-the-queen-flyer.webp"
                        alt="Dining with the Queen Fundraiser"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
} 