"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, MapPin, DollarSign } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function PrayerBreakfastPage() {
  return (
    <>
      <PageHeader
        title="Prayer Breakfast"
        description="Pray Bold (Hebrews 4:16)"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  Join us for a morning of faith, food, and fellowship at our special Prayer Breakfast event. 
                  Centered around the theme "Pray Bold" (Hebrews 4:16), this gathering offers an opportunity 
                  to connect with God and like-minded individuals for uplifting, spiritual refreshment.
                </p>
                
                <p className="text-navy/70 mb-6">
                  This enriching event is hosted by Honorable Jaqueline Sinclaire and Pastor Pratt Brown, featuring 
                  distinguished speakers including Apostle Dr. K. Lyle, Prophetess Sausha McDonald, and Guest Speaker 
                  Apostle Margaret Thompson. Together, they will guide attendees through a powerful morning of 
                  prayer, inspiration, and community building. Come expecting to be blessed and empowered!
                </p>
                
                <p className="text-navy/70 mb-6 font-medium italic">
                  Tickets are $25 per person. Payment will be accepted at the event.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> May 24, 2024
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Time:</span> 10:00 AM
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Location:</span> Transformation Ministries, 4987 N University Drive, Lauderhill, FL 33351
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Admission:</span> $25 per person (payable at the event)
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Featured Participants</h3>
                  <ul className="space-y-2 list-disc pl-5 text-navy/70">
                    <li><span className="font-medium">Hosts:</span> Hon. Jaqueline Sinclaire & Pastor Pratt Brown</li>
                    <li><span className="font-medium">Speakers:</span> Apostle Dr. K. Lyle, Prophetess Sausha McDonald</li>
                    <li><span className="font-medium">Guest Speaker:</span> Apostle Margaret Thompson</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Prayer",
                      "Faith",
                      "Fellowship",
                      "Spiritual Growth",
                      "Hebrews 4:16",
                      "Community",
                      "Breakfast"
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
                        src="/events/webp/prayer-breakfast-flyer.webp"
                        alt="Prayer Breakfast Event"
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