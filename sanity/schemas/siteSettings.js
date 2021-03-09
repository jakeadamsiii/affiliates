import { GoSettings } from 'react-icons/go'

export default {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    icon: GoSettings,
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            validation: Rule => Rule.max(60).warning('Should be under 60 characters')
          },
          {
            name: 'description',
            type: 'text',
            title: 'Description',
            validation: Rule => Rule.max(155).warning('Should be under 155 characters')
          },
          {
            name: 'keywords',
            type: 'array',
            title: 'Keywords',
            of: [{type: 'string'}],
            options: {
                layout: 'tags'
            }
          },
          {
            name: 'image',
            type: 'image',
            title: 'Image',
            description: 'Facebook recommends 1200x630',
          },
          {
            type: 'color',
            name: 'primaryColor',
            title: 'Primary brand color',
            description: 'Used to generate the primary accent color.'
          },
          {
            type: 'color',
            name: 'secondaryColor',
            title: 'Secondary brand color',
            description: 'Used to generate the secondary accent color.'
          }
    ],
    preview: {
        prepare: () => ({
           title: "Site Settings"
        })
    }
};