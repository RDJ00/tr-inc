"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ProjectCard } from "@/components/project-card"
import { TagFilter } from "@/components/tag-filter"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function NewsPage() {
  const upcomingProjects = [
    {
      title: "Annual Domestic Violence Awareness Gala",
      description:
        "Join us for an evening of inspiration and impact as we raise funds and awareness for domestic violence survivors. The event will feature keynote speakers, survivor testimonials, and a silent auction.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 15, 2025",
      time: "6:00 PM - 9:00 PM",
      buttonText: "Get Tickets",
      buttonLink: "#",
    },
    {
      title: "Healing Through Art Workshop Series",
      description:
        "A six-week workshop series using art therapy techniques to help survivors process trauma and express emotions in a safe, supportive environment. No artistic experience necessary.",
      image: "/placeholder.svg?height=400&width=600",
      date: "Starting September 5, 2025",
      time: "Saturdays, 10:00 AM - 12:00 PM",
      buttonText: "Register Now",
      buttonLink: "#",
    },
    {
      title: "Community Resource Fair",
      description:
        "Connect with local organizations providing services for survivors of domestic violence, trauma, and abuse. Free health screenings, legal consultations, and childcare will be available.",
      image: "/placeholder.svg?height=400&width=600",
      date: "August 22, 2025",
      time: "11:00 AM - 3:00 PM",
      buttonText: "Learn More",
      buttonLink: "#",
    },
  ]

  const allTags = ["Conferences", "Fundraisers", "Outreach", "Workshops", "Global Missions"]
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const pastProjects = [
    {
      title: "Ladies in HAT Back to School Fundraiser",
      description:
        "Our elegant fundraising event featured a fashion show, raffles, and prizes for best hats, bringing the community together to support children affected by domestic violence. Attendees enjoyed an afternoon of style and philanthropy, with all proceeds providing essential school supplies and resources to help children start the academic year with confidence and the tools needed to succeed.",
      image: "/events/ladies-in-hat-flyer.jpg",
      date: "August 3, 2024",
      isPast: true,
      tags: ["Fundraisers", "Outreach"],
    },
    {
      title: "Reaching Up Out 2024 Edition",
      description:
        "A collaborative summit hosted by Hope and Destiny Foundation, A Collision with Purpose, and Touch and Restored Foundation. This powerful gathering featured distinguished speakers including Dr. Laxley W. Stephenson, Jacqueline Sinclair, Donna L Thompson, Claudy Eugene, and Trudy McBean, who shared insights on healing, empowerment, and community support for survivors of abuse. The event created meaningful connections and strengthened our collective mission to reach out and lift up those affected by trauma.",
      image: "/events/reaching-up-out-flyer.jpg",
      date: "May 2024",
      isPast: true,
      tags: ["Conferences", "Outreach"],
    },
    {
      title: "Kenya Mission 2023",
      description:
        "Hope and Destiny Foundation's Kenya Mission 2023 empowered girls to stay in school by providing essential sanitary pads. Through the successful '1 pad keep a girl in school' campaign, the team distributed supplies and support, helping break barriers to education for young women. The mission was made possible by the generosity of Money Mastery for Her Mission and the wider community.",
      image: "/events/kenya-mission-2023-flyer.jpg",
      date: "2023",
      isPast: true,
      tags: ["Global Missions", "Outreach"],
    },
    {
      title: "Dining with the Queen",
      description:
        "An elegant fundraising dinner hosted by Jacqueline Sinclair to support abused children. The evening featured special guest 2nd Chance, a renowned gospel artist, creating an atmosphere of hope and generosity at the Midland 8 Clubhouse. Guests enjoyed fine dining while contributing to programs that provide vital services for children who have experienced abuse and trauma.",
      image: "/events/dining-with-the-queen-flyer.jpg",
      date: "July 30, 2022",
      isPast: true,
      tags: ["Fundraisers"],
    },
    {
      title: "No Secrets! 1st Anniversary",
      description:
        "The T.O.U.C.H. Foundation's 1st Anniversary event, 'No Secrets!', brought the community together for a powerful stand against domestic violence. Hosted by Jacqueline Sinclair, the event featured inspiring talks from advocates and survivors, practical resources, and training to empower attendees to make a difference. Guests learned about the realities of abuse, heard personal stories, and discovered tools to help eradicate domestic violence in their own lives and communities.",
      image: "/events/no-secrets-flyer.jpeg",
      date: "January 19, 2018",
      isPast: true,
      tags: ["Outreach", "Conferences"],
    },
    {
      title: "No Secrets: Standing Against Domestic Violence",
      description:
        "A powerful and elegant gathering dedicated to standing against domestic violence. Guests walked the red carpet and joined a formal banquet at POFITA, where survivors, advocates, and supporters came together to raise awareness and foster hope. The event featured inspiring stories, community connection, and a shared commitment to ending abuse.",
      image: "/events/no-secrets-2019-flyer.jpg",
      date: "January 19, 2019",
      isPast: true,
      tags: ["Outreach", "Awareness"],
    },
  ]

  const filteredPastProjects =
    selectedTags.length === 0
      ? pastProjects
      : pastProjects.filter((project) => project.tags?.some((tag) => selectedTags.includes(tag)))

  return (
    <>
      <PageHeader
        title="Our Work In Action"
        description="Explore the projects, fundraisers, and stories behind our mission"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-navy">Upcoming Projects & Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  date={project.date}
                  time={project.time}
                  buttonText={project.buttonText}
                  buttonLink={project.buttonLink}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-tan-light/50">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-navy">Past Events & Highlights</h2>

            <TagFilter tags={allTags} onFilterChange={setSelectedTags} />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPastProjects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  date={project.date}
                  isPast={project.isPast}
                  tags={project.tags}
                />
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <NewsletterSignup />
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
