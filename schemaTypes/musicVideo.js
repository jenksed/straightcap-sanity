import { defineType, defineField } from 'sanity';

export const musicVideo = defineType({
  name: "musicVideo",
  type: "document",
  title: "Music Video",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Title"
    }),
    defineField({
      name: "url",
      type: "url",
      title: "Video URL",
      validation: Rule => Rule.required().uri({
        allowRelative: false, // Only absolute URLs
        scheme: ["http", "https"]
      })
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description"
    }),
    defineField({
      name: "thumbnail",
      type: "image",
      title: "Thumbnail",
      options: { hotspot: true }
    }),
    defineField({
      name: "artist",
      type: "reference",
      to: [{ type: 'artist' }],
      title: "Artist"
    })
  ]
});
