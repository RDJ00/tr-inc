"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Gift, Award } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function LadiesInHatFundraiserPage() {
  return (
    <>
      <PageHeader
        title="Ladies in HAT Back to School Fundraiser"
        description="Supporting Children Affected by Domestic Violence"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  Our elegant Ladies in HAT (Helping And Teaching) Back to School Fundraiser combined style 
                  with purpose, bringing the community together to support children affected by domestic violence. 
                  The event featured a delightful fashion show highlighting beautiful hat designs, exciting raffles, 
                  and special prizes for the most creative and elegant hats. Attendees enjoyed an afternoon of 
                  sophistication and philanthropy, with all proceeds directed toward providing essential school 
                  supplies and educational resources for children in need.
                </p>
                
                <p className="text-navy/70 mb-6">
                  This fundraiser helped children start the academic year with confidence and the tools needed to 
                  succeed, while also raising awareness about the specific challenges faced by children who have 
                  experienced domestic violence. The event embodied our commitment to ensuring that every child has 
                  the opportunity to thrive in their educational journey regardless of their circumstances.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Event Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Date:</span> August 3, 2024
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Highlights:</span> 
                        <ul className="mt-1 ml-4 list-disc">
                          <li>Fashion show featuring elegant hat designs</li>
                          <li>Prizes for most creative and stylish hats</li>
                          <li>Raffles and community fellowship</li>
                        </ul>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Gift className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Purpose:</span> Providing school supplies and educational resources for children affected by domestic violence
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Topics</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Fundraiser",
                      "Back to School",
                      "Children Support",
                      "Domestic Violence Awareness",
                      "Community Event",
                      "Fashion",
                      "Education"
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
                        src="/events/webp/ladies-in-hat-flyer.webp"
                        alt="Ladies in HAT Back to School Fundraiser"
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