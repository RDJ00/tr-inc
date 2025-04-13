import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { sanityFetch } from '@/sanity/lib/fetch'
import { urlForImage } from '@/sanity/lib/image'
import { PortableText } from '@portabletext/react'

interface PageProps {
  params: {
    slug: string
  }
}

interface Event {
  _id: string
  title: string
  mainImage?: { asset: { _ref: string } }
  startDate: string
  endDate?: string
  location?: string
  address?: string
  description?: any
  categories?: { title: string }[]
  organizers?: { name: string, image?: { asset: { _ref: string } } }[]
  registrationUrl?: string
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const event = await getEvent(params.slug)
  
  return {
    title: event?.title || 'Event Details',
    description: `Event details for ${event?.title}`,
  }
}

async function getEvent(slug: string) {
  const query = `*[_type == "event" && slug.current == $slug][0] {
    _id,
    title,
    mainImage,
    startDate,
    endDate,
    location,
    address,
    description,
    "categories": categories[]->{ title },
    "organizers": organizers[]->{ name, image },
    registrationUrl
  }`

  const event = await sanityFetch<Event>({ query, params: { slug } })
  return event
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  })
}

const PortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="relative w-full h-64 my-6">
        <Image
          src={urlForImage(value).url()}
          alt={value.alt || 'Event image'}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ),
  },
}

export default async function EventPage({ params }: PageProps) {
  const event = await getEvent(params.slug)

  if (!event) {
    return (
      <div className="container mx-auto px-4 py-10 text-center">
        <h1 className="text-3xl font-bold mb-6">Event Not Found</h1>
        <p className="mb-6">The event you're looking for doesn't exist or has been removed.</p>
        <Link href="/events" className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Back to Events
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <Link href="/events" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Back to Events
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {event.mainImage && (
          <div className="relative h-96 w-full">
            <Image
              src={urlForImage(event.mainImage).url()}
              alt={event.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <h2 className="text-lg font-semibold mb-2">Date & Time</h2>
              <p className="text-gray-700">
                <time dateTime={event.startDate}>{formatDate(event.startDate)}</time>
                {event.endDate && (
                  <>
                    <br />
                    <span className="text-gray-600">to</span>
                    <br />
                    <time dateTime={event.endDate}>{formatDate(event.endDate)}</time>
                  </>
                )}
              </p>
            </div>
            
            {event.location && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Location</h2>
                <p className="text-gray-700">{event.location}</p>
                {event.address && <p className="text-gray-600">{event.address}</p>}
              </div>
            )}
            
            {event.categories && event.categories.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold mb-2">Categories</h2>
                <div className="flex flex-wrap gap-2">
                  {event.categories.map((category, i) => (
                    <span key={i} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                      {category.title}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {event.registrationUrl && (
            <div className="mb-8">
              <a
                href={event.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Register for This Event
              </a>
            </div>
          )}
          
          {event.description && (
            <div className="prose max-w-none mb-8">
              <h2 className="text-xl font-semibold mb-4">About This Event</h2>
              <PortableText value={event.description} components={PortableTextComponents} />
            </div>
          )}
          
          {event.organizers && event.organizers.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Organizers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {event.organizers.map((organizer, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    {organizer.image && (
                      <div className="relative h-12 w-12 rounded-full overflow-hidden">
                        <Image
                          src={urlForImage(organizer.image).url()}
                          alt={organizer.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <span className="font-medium">{organizer.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 