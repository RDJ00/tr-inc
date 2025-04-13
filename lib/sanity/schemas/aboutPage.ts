/**
 * Sanity Schema for the About Page
 */

export const aboutPage = {
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    // Hero section
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'The main title displayed in the hero section',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      description: 'The subtitle displayed below the main title in the hero section',
    },
    {
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      description: 'Background image for the hero section',
      options: {
        hotspot: true,
      },
    },
    
    // Intro section
    {
      name: 'introParagraph',
      title: 'Intro Paragraph',
      type: 'text',
      description: 'The introductory paragraph displayed below the hero section',
      validation: (Rule: any) => Rule.required(),
    },
    
    // Our Story section
    {
      name: 'ourStoryTitle',
      title: 'Our Story Section Title',
      type: 'string',
      description: 'The title for the Our Story section',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ourStoryContent',
      title: 'Our Story Content',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Paragraphs for the Our Story section (each item will be a separate paragraph)',
      validation: (Rule: any) => Rule.required().min(1),
    },
    
    // Team section
    {
      name: 'teamSectionTitle',
      title: 'Team Section Title',
      type: 'string',
      description: 'The title for the Meet the Team section',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'teamSectionDescription',
      title: 'Team Section Description',
      type: 'text',
      description: 'A brief description of the team displayed below the section title',
    },
    {
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Position/Title',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'bio',
              title: 'Biography',
              type: 'text',
              description: 'A brief description of the team member',
            },
            {
              name: 'joinYear',
              title: 'Year Joined',
              type: 'string',
              description: 'The year when the team member joined (optional)',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              description: 'Profile photo of the team member',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'title',
              media: 'image',
            },
          },
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    
    // Call to action section
    {
      name: 'ctaTitle',
      title: 'CTA Section Title',
      type: 'string',
      description: 'The title for the call-to-action section',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'ctaDescription',
      title: 'CTA Description',
      type: 'text',
      description: 'The description text for the call-to-action section',
    },
    {
      name: 'ctaButtons',
      title: 'CTA Buttons',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Button Label',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'link',
              title: 'Button Link',
              type: 'string',
              description: 'URL or path the button links to',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'variant',
              title: 'Button Variant',
              type: 'string',
              options: {
                list: [
                  { title: 'Primary', value: 'primary' },
                  { title: 'Secondary', value: 'secondary' },
                  { title: 'Outline', value: 'outline' },
                ],
              },
              validation: (Rule: any) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'variant',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heroTitle',
    },
    prepare({ title }: { title: string }) {
      return {
        title: title || 'About Page',
      };
    },
  },
}; 