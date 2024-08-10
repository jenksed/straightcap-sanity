import { defineType, defineField, defineArrayMember } from 'sanity'

export const rapper = defineType({
  type: "document",
  name: "rapper",
  fields: [
    defineField({
      type: "string",
      name: "name",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "name" },
    }),
    defineField({
      type: "array",
      name: "bio",
      of: [
        defineArrayMember({
          type: "block",
        }),
      ],
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "musicLinks",
      of: [
        defineArrayMember({
          type: "musicLink",
        }),
      ],
    }),
    defineField({
      type: "array",
      name: "blogs",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "blog" }],
        }),
      ],
    }),
  ],
});

