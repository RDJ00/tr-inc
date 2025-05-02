"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { HandHeart, Calendar, Clock, MapPin, Heart, ArrowRight } from "lucide-react"

export default function KenyaOutreach2025Page() {
  return (
    <>
      <PageHeader
        title="A Collision With Purpose: 2025 Kenya Outreach"
        description="Join our transformative mission to empower lives and communities in Kenya"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge className="bg-gold hover:bg-gold">Global Missions</Badge>
                  <Badge className="bg-purple hover:bg-purple text-white">Outreach</Badge>
                  <Badge className="bg-navy hover:bg-navy text-white">Humanitarian</Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                  A Collision With Purpose: 2025 Kenya Outreach
                </h1>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center gap-2 text-navy/70">
                    <Calendar className="h-5 w-5 text-gold" />
                    <span>June 6th-20th, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-navy/70">
                    <MapPin className="h-5 w-5 text-gold" />
                    <span>Kenya</span>
                  </div>
                </div>
                
                <div className="prose max-w-none prose-headings:text-navy prose-p:text-navy/80 mb-8">
                  <h2>Mission Overview</h2>
                  <p>
                    In 2025, the Kenya Outreach Initiative is set to make a transformative impact in the community by addressing critical needs and fostering hope. Our dedicated team will work on multiple fronts to improve lives and create lasting positive change.
                  </p>
                  
                  <h2>Key Initiatives</h2>
                  <ul>
                    <li>
                      <strong>Construction of vital toilets</strong> to enhance sanitation and improve health outcomes for children
                    </li>
                    <li>
                      <strong>Distribution of clothing and dental care packages</strong> to uplift the most vulnerable members of the community
                    </li>
                    <li>
                      <strong>Tree planting</strong> to bolster nature conservation efforts, promoting a greener and more sustainable future
                    </li>
                    <li>
                      <strong>Visiting cancer fighters</strong>, offering support and solidarity to those bravely facing their battles
                    </li>
                  </ul>
                  
                  <h2>Join Our Compassionate Mission</h2>
                  <p>
                    We invite you to be part of this compassionate mission to empower lives, nurture the environment, and spread kindness throughout the community. Your support, whether through donations, prayers, or spreading awareness, will help us make a meaningful difference.
                  </p>
                  
                  <h2>How Your Support Helps</h2>
                  <p>
                    Your donations will directly fund:
                  </p>
                  <ul>
                    <li>Building materials for sanitation facilities</li>
                    <li>Essential clothing and personal care items</li>
                    <li>Dental care packages for children and families</li>
                    <li>Saplings and gardening tools for environmental initiatives</li>
                    <li>Support packages for cancer patients</li>
                    <li>Transportation and logistics during the mission</li>
                  </ul>
                  
                  <h2>A Personal Request from Dr. Jacqueline Bonner Sinclair</h2>
                  <p>
                    "I humbly ask for your sponsorship to support this life-changing mission. Together, we can bring hope, healing, and sustainable solutions to communities in need."
                  </p>
                  
                  <h2>Donation Methods</h2>
                  <p>
                    <strong>CashApp:</strong> <span className="text-gold">$jbs1714j</span><br />
                    <strong>Zelle:</strong> <span className="text-gold">954-673-3506</span>
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button className="bg-gold hover:bg-gold-dark text-white" asChild>
                    <Link href="https://cash.app/$jbs1714j" target="_blank" rel="noopener noreferrer">
                      Donate via CashApp <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button className="bg-purple hover:bg-purple-dark text-white" onClick={() => window.location.href = 'mailto:info@touchandrestoredfoundation.org?subject=Kenya%20Outreach%202025%20-%20Inquiry'}>
                    Contact About Sponsorship <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="bg-tan-light p-6 rounded-lg border border-gold/20 mb-8">
                  <h3 className="text-xl font-bold text-navy mb-4 flex items-center">
                    <Heart className="h-5 w-5 text-gold mr-2" /> Ways to Get Involved
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <HandHeart className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                      <span className="text-navy/80">Make a financial donation to support specific initiatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HandHeart className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                      <span className="text-navy/80">Donate supplies or resources needed for the mission</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HandHeart className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                      <span className="text-navy/80">Spread awareness about our mission on social media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <HandHeart className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                      <span className="text-navy/80">Organize a fundraising event in your community</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 space-y-6">
                <div className="rounded-xl overflow-hidden border border-gold/20 shadow-lg">
                  <Image 
                    src="/kenya-outreach-flyer.jpeg" 
                    alt="Kenya Outreach 2025 Initiative" 
                    width={800} 
                    height={1000}
                    className="w-full object-cover"
                  />
                </div>
                
                <Card className="p-6 bg-white border border-gold/20 shadow-md">
                  <h3 className="text-xl font-bold text-navy mb-4">Quick Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Calendar className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Date</div>
                        <div className="text-navy/70">June 6th-20th, 2025</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Duration</div>
                        <div className="text-navy/70">Two weeks of active outreach</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-1" />
                      <div>
                        <div className="font-medium text-navy">Location</div>
                        <div className="text-navy/70">Various communities across Kenya</div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 bg-gradient-to-br from-purple/10 to-gold/10 border border-gold/20 shadow-md">
                  <h3 className="text-xl font-bold text-navy mb-4">Contact the Organizer</h3>
                  <p className="text-navy/80 mb-4">
                    For more information about the Kenya Outreach or to discuss sponsorship opportunities, please get in touch with Dr. Jacqueline Bonner Sinclair.
                  </p>
                  <Button className="w-full bg-navy hover:bg-navy/80 text-white" asChild>
                    <Link href="/contact?subject=Kenya%20Outreach%202025">
                      Contact Us About This Mission
                    </Link>
                  </Button>
                </Card>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      
      <section className="py-16 bg-tan-light">
        <div className="container px-4 md:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-navy mb-4">Make a Difference</h2>
              <p className="text-navy/70">
                Your support enables us to bring essential services and sustainable solutions to communities in Kenya. Every donation, no matter the size, contributes to our mission of empowerment and transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="p-6 bg-white border border-gold/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-navy mb-2">$25</h3>
                <p className="text-navy/70 mb-4">Provides dental care packages for 5 children</p>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white" asChild>
                  <Link href="https://cash.app/$jbs1714j" target="_blank" rel="noopener noreferrer">
                    Donate $25
                  </Link>
                </Button>
              </Card>
              
              <Card className="p-6 bg-white border border-gold/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-navy mb-2">$50</h3>
                <p className="text-navy/70 mb-4">Funds planting of 10 trees for environmental restoration</p>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white" asChild>
                  <Link href="https://cash.app/$jbs1714j" target="_blank" rel="noopener noreferrer">
                    Donate $50
                  </Link>
                </Button>
              </Card>
              
              <Card className="p-6 bg-white border border-gold/20 hover:shadow-lg transition-all">
                <h3 className="text-xl font-bold text-navy mb-2">$100</h3>
                <p className="text-navy/70 mb-4">Contributes to building materials for sanitation facilities</p>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white" asChild>
                  <Link href="https://cash.app/$jbs1714j" target="_blank" rel="noopener noreferrer">
                    Donate $100
                  </Link>
                </Button>
              </Card>
            </div>
            
            <div className="text-center mt-8">
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white" asChild>
                <Link href="https://cash.app/$jbs1714j" target="_blank" rel="noopener noreferrer">
                  Make a Custom Donation
                </Link>
              </Button>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
} 