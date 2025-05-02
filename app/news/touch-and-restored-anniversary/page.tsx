"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function TouchAndRestoredAnniversaryPage() {
  return (
    <>
      <PageHeader
        title="Touch & Restored 6th Anniversary"
        description="Broken But Not Beyond Repair"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  Touch & Restored Foundation's 6th Anniversary celebrated with the "Broken But Not Beyond Repair" 
                  Women Empowerment Conference. This powerful gathering featured host Jacqueline Sinclair alongside 
                  distinguished speakers including Apostle Margaret Thompson, Rev. Maria Hinds, Lady Yvonne Shirley, 
                  Pastor K. Lyle, and Evangelist Marcia Baker. Together, they shared messages of hope, healing, and 
                  divine restoration, grounded in the promise of Romans 8:28.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> January 24, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Speakers:</span> Jacqueline Sinclair, Apostle Margaret Thompson, Rev. Maria Hinds, Lady Yvonne Shirley, Pastor K. Lyle, Evangelist Marcia Baker
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Theme:</span> "Broken But Not Beyond Repair" (Romans 8:28)
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
                      "Women's Conference",
                      "Faith",
                      "Restoration",
                      "Anniversary",
                      "Romans 8:28"
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
                        src="/events/webp/touch-and-restored-flyer.webp"
                        alt="Touch & Restored 6th Anniversary: Broken But Not Beyond Repair"
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