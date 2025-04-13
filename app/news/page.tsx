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
      title: "Survivor Support Group Launch",
      description:
        "We launched our weekly support group for survivors, providing a safe space for healing, connection, and growth. The group is facilitated by licensed therapists with expertise in trauma recovery.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 10, 2025",
      isPast: true,
      tags: ["Outreach"],
    },
    {
      title: "Legislative Advocacy Day",
      description:
        "Our team and volunteers met with state legislators to advocate for stronger domestic violence laws and increased funding for survivor services. The day included training, meetings, and a press conference.",
      image: "/placeholder.svg?height=400&width=600",
      date: "February 15, 2025",
      isPast: true,
      tags: ["Conferences", "Outreach"],
    },
    {
      title: "Holiday Gift Drive",
      description:
        "Thanks to our generous community, we collected and distributed gifts for over 100 families affected by domestic violence, bringing joy and hope during the holiday season.",
      image: "/placeholder.svg?height=400&width=600",
      date: "December 20, 2024",
      isPast: true,
      tags: ["Fundraisers"],
    },
    {
      title: "International Women's Day Conference",
      description:
        "Our annual conference brought together experts, advocates, and survivors to discuss global perspectives on gender-based violence and strategies for prevention and intervention.",
      image: "/placeholder.svg?height=400&width=600",
      date: "March 8, 2024",
      isPast: true,
      tags: ["Conferences", "Global Missions"],
    },
    {
      title: "Youth Prevention Workshop",
      description:
        "We conducted a series of workshops in local high schools on healthy relationships, consent, and recognizing warning signs of abuse. Over 500 students participated in these interactive sessions.",
      image: "/placeholder.svg?height=400&width=600",
      date: "October 5, 2024",
      isPast: true,
      tags: ["Workshops", "Outreach"],
    },
    {
      title: "Survivor Scholarship Fundraiser",
      description:
        "Our annual fundraiser raised over $50,000 for educational scholarships for survivors of domestic violence, helping them achieve economic independence and pursue their dreams.",
      image: "/placeholder.svg?height=400&width=600",
      date: "September 18, 2024",
      isPast: true,
      tags: ["Fundraisers"],
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

      <section className="py-16">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Upcoming Projects & Events</h2>
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

      <section className="py-16 bg-[#F6EFD6]/50">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Past Events & Highlights</h2>

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

      <section className="py-16">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <NewsletterSignup />
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
}
