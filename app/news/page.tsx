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
      title: "Prayer Breakfast",
      description:
        "Join us for a morning of faith, food, and fellowship. Theme: Pray Bold (Hebrews 4:16). Hosted by Hon. Jaqueline Sinclaire & Pastor Pratt Brown, with Apostle Dr. K. Lyle, Prophetess Sausha McDonald, and Guest Speaker Apostle Margaret Thompson. Come and connect with God for uplifting, spiritual refreshment and leave blessed and empowered.",
      image: "/events/webp/prayer-breakfast-flyer.webp",
      date: "May 24, 2024",
      time: "10:00 AM",
      buttons: [
        {
          text: "$25 Tickets",
          link: "#",
          primary: true
        },
        {
          text: "View Details",
          link: "/news/prayer-breakfast",
          primary: false
        }
      ]
    },
  ]

  const allTags = ["Conferences", "Fundraisers", "Outreach", "Workshops", "Global Missions"]
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const pastProjects = [
    {
      title: "Trailblazers Talk Show for Christ – March 2025",
      description: "Guest: Minister Jacqueline Sinclair, Host: Latoya Edwards. Together, they explored topics of real faith, personal stories of grace, and Christ-centered encouragement. Join us for an inspiring conversation that will strengthen your spiritual journey.",
      image: "/events/trailblazers-talk-show-flyer.jpeg",
      date: "March 8, 2025",
      isPast: true,
      tags: ["Conferences", "Women Empowerment", "Talk Show"],
      buttonText: "View Event Details",
      buttonLink: "/news/trailblazers-march-2025",
    },
    {
      title: "Touch & Restored 6th Anniversary: Broken But Not Beyond Repair",
      description:
        "Touch & Restored 6th Anniversary: 'Broken But Not Beyond Repair' Women Empowerment Conference. Join host Jacqueline Sinclair, Apostle Margaret Thompson, Rev. Maria Hinds, Lady Yvonne Shirley, Pastor K. Lyle, and Evangelist Marcia Baker for an inspiring celebration of healing and empowerment. Romans 8:28.",
      image: "/events/webp/touch-and-restored-flyer.webp",
      date: "January 24, 2025",
      isPast: true,
      tags: ["Conferences", "Women Empowerment"],
      buttonText: "View Event Details",
      buttonLink: "/news/touch-and-restored-anniversary",
    },
    {
      title: "5th Annual Broken to Be Mended Conference",
      description:
        "Touch & Restored Foundation's 5th Annual Broken to Be Mended Conference. Host: Jacqueline Bonner Sinclair. Moderator: Evangelist Marcia Baker. Speakers: Pastor Paula Miller, Yvonne Shirley. Join us for an inspiring evening of healing and empowerment.",
      image: "/events/webp/broken-to-be-mended.webp",
      date: "January 22, 2022",
      isPast: true,
      tags: ["Conferences", "Outreach"],
      buttonText: "View Event Details",
      buttonLink: "/news/broken-to-be-mended-conference",
    },
    {
      title: "Ladies in HAT Back to School Fundraiser",
      description:
        "Our elegant fundraising event featured a fashion show, raffles, and prizes for best hats, bringing the community together to support children affected by domestic violence. Attendees enjoyed an afternoon of style and philanthropy, with all proceeds providing essential school supplies and resources to help children start the academic year with confidence and the tools needed to succeed.",
      image: "/events/webp/ladies-in-hat-flyer.webp",
      date: "August 3, 2024",
      isPast: true,
      tags: ["Fundraisers", "Outreach"],
      buttonText: "View Event Details",
      buttonLink: "/news/ladies-in-hat-fundraiser",
    },
    {
      title: "Reaching Up Out 2024 Edition",
      description:
        "A collaborative summit hosted by Hope and Destiny Foundation, A Collision with Purpose, and Touch and Restored Foundation. This powerful gathering featured distinguished speakers including Dr. Laxley W. Stephenson, Jacqueline Sinclair, Donna L Thompson, Claudy Eugene, and Trudy McBean, who shared insights on healing, empowerment, and community support for survivors of abuse. The event created meaningful connections and strengthened our collective mission to reach out and lift up those affected by trauma.",
      image: "/events/webp/reaching-up-out-flyer.webp",
      date: "May 2024",
      isPast: true,
      tags: ["Conferences", "Outreach"],
      buttonText: "View Event Details",
      buttonLink: "/news/reaching-up-out-2024",
    },
    {
      title: "Kenya Mission 2023",
      description:
        "Hope and Destiny Foundation's Kenya Mission 2023 empowered girls to stay in school by providing essential sanitary pads. Through the successful '1 pad keep a girl in school' campaign, the team distributed supplies and support, helping break barriers to education for young women. The mission was made possible by the generosity of Money Mastery for Her Mission and the wider community.",
      image: "/events/webp/kenya-mission-2023-flyer.webp",
      date: "2023",
      isPast: true,
      tags: ["Global Missions", "Outreach"],
      buttonText: "View Event Details",
      buttonLink: "/news/kenya-mission-2023",
    },
    {
      title: "Dining with the Queen",
      description:
        "An elegant fundraising dinner hosted by Jacqueline Sinclair to support abused children. The evening featured special guest 2nd Chance, a renowned gospel artist, creating an atmosphere of hope and generosity at the Midland 8 Clubhouse. Guests enjoyed fine dining while contributing to programs that provide vital services for children who have experienced abuse and trauma.",
      image: "/events/webp/dining-with-the-queen-flyer.webp",
      date: "July 30, 2022",
      isPast: true,
      tags: ["Fundraisers"],
      buttonText: "View Event Details",
      buttonLink: "/news/dining-with-the-queen",
    },
    {
      title: "No Secrets! 1st Anniversary",
      description:
        "The T.O.U.C.H. Foundation's 1st Anniversary event, 'No Secrets!', brought the community together for a powerful stand against domestic violence. Hosted by Jacqueline Sinclair, the event featured inspiring talks from advocates and survivors, practical resources, and training to empower attendees to make a difference. Guests learned about the realities of abuse, heard personal stories, and discovered tools to help eradicate domestic violence in their own lives and communities.",
      image: "/events/webp/no-secrets-flyer.webp",
      date: "January 19, 2018",
      isPast: true,
      tags: ["Outreach", "Conferences"],
      buttonText: "View Event Details",
      buttonLink: "/news/no-secrets-anniversary",
    },
    {
      title: "No Secrets: Standing Against Domestic Violence",
      description:
        "A powerful and elegant gathering dedicated to standing against domestic violence. Guests walked the red carpet and joined a formal banquet at POFITA, where survivors, advocates, and supporters came together to raise awareness and foster hope. The event featured inspiring stories, community connection, and a shared commitment to ending abuse.",
      image: "/events/webp/no-secrets-2019-flyer.webp",
      date: "January 19, 2019",
      isPast: true,
      tags: ["Outreach", "Awareness"],
      buttonText: "View Event Details",
      buttonLink: "/news/no-secrets-2019",
    },
  ]

  const filteredPastProjects =
    selectedTags.length === 0
      ? pastProjects.slice().sort((a, b) => {
          // Parse as full date if possible, otherwise as year
          const parseDate = (d: string) => {
            if (!d) return 0;
            // Try to parse as full date
            const full = Date.parse(d);
            if (!isNaN(full)) return full;
            // Fallback: parse as year
            const year = parseInt(d.match(/\d{4}/)?.[0] || "0", 10);
            return Date.parse(`${year}-01-01`);
          };
          return parseDate(b.date) - parseDate(a.date);
        })
      : pastProjects
          .filter((project) => project.tags?.some((tag) => selectedTags.includes(tag)))
          .sort((a, b) => {
            const parseDate = (d: string) => {
              if (!d) return 0;
              const full = Date.parse(d);
              if (!isNaN(full)) return full;
              const year = parseInt(d.match(/\d{4}/)?.[0] || "0", 10);
              return Date.parse(`${year}-01-01`);
            };
            return parseDate(b.date) - parseDate(a.date);
          });

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
                  buttons={project.buttons}
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
                  buttonText={project.buttonText}
                  buttonLink={project.buttonLink}
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
