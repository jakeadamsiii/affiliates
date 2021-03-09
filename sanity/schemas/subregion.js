import { MdLocationCity } from 'react-icons/md'

export default {
    name: 'subregion',
    title: 'Subregion',
    type: 'document',
    icon: MdLocationCity,
    fields: [
        {
            name: 'name',
            title: 'Subregion Name',
            type: 'string',
            description: 'Place name'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name'
            }
        },
        {
            name: 'image',
            title: 'Hero Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'alt',
            title: 'Alt tag',
            type: 'string',
            description: 'Image alt tag - visual description for accessabilty'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of Region',
            maxLength: 100
        },
        {
            name: 'content',
            title: 'Page Content',
            type: 'array',
            of: [
              {
                type: 'block'
              }
            ]
        }
        
    ]
};