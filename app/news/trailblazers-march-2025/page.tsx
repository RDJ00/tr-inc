"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Clock, Youtube } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function TrailblazersMarch2025Page() {
  return (
    <>
      <PageHeader
        title="Trailblazers Talk Show – March 2025"
        description="Minister Jacqueline Sinclair"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  This episode of the Trailblazers Talk Show for Christ, aired on March 8, 2025, featured guest 
                  Minister Jacqueline Sinclair and host Latoya Edwards. Together, they explored topics of real 
                  faith, personal stories of grace, and Christ-centered encouragement.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> Saturday, March 8, 2025
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Time:</span> 12 PM EST
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Youtube className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Platform:</span> YouTube Live
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Watch Replay</h3>
                  <Link href="https://www.youtube.com/@Trailblazers4christ" target="_blank">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      <Youtube className="h-4 w-4 mr-2" />
                      Trailblazers4christ on YouTube
                    </Button>
                  </Link>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Faith",
                      "Testimony",
                      "Christian Women",
                      "Trailblazers",
                      "Grace",
                      "Leadership",
                      "Ministry",
                      "Talk Show"
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
                        src="/events/trailblazers-talk-show-flyer.jpeg"
                        alt="Trailblazers Talk Show for Christ – March 2025"
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