"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Heart, Calendar, Users, Shield, Lightbulb, HandHeart, Megaphone, ArrowRight, MapPin } from "lucide-react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { DonationCTA } from "@/components/donation-cta"
import { ImpactCounter } from "@/components/impact-counter"
import { VolunteerCTA } from "@/components/volunteer-cta"
import { motion } from "framer-motion"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/community-support.jpg"
            alt="Community support and empowerment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/70 to-navy/50 backdrop-blur-sm"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-purple/20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-48 h-48 rounded-full bg-gold/10 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4">
              <Image
                src="/tr-inc-logo.png"
                alt="Touch & Restored Logo"
                width={120}
                height={120}
                className="mx-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Soft Touch for the Abused & Displaced
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
              Providing support, healing, and empowerment to survivors of domestic violence, trauma, and abuse.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Button 
                  className="bg-gold hover:bg-gold-dark text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/contact">Get Help</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <Button 
                  className="bg-purple hover:bg-purple-dark text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="/support-us#volunteer">Volunteer</Link>
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <Button 
                  className="bg-navy hover:bg-navy/80 text-white transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                  asChild
                >
                  <Link href="#ways-to-give">Donate</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <ImpactCounter end={500} label="Survivors Supported" icon={<Heart className="h-6 w-6 text-gold" />} />
              <ImpactCounter end={30} label="Community Programs" icon={<Users className="h-6 w-6 text-gold" />} />
              <ImpactCounter end={75} label="Trained Volunteers" icon={<Shield className="h-6 w-6 text-gold" />} />
              <ImpactCounter end={6} label="Years of Service" icon={<Calendar className="h-6 w-6 text-gold" />} />
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission/Vision Section */}
      <section id="about" className="py-16 bg-tan relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy relative inline-block brush-stroke mx-auto">
              Our Purpose
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gold/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-gold" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    To bring normality to the lives of adults or children and families who feel displaced.
                  </p>
                  <div className="mt-4 p-4 bg-tan-light rounded-lg border border-gold/20">
                    <p className="text-navy/80 text-sm font-medium">
                      If you are in need of immediate help please call
                      <br />
                      <span className="text-purple font-bold">The National Domestic Violence hotline</span>
                      <br />
                      <a href="tel:8007997233" className="text-gold hover:underline">800-799-7233</a> or visit{" "}
                      <a href="https://www.hotline.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">
                        www.hotline.org
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white border border-gold/20">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-full bg-purple/20 flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-purple" />
                  </div>
                  <CardTitle className="text-2xl text-navy">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy/70">
                    To provide housing and care for abused and displaced adults and children with parents.
                  </p>
                </CardContent>
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-white relative">
        {/* Decorative pattern */}
        <div className="absolute inset-0 dot-pattern opacity-10"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy relative inline-block brush-stroke mx-auto">
              What We Do
            </h2>
            <p className="text-center text-navy/70 max-w-2xl mx-auto mb-12">
              Our comprehensive programs address the diverse needs of survivors at every stage of their healing journey.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Domestic Violence",
                  description:
                    "Providing crisis intervention, safety planning, and ongoing support for survivors of intimate partner violence to ensure immediate safety and long-term healing.",
                  icon: <Shield className="h-6 w-6 text-gold" />,
                  link: "/domestic-violence",
                  delay: 0.1
                },
                {
                  title: "Children & Trauma",
                  description:
                    "Age-appropriate therapy and support services for children who have witnessed or experienced trauma, helping them process experiences and build resilience.",
                  icon: <Users className="h-6 w-6 text-gold" />,
                  link: "/children-trauma",
                  delay: 0.2
                },
                {
                  title: "Sexual Assault",
                  description:
                    "Specialized care and advocacy for survivors of sexual violence, including crisis response, medical accompaniment, and trauma-informed counseling services.",
                  icon: <HandHeart className="h-6 w-6 text-gold" />,
                  link: "/sexual-assault",
                  delay: 0.3
                },
                {
                  title: "Client-Centered Practice (CCP)",
                  description:
                    "Individualized support plans that honor each survivor's unique needs, choices, and healing journey, ensuring every person feels heard, valued, and empowered.",
                  icon: <Heart className="h-6 w-6 text-gold" />,
                  link: "/client-centered-practice",
                  delay: 0.4
                },
                {
                  title: "Awareness & Action",
                  description:
                    "Community education and prevention programs aimed at ending the cycle of violence through increased awareness, bystander intervention, and systemic change.",
                  icon: <Megaphone className="h-6 w-6 text-gold" />,
                  link: "/awareness-and-action",
                  delay: 0.5
                },
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: program.delay }}
                >
                  <Card
                    className="border-none shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-tan-light h-full flex flex-col"
                  >
                    <CardHeader className="pb-3 border-b border-gold/10">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        {program.icon}
                      </div>
                      <CardTitle className="text-xl text-navy font-bold">{program.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="py-6 flex-grow">
                      <p className="text-navy/70">{program.description}</p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button 
                        variant="outline" 
                        className="w-full border-gold/50 text-gold hover:bg-gold hover:text-white hover:border-gold transition-all duration-300"
                        asChild
                      >
                        <Link
                          href={program.link}
                          className="flex items-center justify-center"
                        >
                          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-tan-light relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-gold/30 via-purple/20 to-gold/30"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-navy relative inline-block brush-stroke mx-auto">
              Events
            </h2>
            <p className="text-center text-navy/70 max-w-2xl mx-auto mb-12">
              Take a look at some of our events and the impact we've made together.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Prayer Breakfast",
                  description: "Join us for a morning of faith, food, and fellowship. Theme: Pray Bold (Hebrews 4:16). Hosted by Hon. Jaqueline Sinclaire & Pastor Pratt Brown, with Apostle Dr. K. Lyle, Prophetess Sausha McDonald, and Guest Speaker Apostle Margaret Thompson. $25 entry. Location: Transformation Ministries, 4987 N University Drive, Lauderhill, FL 33351.",
                  image: "/events/webp/prayer-breakfast-flyer.webp",
                  date: "May 24, 2024",
                  time: "10:00 AM",
                  buttonText: "$25 Tickets",
                  buttonLink: "#",
                },
                {
                  title: "Touch & Restored 6th Anniversary: Broken But Not Beyond Repair",
                  description: "Touch & Restored 6th Anniversary: 'Broken But Not Beyond Repair' Women Empowerment Conference. Join host Jacqueline Sinclair, Apostle Margaret Thompson, Rev. Maria Hinds, Lady Yvonne Shirley, Pastor K. Lyle, and Evangelist Marcia Baker for an inspiring celebration of healing and empowerment. Romans 8:28.",
                  image: "/events/webp/touch-and-restored-flyer.webp",
                  date: "January 24, 2025",
                  buttonText: "Event Details",
                  buttonLink: "#",
                },
                {
                  title: "Ladies in HAT Back to School Fundraiser",
                  description: "Our elegant fundraising event featured a fashion show, raffles, and prizes for best hats, bringing the community together to support children affected by domestic violence. Attendees enjoyed an afternoon of style and philanthropy, with all proceeds providing essential school supplies and resources to help children start the academic year with confidence and the tools needed to succeed.",
                  image: "/events/webp/ladies-in-hat-flyer.webp",
                  date: "August 3, 2024",
                  buttonText: "Event Details",
                  buttonLink: "#",
                },
              ].map((event, index) => (
                <ProjectCard
                  key={index}
                  title={event.title}
                  description={event.description}
                  image={event.image}
                  date={event.date}
                  time={event.time}
                  buttonText={event.buttonText}
                  buttonLink={event.buttonLink}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Donation CTA Section - Temporarily hidden until PayPal/Stripe integration
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollAnimation>
            <DonationCTA />
          </ScrollAnimation>
        </div>
      </section>
      */}

      {/* Volunteer CTA Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <ScrollAnimation>
            <VolunteerCTA />
          </ScrollAnimation>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section id="ways-to-give" className="py-16 bg-tan relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-navy relative inline-block brush-stroke">
                  There Are Plenty of Ways to Give
                </h2>
                <p className="text-navy/70">
                  Support doesn't always mean monetary donations. Our community thrives on collective healing and the
                  power of coming together. Every action, no matter how small, contributes to our mission of supporting
                  survivors.
                </p>
                <div className="space-y-6 mt-8">
                  {[
                    {
                      title: "Share Our Mission",
                      description:
                        "Help spread awareness by sharing our mission with friends, family, and on social media.",
                      icon: <Megaphone className="h-6 w-6 text-gold" />,
                    },
                    {
                      title: "Be Supportive & Encouraging",
                      description:
                        "Your words of encouragement and support can make a significant difference in someone's healing journey.",
                      icon: <Heart className="h-6 w-6 text-gold" />,
                    },
                    {
                      title: "Donate or Volunteer",
                      description:
                        "Whether it's your time, skills, or resources, your contributions are valued and appreciated.",
                      icon: <HandHeart className="h-6 w-6 text-gold" />,
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-4 group hover:bg-white/50 p-4 rounded-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/30 transition-all duration-300">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg text-navy mb-1">{item.title}</h3>
                        <p className="text-navy/70">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 text-center">Support Our Cause</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#00D632]/10 flex items-center justify-center mb-3">
                      <Image 
                        src="/webp/cashapp-icon.webp" 
                        alt="CashApp" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-navy mb-2">CashApp</h4>
                    <p className="text-navy/70 text-sm text-center mb-3">Send to $Touch2015</p>
                    <Button 
                      className="w-full bg-[#00D632] hover:bg-[#00C02D] text-white transition-all"
                      asChild
                    >
                      <Link href="https://cash.app/$Touch2015" target="_blank" rel="noopener noreferrer">
                        Donate via CashApp
                      </Link>
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#6D1ED4]/10 flex items-center justify-center mb-3">
                      <Image 
                        src="/webp/zelle-icon.webp" 
                        alt="Zelle" 
                        width={40} 
                        height={40}
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-medium text-navy mb-2">Zelle</h4>
                    <p className="text-navy/70 text-sm text-center mb-3">Send to (954) 673-3506</p>
                    <Button 
                      className="w-full bg-[#6D1ED4] hover:bg-[#5A19B0] text-white transition-all"
                      asChild
                    >
                      <Link href="https://enroll.zellepay.com/qr-codes?data=eyJuYW1lIjoiVG91Y2ggJiBSZXN0b3JlZCIsImFjdGlvbiI6InBheW1lbnQiLCJ0b2tlbiI6IisxOTU0NjczMzUwNiJ9">
                        Donate via Zelle
                      </Link>
                    </Button>
                  </motion.div>
                </div>
                
                <div className="text-center">
                  <Button 
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300"
                    asChild
                  >
                    <Link href="/support-us#donate">
                      Explore More Ways to Give
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sign the Pledge Section */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <ScrollAnimation>
            <div className="bg-gradient-to-r from-tan-light to-tan p-8 md:p-12 rounded-xl relative overflow-hidden shadow-lg">
              {/* Background watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <div className="w-[500px] h-[500px] border-[30px] border-navy rounded-full"></div>
              </div>

              {/* Purple ribbon decoration */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-0 right-0 w-full h-full bg-purple/10 ribbon"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-navy mb-6 relative inline-block brush-stroke purple-brush-stroke mx-auto">
                  Sign the Pledge
                </h2>
                <p className="text-center italic text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-navy">
                  "I will not tolerate domestic abuse in any form in my own space and will do my part to help end it."
                </p>

                <form 
                  action="https://formspree.io/f/myzwkkez" 
                  method="POST"
                  className="space-y-4 max-w-xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="bg-white/80 border-navy/20 focus:border-gold focus:ring-gold/50"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="bg-white/80 border-navy/20 focus:border-gold focus:ring-gold/50"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email (required)"
                      required
                      className="bg-white/80 border-navy/20 focus:border-gold focus:ring-gold/50"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Message (optional)"
                      className="w-full min-h-[120px] rounded-md border border-navy/20 bg-white/80 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent"
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <Button 
                      type="submit"
                      className="w-full bg-purple hover:bg-purple-dark text-white transition-all duration-300 hover:shadow-md transform hover:scale-105"
                    >
                      Submit
                    </Button>
                  </div>
                  <p className="text-xs text-center text-navy/60 pt-2">
                    By submitting, you agree to receive occasional email updates. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
