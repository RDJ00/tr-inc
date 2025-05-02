"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Users, ShieldAlert } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function NoSecretsAnniversaryPage() {
  return (
    <>
      <PageHeader
        title="No Secrets! 1st Anniversary"
        description="Breaking the Silence on Domestic Violence"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  The T.O.U.C.H. Foundation's 1st Anniversary event, "No Secrets!", marked an important milestone 
                  in our organization's journey while bringing the community together for a powerful stand against 
                  domestic violence. Hosted by Jacqueline Sinclair, this significant gathering created a safe space 
                  for education, awareness, and action against the silent epidemic of abuse that affects countless 
                  individuals across our communities.
                </p>
                
                <p className="text-navy/70 mb-6">
                  The event featured inspiring talks from advocates and survivors, sharing personal stories of 
                  courage and resilience that illuminated the realities of domestic violence while offering hope 
                  to those still suffering in silence. Attendees received practical resources, information, and 
                  training designed to empower them to recognize signs of abuse, support those experiencing violence, 
                  and help eradicate domestic violence in their own lives and communities.
                </p>
                
                <p className="text-navy/70 mb-6">
                  By breaking the silence around domestic violence and challenging the culture of secrecy that 
                  often surrounds it, the "No Secrets!" anniversary celebration embodied our organization's core 
                  mission of bringing healing and restoration to survivors while working proactively to prevent 
                  future abuse through education, awareness, and community action.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> January 19, 2018
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Host:</span> Jacqueline Sinclair
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <ShieldAlert className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Focus:</span> Domestic Violence Awareness and Prevention
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Domestic Violence",
                      "Abuse Prevention",
                      "Survivor Support",
                      "Community Education",
                      "Advocacy",
                      "Awareness",
                      "Anniversary",
                      "Healing"
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
                        src="/events/webp/no-secrets-flyer.webp"
                        alt="No Secrets! 1st Anniversary"
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