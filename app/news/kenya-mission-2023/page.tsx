"use client"

import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Globe, HeartHandshake } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function KenyaMission2023Page() {
  return (
    <>
      <PageHeader
        title="Kenya Mission 2023"
        description="Empowering Girls to Stay in School"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-navy">Overview</h2>
                <p className="text-navy/70 mb-6">
                  Hope and Destiny Foundation's Kenya Mission 2023 focused on addressing a crucial but often 
                  overlooked barrier to education for young women: access to sanitary products. Through the 
                  successful "1 pad keep a girl in school" campaign, the mission team worked diligently to 
                  provide essential sanitary pads and support to girls in Kenya, helping them stay in school 
                  during their monthly cycles.
                </p>
                
                <p className="text-navy/70 mb-6">
                  This important initiative recognized that many girls in developing regions miss school days 
                  or drop out entirely due to lack of menstrual products and facilities. By distributing these 
                  essential supplies and providing education about menstrual health, the mission helped break 
                  down significant barriers to education for young women, empowering them to continue their 
                  education without interruption or shame.
                </p>
                
                <p className="text-navy/70 mb-6">
                  The Kenya Mission 2023 was made possible by the generous support of Money Mastery for Her 
                  Mission and numerous individual donors from our wider community who recognized the profound 
                  impact of this simple but essential support for girls' education and future opportunities.
                </p>

                <div className="bg-tan-light/50 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 text-navy">Mission Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CalendarDays className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Year:</span> 2023
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Globe className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Location:</span> Kenya
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <HeartHandshake className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-navy">Partners:</span> Money Mastery for Her Mission and community donors
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-navy">Impact Areas</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Global Missions",
                      "Girls' Education",
                      "Menstrual Health",
                      "Kenya",
                      "School Support",
                      "Gender Equity",
                      "Community Development",
                      "International Aid"
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
                        src="/events/webp/kenya-mission-2023-flyer.webp"
                        alt="Kenya Mission 2023"
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