import { MdPlace } from 'react-icons/md'

export default {
    name: 'region',
    title: 'Region',
    type: 'document',
    icon: MdPlace,
    fields: [
        {
            name: 'name',
            title: 'Region Name',
            type: 'string',
            description: 'Name of the region'
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
        },
        {
            name: 'subregions',
            title: 'Subregions',
            type: 'array',
            of: [{type: 'reference', to: [{type: 'subregion'}]}]
        }
        
    ]
};