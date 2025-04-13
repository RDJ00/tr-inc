"use client"

import { useState } from "react"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ProjectCard } from "@/components/project-card"
import { TagFilter } from "@/components/tag-filter"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { urlForImageWithSize } from "@/lib/sanity/image"
import { EventData } from "@/lib/sanity/types"

interface NewsContentProps {
  upcomingEvents: EventData[];
  pastEvents: EventData[];
  upcomingFallback: any[];
}

export function NewsContent({ upcomingEvents, pastEvents, upcomingFallback }: NewsContentProps) {
  const allTags = ["Conferences", "Fundraisers", "Outreach", "Workshops", "Global Missions"]
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  // Filter past events by selected tags
  const filteredPastEvents = selectedTags.length === 0
    ? pastEvents || []
    : (pastEvents || []).filter((event) => 
        event.tags?.some((tag) => selectedTags.includes(tag))
      );

  // Format date string from ISO to readable format
  const formatEventDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  // Format time from ISO date string
  const formatEventTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  }

  return (
    <>
      <section className="py-16">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <h2 className="text-3xl font-bold mb-8 text-center text-[#0A1E39]">Upcoming Projects & Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents && upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <ProjectCard
                    key={event._id}
                    title={event.title}
                    description={event.shortDescription}
                    image={urlForImageWithSize(event.image, 600, 400)}
                    date={formatEventDate(event.date)}
                    time={formatEventTime(event.date)}
                    location={event.location}
                    buttonText="Learn More"
                    buttonLink={`/events/${event.slug.current}`}
                  />
                ))
              ) : (
                upcomingFallback.map((project, index) => (
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
                ))
              )}
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
              {filteredPastEvents && filteredPastEvents.length > 0 ? (
                filteredPastEvents.map((event) => (
                  <ProjectCard
                    key={event._id}
                    title={event.title}
                    description={event.shortDescription}
                    image={urlForImageWithSize(event.image, 600, 400)}
                    date={formatEventDate(event.date)}
                    location={event.location}
                    isPast={true}
                    tags={event.tags}
                  />
                ))
              ) : (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No past events match your selected filters.
                </div>
              )}
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