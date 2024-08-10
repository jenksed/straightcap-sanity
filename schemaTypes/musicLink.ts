import { defineType, defineField } from 'sanity'

export const musicLink = defineType({
  type: "object",
  name: "musicLink",
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
    defineField({
      type: "url",
      name: "url",
    }),
  ],
});

