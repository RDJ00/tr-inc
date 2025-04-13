"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { TeamMemberCard } from "@/components/team-member-card"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jacqueline Sinclair",
      title: "Founder & Chair",
      bio: "A Times Best Selling Author & Speaker. She's driven, energetic & has over 25 years of leadership experience. \"My goal is to inspire & be a catalyst of change as I educate against Domestic Violence & Abuse.\"",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Yvonne Shirley",
      title: "Previous Vice Chair",
      bio: "Yvonne Shirley is from Jamaica. A registered nurse by profession. Still working apart of our team despite her change in roles. \"My passion has always been to motivate & empower women & men with tools to fulfill their God given purpose; moving from 'stuck to unstuck,' from 'I can't' to 'I can'.\"",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Wayne Robinson",
      title: "Analyst/Business Consultant",
      bio: "Joined: 2017",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Trudy McBean",
      title: "Vice Chair",
      bio: "Joined: 2017",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Lincoln Grant",
      title: "Treasurer Warehouse Supervisor",
      bio: "Joined: 2017",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Elizabeth Howard",
      title: "Family & Children's Counselor",
      bio: "Ordained Minister from New Hope World Outreach. Counselor training from Destiny Christian University. Joined 2020.",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Yanira Rivera",
      title: "Secretary",
      bio: "Born in St. Croix of the U.S. Virgin Islands. A trained nurse technician with more than a decade of experience. A mother of 3 boys & dedicated to nurturing children into the path of positivity & purpose. Joined 2023.",
      image: "/placeholder.svg?height=600&width=400",
    },
  ]

  return (
    <>
      <PageHeader
        title="About Us"
        description="Finding Inspiration in Every Turn"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto">
              <p className="text-base md:text-lg text-muted-foreground font-serif italic">
                Touch & Restored is a 501(c)(3) non-profit Florida originated organization, founded by Jacqueline Sinclair in 2017. T.O.U.C.H. (Tender Outreach United Christian Home).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="mission" className="py-12 md:py-16 bg-[#F6EFD6] overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-[#0A1E39]">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <motion.p 
                className="text-muted-foreground mb-6 font-serif leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Touch & Restored Foundation is a beacon of blessings miraculously birthed out of the abuse of Jacqueline (Jackie) Sinclair as a child alongside her mother, Josephine as a battered woman. Domestic violence created a plague of personal tragedies for them both throughout their lives. Desperate to make sense of this violence, in 2017 Jackie realized that with a team she could make something positively impactful out of her experience as she recognized her world reflected the same pain. After the release of her book, <em>A Child Cries: The Pain of Searching for Love</em>, she searched for a team—united in accepting God's higher goal. That goal? Simply, a safe haven for the abused & battered. Together, we dedicate our lives in finding, creating & providing resources catering to the needs of those who have suffered.
              </motion.p>
              <motion.p 
                className="text-muted-foreground font-serif leading-relaxed text-sm sm:text-base"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Grateful for the support our family receives from the community, we are focused on paying our blessings forward. We feel a deep sense of responsibility to make a difference in the lives of all the Jackies we will never know and the Josephines we may never meet. Touch & Restored Foundation is committed to restore lives, and revive hope.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="team" className="py-12 md:py-16 bg-[#B3D3F2]/20 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 md:mb-6 text-[#0A1E39]">Meet the Team</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-12 text-sm sm:text-base">
              Our dedicated board of directors brings diverse expertise and a shared commitment to our mission of
              supporting survivors and creating lasting change.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <TeamMemberCard
                    name={member.name}
                    title={member.title}
                    bio={member.bio}
                    image={member.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0A1E39] text-white p-6 md:p-12 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Join Our Mission</h2>
                <p className="mb-6 md:mb-8 text-sm sm:text-base">
                  We believe that everyone deserves to live free from violence and fear. By working together, we can
                  create a community where survivors are supported, empowered, and able to thrive. Join us in making a
                  difference.
                </p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white text-sm sm:text-base">Volunteer With Us</Button>
                  <Button className="bg-white text-[#0A1E39] hover:bg-white/90 text-sm sm:text-base">Make a Donation</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 text-sm sm:text-base">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
