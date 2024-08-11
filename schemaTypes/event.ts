import { defineType, defineField, defineArrayMember } from 'sanity'

export const event = defineType({
  name: 'event',
  type: 'document',
  title: 'Event',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      title: 'Date'
    }),
    defineField({
      name: 'location',
      type: 'string',
      title: 'Location'
    }),
    defineField({
      name: 'artists',
      type: 'array',
      title: 'Artists',
      of: [defineArrayMember({
        type: 'reference',
        to: [{ type: 'artist' }]
      })]
    })
  ]
});
