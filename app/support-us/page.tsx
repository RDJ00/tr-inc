import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"

export default function SupportUsPage() {
  return (
    <>
      <PageHeader title="Support Us" description="Join us in making a difference in the lives of survivors" />

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">Get Involved</h2>
              <p className="text-muted-foreground mb-8">
                Your support makes our work possible. Whether through volunteering, donating, or spreading awareness,
                every contribution helps us provide essential services to survivors of domestic violence, trauma, and
                abuse. Together, we can create a community where everyone lives free from violence and has the resources
                they need to heal and thrive.
              </p>
              <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">See Our Events</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#F6EFD6]">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Let's Make A Change</h2>
            <p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
              Your financial support directly funds our programs and services for survivors. Every contribution, no
              matter the size, makes a meaningful difference in the lives of those we serve.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Via Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Please make checks payable to "Touch & Restored Inc." and mail to:
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <p className="text-sm">
                      Touch & Restored Inc.
                      <br />
                      123 Healing Way, Suite 101
                      <br />
                      Anytown, ST 12345
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Online</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Make a secure online donation through our website. You can choose to make a one-time gift or set up
                    recurring monthly donations.
                  </p>
                  <Button className="w-full bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Donate Now</Button>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-xl text-[#0A1E39]">Cash App</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Send your donation directly through Cash App to our organization:
                  </p>
                  <div className="bg-white p-4 rounded-lg text-center">
                    <p className="text-lg font-bold mb-2">$JacquelineSSinclair</p>
                    <p className="text-sm text-muted-foreground">Please include "Donation" in the memo</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="volunteer" className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-[#0A1E39]">Volunteer Opportunities</h2>
                <p className="text-muted-foreground mb-6">
                  Our volunteers are the heart of our organization. We offer a variety of volunteer opportunities that
                  match different skills, interests, and availability. All volunteers receive comprehensive training and
                  ongoing support.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Crisis Line Advocates",
                    "Children's Program Assistants",
                    "Court Accompaniment Volunteers",
                    "Administrative Support",
                    "Community Education & Outreach",
                    "Special Events & Fundraising",
                    "Professional Services (Legal, Medical, Mental Health)",
                  ].map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#C79C4A] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-white"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{opportunity}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Become a Volunteer</Button>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Volunteers working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#0A1E39] text-white">
        <div className="container">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Corporate & Community Partnerships</h2>
              <p className="mb-8">
                We partner with businesses, faith communities, schools, and other organizations to expand our reach and
                impact. Partnership opportunities include:
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-[#C79C4A]">Sponsorships</h3>
                  <p className="text-sm">
                    Sponsor an event, program, or service to help fund our work while gaining visibility for your
                    organization.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-[#C79C4A]">In-Kind Donations</h3>
                  <p className="text-sm">
                    Donate goods, services, or expertise to support our operations and the needs of survivors.
                  </p>
                </div>
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="font-bold text-xl mb-3 text-[#C79C4A]">Workplace Giving</h3>
                  <p className="text-sm">
                    Set up employee giving programs, matching gifts, or volunteer days to engage your team in our
                    mission.
                  </p>
                </div>
              </div>
              <Button className="bg-white text-[#0A1E39] hover:bg-white/90">Become a Partner</Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
