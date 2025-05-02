"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function BrokenToBeMendedConferencePage() {
  return (
    <>
      <PageHeader
        title="5th Annual Broken to Be Mended Conference"
        description="Touch & Restored Foundation"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  The 5th Annual Broken to Be Mended Conference was a landmark event hosted by Touch & Restored Foundation.
                  Led by Jacqueline Bonner Sinclair with Evangelist Marcia Baker as moderator, the conference featured 
                  powerful speakers including Pastor Paula Miller and Yvonne Shirley. This gathering created a safe, 
                  supportive space for healing, sharing personal journeys, and discovering pathways to restoration.
                  Attendees experienced an inspiring evening of connection, empowerment, and renewed hope.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> January 22, 2022
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Key Participants:</span> 
                        <ul className="mt-1 ml-4 list-disc">
                          <li>Host: Jacqueline Bonner Sinclair</li>
                          <li>Moderator: Evangelist Marcia Baker</li>
                          <li>Speakers: Pastor Paula Miller, Yvonne Shirley</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Theme:</span> Broken to Be Mended
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Healing",
                      "Restoration",
                      "Faith",
                      "Empowerment",
                      "Recovery",
                      "Trauma",
                      "Community Support",
                      "Personal Growth"
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
                        src="/events/webp/broken-to-be-mended.webp"
                        alt="5th Annual Broken to Be Mended Conference"
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