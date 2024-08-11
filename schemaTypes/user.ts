import { defineType, defineField } from 'sanity';

export const user = defineType({
  name: 'user',
  type: 'document',
  title: 'User',
  fields: [
    defineField({
      name: 'username',
      type: 'string',
      title: 'Username'
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Email'
    }),
    defineField({
      name: 'role',
      type: 'string',
      title: 'Role',
      options: {
        list: [
          { title: 'Admin', value: 'admin' },
          { title: 'Owner', value: 'owner' },
          { title: 'User', value: 'user' }
        ], // Defines roles as an option list
        layout: 'dropdown'
      }
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Profile Image'
    })
  ]
});
