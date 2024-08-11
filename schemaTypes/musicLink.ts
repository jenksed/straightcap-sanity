import { defineType, defineField } from 'sanity'

export const musicLink = defineType({
  name: "musicLink",
  type: "object",
  title: "Music Link",
  fields: [
    defineField({
      name: "platform",
      type: "string",
      title: "Platform",
      options: {
        list: [
          { title: "Spotify", value: "spotify" },
          { title: "Apple Music", value: "appleMusic" },
          { title: "SoundCloud", value: "soundCloud" },
          { title: "YouTube", value: "youtube" },
          { title: "Bandcamp", value: "bandcamp" },
          { title: "Tidal", value: "tidal" },
          { title: "Amazon Music", value: "amazonMusic" },
          // Add other platforms as needed
        ],
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: "url",
      type: "url",
      title: "URL",
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https'], // Only allow http and https schemes for security reasons
        allowRelative: false // Do not allow relative URLs
      })
    }),
  ],
});
