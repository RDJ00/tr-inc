"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { TeamMemberCard } from "@/components/team-member-card"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Award, Calendar } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Jacqueline Sinclair",
      title: "Founder & Executive Director",
      bio: "Jacqueline founded Touch & Restore in 2017 with a vision to create a safe haven for survivors of domestic violence. With over 15 years of experience in social work and community advocacy, she brings passion and expertise to the organization's leadership.",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Michael Johnson",
      title: "Board Chair",
      bio: "Michael has served on the board since 2018 and brings extensive experience in nonprofit management and strategic planning. He is committed to expanding the organization's impact and ensuring sustainable growth.",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Sarah Williams",
      title: "Treasurer",
      bio: "With a background in finance and accounting, Sarah oversees the organization's financial health and transparency. She is passionate about ensuring that resources are allocated effectively to serve those in need.",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "David Rodriguez",
      title: "Secretary",
      bio: "David brings legal expertise to the board and helps navigate regulatory compliance. His commitment to social justice drives his dedication to the organization's mission and governance.",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Lisa Chen",
      title: "Board Member",
      bio: "As a survivor advocate and community organizer, Lisa provides valuable insights into the needs of those we serve. She leads our community outreach initiatives and volunteer engagement programs.",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Robert Taylor",
      title: "Board Member",
      bio: "Robert's background in healthcare administration strengthens our trauma-informed approach to services. He champions holistic healing practices and comprehensive care for survivors.",
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

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground font-serif italic">
                Touch & Restored is a 501(c)(3) non-profit Florida originated organization, founded by Jacqueline Sinclair in 2017. T.O.U.C.H. (Tender Outreach United Christian Home).
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="mission" className="py-16 bg-[#F6EFD6]">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0A1E39]">Our Story</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-muted-foreground mb-6 font-serif leading-relaxed">
                Touch & Restored Foundation is a beacon of blessings miraculously birthed out of the abuse of Jacqueline (Jackie) Sinclair as a child alongside her mother, Josephine as a battered woman. Domestic violence created a plague of personal tragedies for them both throughout their lives. Desperate to make sense of this violence, in 2017 Jackie realized that with a team she could make something positively impactful out of her experience as she recognized her world reflected the same pain. After the release of her book, <em>A Child Cries: The Pain of Searching for Love</em>, she searched for a team—united in accepting God's higher goal. That goal? Simply, a safe haven for the abused & battered. Together, we dedicate our lives in finding, creating & providing resources catering to the needs of those who have suffered.
              </p>
              <p className="text-muted-foreground font-serif leading-relaxed">
                Grateful for the support our family receives from the community, we are focused on paying our blessings forward. We feel a deep sense of responsibility to make a difference in the lives of all the Jackies we will never know and the Josephines we may never meet. Touch & Restored Foundation is committed to restore lives, and revive hope.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="founder" className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Jacqueline Sinclair, Founder"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A1E39] font-serif">Our Founder</h2>
                <h3 className="text-xl font-bold text-[#C79C4A] mb-4 font-serif">Jacqueline Sinclair</h3>
                <p className="text-muted-foreground mb-4 font-serif">
                  Jacqueline Sinclair is a passionate advocate for survivors of domestic violence and trauma. With a
                  background in social work and community organizing, she has dedicated her career to creating safe
                  spaces for healing and empowerment.
                </p>
                <p className="text-muted-foreground mb-4 font-serif">
                  After witnessing the impact of domestic violence in her community and recognizing the gaps in support
                  services, Jacqueline founded Touch & Restore in 2017. Her vision was to create a holistic approach to
                  healing that addresses the physical, emotional, and spiritual needs of survivors.
                </p>
                <p className="text-muted-foreground mb-6 font-serif">
                  Under her leadership, Touch & Restore has grown from a small grassroots initiative to a respected
                  nonprofit organization serving hundreds of individuals each year. Jacqueline continues to guide the
                  organization with compassion, innovation, and an unwavering commitment to those we serve.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-[#F6EFD6] px-4 py-2 rounded-full text-sm font-medium text-[#0A1E39]">
                    Certified Crisis Counselor
                  </div>
                  <div className="bg-[#F6EFD6] px-4 py-2 rounded-full text-sm font-medium text-[#0A1E39]">
                    Community Leadership Award 2020
                  </div>
                  <div className="bg-[#F6EFD6] px-4 py-2 rounded-full text-sm font-medium text-[#0A1E39]">
                    MSW, University of Florida
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section id="team" className="py-16 bg-[#B3D3F2]/20">
        <div className="container">
          <ScrollAnimation>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#0A1E39]">Meet the Team</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
              Our dedicated board of directors brings diverse expertise and a shared commitment to our mission of
              supporting survivors and creating lasting change.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers.map((member, index) => (
                <TeamMemberCard
                  key={index}
                  name={member.name}
                  title={member.title}
                  bio={member.bio}
                  image={member.image}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <ScrollAnimation>
            <div className="bg-[#0A1E39] text-white p-8 md:p-12 rounded-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                <p className="mb-8">
                  We believe that everyone deserves to live free from violence and fear. By working together, we can
                  create a community where survivors are supported, empowered, and able to thrive. Join us in making a
                  difference.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">Volunteer With Us</Button>
                  <Button className="bg-white text-[#0A1E39] hover:bg-white/90">Make a Donation</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
