import { defineType, defineField, defineArrayMember } from 'sanity';

export const interview = defineType({
    name: "interview",
    type: "document",
    title: "Interview",
    fields: [
      defineField({
        name: "subject",
        type: "reference",
        to: [{ type: 'artist' }],
        title: "Interviewee"
      }),
      defineField({
        name: "date",
        type: "datetime",
        title: "Date of Interview"
      }),
      defineField({
        name: "content",
        type: "array",
        title: "Content",
        of: [{ type: "block" }]
      }),
    ]
  });
  