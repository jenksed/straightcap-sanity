import { defineType, defineField, defineArrayMember } from 'sanity';

export const group = defineType({
  name: "group",
  type: "document",
  title: "Music Group",
  fields: [
    defineField({
      name: "name",
      type: "string",
      title: "Group Name"
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: { source: "name", maxLength: 96 }
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description"
    }),
    defineField({
      name: "image",
      type: "image",
      title: "Image",
      options: { hotspot: true }
    }),
    defineField({
      name: "members",
      type: "array",
      title: "Members",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "artist" }]
        })
      ],
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
      title: "Blog Posts",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "blog" }]
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
  ],
});
