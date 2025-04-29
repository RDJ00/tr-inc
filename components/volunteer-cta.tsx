// Create a new component for the volunteer CTA section

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Users, Check, Heart, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { VolunteerModal } from "@/components/volunteer-modal"

export function VolunteerCTA() {
  const [activeTab, setActiveTab] = useState<"opportunities" | "benefits" | "requirements">("opportunities")

  const tabs = [
    { id: "opportunities", label: "Opportunities", icon: <Users className="h-4 w-4" /> },
    { id: "benefits", label: "Benefits", icon: <Heart className="h-4 w-4" /> },
    { id: "requirements", label: "Requirements", icon: <Check className="h-4 w-4" /> },
  ]

  const opportunities = [
    { title: "Crisis Line Advocate", description: "Provide support and resources to callers in crisis." },
    {
      title: "Children's Program Assistant",
      description: "Help facilitate activities and support for children who have experienced trauma.",
    },
    {
      title: "Community Outreach",
      description: "Represent our organization at community events and help raise awareness.",
    },
    {
      title: "Administrative Support",
      description: "Assist with office tasks, data entry, and organizational projects.",
    },
  ]

  const benefits = [
    "Comprehensive training in trauma-informed care",
    "Flexible scheduling to accommodate your availability",
    "Professional development opportunities",
    "The chance to make a meaningful difference in survivors' lives",
    "Being part of a supportive, dedicated community",
  ]

  const requirements = [
    "Must be 18 years or older",
    "Complete a background check",
    "Attend required training sessions",
    "Commit to at least 4 hours per month for a minimum of 6 months",
    "Maintain confidentiality and adhere to our code of conduct",
  ]

  return (
    <div className="bg-tan p-8 md:p-12 rounded-xl shadow-lg relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-purple/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gold/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-navy relative inline-block brush-stroke">
            Join Our Volunteer Team
          </h2>
          <p className="text-navy/70 max-w-2xl mx-auto">
            Our volunteers are the heart of our organization. We offer a variety of volunteer opportunities that match
            different skills, interests, and availability.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="relative h-full rounded-lg overflow-hidden shadow-md">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Volunteers working together"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="bg-white/90 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gold mb-2">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">Next Training: June 15, 2025</span>
                  </div>
                  <p className="text-navy/80 text-sm">
                    All new volunteers receive comprehensive training to prepare them for their role.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex border-b border-tan mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-colors relative ${
                      activeTab === tab.id ? "text-gold" : "text-navy/60 hover:text-navy"
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                    {activeTab === tab.id && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"></span>}
                  </button>
                ))}
              </div>

              <div className="min-h-[300px]">
                {activeTab === "opportunities" && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-navy mb-4">Volunteer Opportunities</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {opportunities.map((opportunity, index) => (
                        <div key={index} className="bg-tan-light p-4 rounded-lg">
                          <h4 className="font-medium text-navy">{opportunity.title}</h4>
                          <p className="text-sm text-navy/70 mt-1">{opportunity.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "benefits" && (
                  <div>
                    <h3 className="text-lg font-medium text-navy mb-4">Volunteer Benefits</h3>
                    <ul className="space-y-3">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-gold" />
                          </div>
                          <span className="text-navy/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "requirements" && (
                  <div>
                    <h3 className="text-lg font-medium text-navy mb-4">Volunteer Requirements</h3>
                    <ul className="space-y-3">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="h-3 w-3 text-purple" />
                          </div>
                          <span className="text-navy/80">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 text-center">
                <VolunteerModal>
                  <Button className="bg-purple hover:bg-purple-dark text-white px-8 py-6 text-lg font-medium rounded-md transition-all duration-300 hover:shadow-lg">
                    <Users className="mr-2 h-5 w-5" />
                    Apply to Volunteer
                  </Button>
                </VolunteerModal>
                <p className="text-xs text-navy/60 mt-2">
                  Applications are reviewed on a rolling basis. We'll contact you within 5 business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
