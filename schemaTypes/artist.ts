import { defineType, defineField, defineArrayMember } from 'sanity';

export const artist = defineType({
  name: "artist",
  type: "document",
  title: "Artist",
  fields: [
    defineField({
      name: "owner",
      type: "reference",
      title: "Owner",
      to: [{ type: "user" }],  // Reference to the 'user' schema
      description: "The user who owns this artist profile"
    }),
    defineField({
      name: "name",
      type: "string",
      title: "Name"
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 }
    }),
    defineField({
      name: "artistType",
      type: "string",
      title: "Artist Type",
      options: {
        list: [
          { title: "Rapper", value: "rapper" },
          { title: "Producer", value: "producer" }
        ],
      }
    }),
    defineField({
      name: "bio",
      type: "array",
      title: "Biography",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
          marks: {
            decorators: [{ title: 'Strong', value: 'strong' }, { title: 'Emphasis', value: 'italic' }],
            annotations: []
          }
        }),
      ],
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true }
    }),
    defineField({
      name: "musicLinks",
      type: "array",
      title: "Music Links",
      of: [
        defineArrayMember({
          type: "musicLink",
        }),
      ],
    }),
    defineField({
      name: "musicVideos",
      type: "array",
      title: "Music Videos",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "musicVideo" }]
        }),
      ],
    }),
    defineField({
      name: "blogs",
      type: "array",
      title: "Related Blogs",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "blog" }],
        }),
      ],
    }),
    defineField({
      name: "linkedArticles",
      type: "array",
      title: "Linked Articles",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "article" }]
        }),
      ],
    }),
    defineField({
      name: "interviews",
      type: "array",
      title: "Interviews",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "interview" }]  // Ensure you define an 'interview' schema
        }),
      ],
    }),
    defineField({
      name: "groups",
      type: "array",
      title: "Music Groups",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "group" }]  // Ensure you define a 'group' schema
        }),
      ],
    }),
    defineField({
      name: "albums",
      type: "array",
      title: "Albums",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "album" }]  // Ensure you define an 'album' schema
        }),
      ],
    }),
    defineField({
      name: "events",
      type: "array",
      title: "Upcoming Events",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "event" }]  // Ensure you define an 'event' schema
        }),
      ],
    }),
  ],
});
