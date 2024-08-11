import { defineType, defineField, defineArrayMember } from 'sanity'

export const blog = defineType({
  type: "document",
  name: "blog",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "slug",
      name: "slug",
      options: { source: "title" },
    }),
    defineField({
      type: "reference",
      name: "author",
      to: [{ type: "artist" }],
    }),
    defineField({
      type: "datetime",
      name: "publishedAt",
    }),
    defineField({
      type: "image",
      name: "image",
      options: { hotspot: true },
    }),
    defineField({
      type: "array",
      name: "content",
      of: [
        defineArrayMember({
          type: "block",
        }),
        defineArrayMember({
          type: "image",
          fields: [
            {
              type: "string",
              name: "caption",
            },
          ],
          options: { hotspot: true },
        }),
      ],
    }),
  ],
});

