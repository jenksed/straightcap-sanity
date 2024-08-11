import { defineType, defineField, defineArrayMember } from 'sanity';

export const review = defineType({
    name: "review",
    type: "document",
    title: "Review",
    fields: [
      defineField({
        name: "title",
        type: "string",
        title: "Title"
      }),
      defineField({
        name: "reviewedItem",
        type: "reference",
        to: [{ type: 'album' }, { type: 'musicVideo' }],
        title: "Reviewed Item"
      }),
      defineField({
        name: "content",
        type: "text",
        title: "Content"
      }),
      defineField({
        name: "rating",
        type: "number",
        title: "Rating"
      }),
    ]
  });
  