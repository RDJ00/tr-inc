"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, Building } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function ReachingUpOut2024Page() {
  return (
    <>
      <PageHeader
        title="Reaching Up Out 2024 Edition"
        description="A Collaborative Summit for Healing and Empowerment"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  The Reaching Up Out 2024 Edition was a powerful collaborative summit bringing together three 
                  impactful organizations: Hope and Destiny Foundation, A Collision with Purpose, and Touch and 
                  Restored Foundation. This significant event created a space for healing, empowerment, and 
                  community support specifically focused on survivors of abuse and trauma.
                </p>
                
                <p className="text-navy/70 mb-6">
                  Distinguished speakers including Dr. Laxley W. Stephenson, Jacqueline Sinclair, Donna L Thompson, 
                  Claudy Eugene, and Trudy McBean shared valuable insights, personal testimonies, and practical 
                  strategies for recovery and growth. Through meaningful connections and collaborative efforts, 
                  the summit strengthened our collective mission to reach out and lift up those affected by trauma, 
                  creating pathways toward healing and restoration.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> May 2024
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Speakers:</span> 
                        <ul className="mt-1 ml-4 list-disc">
                          <li>Dr. Laxley W. Stephenson</li>
                          <li>Jacqueline Sinclair</li>
                          <li>Donna L Thompson</li>
                          <li>Claudy Eugene</li>
                          <li>Trudy McBean</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Building className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Organizing Partners:</span> 
                        <ul className="mt-1 ml-4 list-disc">
                          <li>Hope and Destiny Foundation</li>
                          <li>A Collision with Purpose</li>
                          <li>Touch and Restored Foundation</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Healing",
                      "Empowerment",
                      "Trauma Recovery",
                      "Community Support",
                      "Collaboration",
                      "Abuse Awareness",
                      "Restoration",
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
                        src="/events/webp/reaching-up-out-flyer.webp"
                        alt="Reaching Up Out 2024 Edition"
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