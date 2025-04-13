/**
 * Sanity Schema for Events
 */

export const eventSchema = {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Event Title',
      type: 'string',
      description: 'The title of the event',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for the event',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Event Image',
      type: 'image',
      description: 'The main image for the event',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
      description: 'The date and time of the event',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'The end date and time of the event (for multi-day events)',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Where the event will take place',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'A brief description of the event (for cards and previews)',
      validation: (Rule: any) => Rule.required().max(200),
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The full description of the event with rich text formatting',
    },
    {
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming', value: 'upcoming' },
          { title: 'Past', value: 'past' },
          { title: 'Cancelled', value: 'cancelled' },
        ],
        layout: 'radio',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Conferences', value: 'Conferences' },
          { title: 'Fundraisers', value: 'Fundraisers' },
          { title: 'Outreach', value: 'Outreach' },
          { title: 'Workshops', value: 'Workshops' },
          { title: 'Global Missions', value: 'Global Missions' },
        ],
      },
      description: 'Tags to categorize the event',
    },
    {
      name: 'registerLink',
      title: 'Registration Link',
      type: 'url',
      description: 'External link for registration or ticket purchase',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare({ title, subtitle, media }: { title: string, subtitle: Date, media: any }) {
      const formattedDate = subtitle ? new Date(subtitle).toLocaleDateString() : '';
      return {
        title,
        subtitle: formattedDate,
        media,
      };
    },
  },
}; 