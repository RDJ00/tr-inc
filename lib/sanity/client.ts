import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to true for production
})

export const getEvents = async (status: string = 'upcoming') => {
  return client.fetch(
    `*[_type == "event" && status == $status] | order(date asc) {
      _id,
      title,
      slug,
      date,
      location,
      shortDescription,
      image,
      tags,
      registerLink
    }`,
    { status }
  )
}

export const getEvent = async (slug: string) => {
  return client.fetch(
    `*[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      date,
      endDate,
      location,
      shortDescription,
      fullDescription,
      image,
      status,
      tags,
      registerLink
    }`,
    { slug }
  )
} 