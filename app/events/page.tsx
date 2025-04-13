import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { sanityFetch } from '@/sanity/lib/fetch'
import { urlForImage } from '@/sanity/lib/image'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming events and activities',
}

interface Event {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: { asset: { _ref: string } }
  startDate: string
  location?: string
  description?: any
}

async function getEvents() {
  const query = `*[_type == "event"] | order(startDate asc) {
    _id,
    title,
    slug,
    mainImage,
    startDate,
    location,
    description
  }`

  const events = await sanityFetch<Event[]>({ query })
  return events
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>
      
      {events.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">No upcoming events at this time. Please check back later.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div key={event._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {event.mainImage && (
                <div className="relative h-48 w-full">
                  <Image
                    src={urlForImage(event.mainImage).url()}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{event.title}</h2>
                <p className="text-gray-600 mb-2">
                  <time dateTime={event.startDate}>{formatDate(event.startDate)}</time>
                </p>
                {event.location && (
                  <p className="text-gray-600 mb-2">{event.location}</p>
                )}
                <Link href={`/events/${event.slug.current}`} className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
} 