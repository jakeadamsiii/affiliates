import { BsFillImageFill } from 'react-icons/bs'

export default {
    name: 'logo',
    title: 'Logo',
    type: 'document',
    icon: BsFillImageFill,
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: false
            }
        }
    ],
    preview: {
        prepare: () => ({
           title: "Logo"
        })
    }
};