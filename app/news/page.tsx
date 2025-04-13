import { PageHeader } from "@/components/page-header"
import { getEvents } from "@/lib/sanity/client"
import { EventData } from "@/lib/sanity/types"
import { NewsContent } from "@/components/news-content"

// This function is called at request time
export default async function NewsPage() {
  // Fetch upcoming events
  const upcomingEvents = await getEvents('upcoming');
  
  // Fetch past events
  const pastEvents = await getEvents('past');

  // Fallback data in case the data hasn't loaded yet
  const upcomingFallback = [
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

  return (
    <>
      <PageHeader
        title="Our Work In Action"
        description="Explore the projects, fundraisers, and stories behind our mission"
        backgroundImage="/placeholder.svg?height=600&width=1920"
      />
      
      <NewsContent 
        upcomingEvents={upcomingEvents} 
        pastEvents={pastEvents} 
        upcomingFallback={upcomingFallback}
      />
    </>
  )
} 