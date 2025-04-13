import { getEvent } from "@/lib/sanity/client"
import { PageHeader } from "@/components/page-header"
import { urlForImage } from "@/lib/sanity/image"
import { CalendarClock, MapPin, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { PortableText } from '@portabletext/react'
import { ScrollAnimation } from "@/components/scroll-animation"
import { NewsletterSignup } from "@/components/newsletter-signup"

interface EventParams {
  params: {
    slug: string;
  };
}

export default async function EventPage({ params }: EventParams) {
  const event = await getEvent(params.slug);
  
  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Event Not Found</h1>
        <p className="mt-4">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/news" className="mt-8">
          <Button>Return to Events Page</Button>
        </Link>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <>
      <PageHeader
        title={event.title}
        description={event.shortDescription}
        backgroundImage={urlForImage(event.image)}
      />

      <section className="py-16">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Event details */}
              <div className="lg:col-span-2 prose prose-lg max-w-none">
                {event.fullDescription && (
                  <PortableText value={event.fullDescription} />
                )}
              </div>

              {/* Event info sidebar */}
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                  <h3 className="text-xl font-bold text-[#0A1E39]">Event Details</h3>
                  
                  <div className="flex items-start gap-4">
                    <CalendarClock className="h-5 w-5 text-[#C79C4A] mt-0.5" />
                    <div>
                      <h4 className="font-medium">Date & Time</h4>
                      <p className="text-gray-600">{formatDate(event.date)}</p>
                      <p className="text-gray-600">{formatTime(event.date)}</p>
                      {event.endDate && (
                        <p className="text-gray-600 mt-1">
                          Until {formatDate(event.endDate)}, {formatTime(event.endDate)}
                        </p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-[#C79C4A] mt-0.5" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-600">{event.location}</p>
                    </div>
                  </div>

                  {event.tags && event.tags.length > 0 && (
                    <div className="flex items-start gap-4">
                      <Tag className="h-5 w-5 text-[#C79C4A] mt-0.5" />
                      <div>
                        <h4 className="font-medium">Categories</h4>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {event.tags.map((tag, idx) => (
                            <Badge key={idx} className="bg-[#C79C4A]/80 hover:bg-[#C79C4A]">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {event.registerLink && (
                    <div className="pt-4">
                      <Link href={event.registerLink} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-[#C79C4A] hover:bg-[#C79C4A]/90 text-white">
                          Register Now
                        </Button>
                      </Link>
                    </div>
                  )}
                </div>
                
                <div className="bg-[#F6EFD6]/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-[#0A1E39] mb-4">Share This Event</h3>
                  <div className="flex gap-3">
                    {/* Social sharing buttons would go here */}
                    <Button variant="outline" size="sm">Facebook</Button>
                    <Button variant="outline" size="sm">Twitter</Button>
                    <Button variant="outline" size="sm">Email</Button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      <section className="py-16 bg-[#F6EFD6]/30">
        <div className="container px-4 md:px-8 lg:px-12">
          <ScrollAnimation>
            <NewsletterSignup />
          </ScrollAnimation>
        </div>
      </section>
    </>
  )
} 