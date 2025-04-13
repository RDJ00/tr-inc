import 'server-only'

import type { QueryParams } from 'next-sanity'
import { draftMode } from 'next/headers'

import { client } from '@/sanity/lib/client'

export const token = process.env.SANITY_API_READ_TOKEN

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: QueryParams
  tags?: string[]
}): Promise<QueryResponse> {
  const isDraftMode = draftMode().isEnabled
  
  if (isDraftMode && !token) {
    throw new Error('The `SANITY_API_READ_TOKEN` environment variable is required.')
  }
  
  const options = {
    next: {
      tags,
    }
  }

  if (isDraftMode) {
    return client.fetch<QueryResponse>(query, params, {
      ...options,
      token: token,
      perspective: 'previewDrafts',
    })
  }
  
  return client.fetch<QueryResponse>(query, params, options)
}
