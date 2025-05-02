"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, ShieldAlert } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function NoSecrets2019Page() {
  return (
    <>
      <PageHeader
        title="No Secrets: Standing Against Domestic Violence"
        description="A Red Carpet Evening for Awareness and Hope"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  "No Secrets: Standing Against Domestic Violence" was a powerful and elegant gathering dedicated 
                  to raising awareness and taking action against domestic abuse. The event combined sophistication 
                  with serious purpose, creating a dignified space for survivors, advocates, and supporters to 
                  come together in solidarity against domestic violence.
                </p>
                
                <p className="text-navy/70 mb-6">
                  Guests enjoyed walking the red carpet and participating in a formal banquet at POFITA, where 
                  the atmosphere of elegance was matched by the gravity of the cause. The evening featured 
                  powerful testimonies from survivors, informative presentations about the realities of domestic 
                  violence, and insights from advocates working on the frontlines to support those experiencing 
                  abuse.
                </p>
                
                <p className="text-navy/70 mb-6">
                  By combining formal celebration with education and awareness, the event successfully brought 
                  attention to a critical issue while fostering hope and community connection. Attendees left 
                  with greater understanding of domestic violence, equipped with resources to help others, and 
                  inspired to join the shared commitment to ending abuse in all its forms.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> January 19, 2019
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Location:</span> POFITA
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldAlert className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Format:</span> Red carpet affair and formal banquet
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Domestic Violence",
                      "Awareness",
                      "Advocacy",
                      "Community Support",
                      "Survivor Stories",
                      "Prevention",
                      "Education",
                      "Hope"
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
                        src="/events/webp/no-secrets-2019-flyer.webp"
                        alt="No Secrets: Standing Against Domestic Violence"
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