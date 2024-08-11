import { defineType, defineField, defineArrayMember } from 'sanity'

export const album = defineType({
    name: "album",
    type: "document",
    title: "Album",
    fields: [
      defineField({
        name: "title",
        type: "string",
        title: "Title"
      }),
      defineField({
        name: "releaseDate",
        type: "date",
        title: "Release Date"
      }),
      defineField({
        name: "coverImage",
        type: "image",
        title: "Cover Image"
      }),
      defineField({
        name: "tracks",
        type: "array",
        title: "Tracks",
        of: [defineArrayMember({ type: "reference", to: [{ type: "musicVideo" }] })]
      }),
      defineField({
        name: "artists",
        type: "array",
        title: "Artists",
        of: [defineArrayMember({ type: "reference", to: [{ type: "artist" }] })]
      }),
    ]
  });
  