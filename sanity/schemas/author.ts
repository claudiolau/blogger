import {defineType, defineField} from 'sanity'
export default defineType({
  name: 'author',
  title: 'Author',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),

    defineField({
      name: 'occupation',
      title: 'Occupation',
      type: 'string',
      initialValue: 'Full Stack Developer',
      options: {
        list: [
          {title: 'Full Stack Developer', value: 'Full Stack Developer'},
          {title: 'Data Scientist', value: 'Data Scientist'},
          {title: 'Software Developer', value: 'Software Developer'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
})
