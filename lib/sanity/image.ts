import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'
import { SanityImage } from './types'

// Initialize the image URL builder
const builder = imageUrlBuilder(client)

// Helper function to get the image URL with transformations
export function urlForImage(source: SanityImage | undefined) {
  if (!source || !source.asset) {
    // Return a placeholder image or empty string
    return '/placeholder.svg'
  }
  
  return builder.image(source).auto('format').fit('max').url()
}

// Helper for responsive images
export function urlForImageWithSize(source: SanityImage | undefined, width: number, height?: number) {
  if (!source || !source.asset) {
    // Return a placeholder image with dimensions
    return `/placeholder.svg?width=${width}&height=${height || width}`
  }
  
  let imageBuilder = builder.image(source).auto('format').width(width)
  
  if (height) {
    imageBuilder = imageBuilder.height(height)
  }
  
  return imageBuilder.url()
} 