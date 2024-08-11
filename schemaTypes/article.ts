import { defineType, defineField, defineArrayMember } from 'sanity'

export const article = defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title'
    }),
    defineField({
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'linkedArtists',
      type: 'array',
      title: 'Linked Artists',
      of: [defineArrayMember({
        type: 'reference',
        to: [{ type: 'artist' }]
      })]
    })
  ]
});
