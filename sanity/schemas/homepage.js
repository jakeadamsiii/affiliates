import { AiFillHome } from 'react-icons/ai'

export default {
    name: 'homepage',
    title: 'Home Page',
    type: "document",
    icon: AiFillHome,
    fields: [
      {
        name: 'pageBuilder',
        type: 'array',
        title: 'Page builder',
        of: [
          { type: 'hero' }, // hero.js (same applies for the other types)
          { type: 'textWithIllustration' },
          { type: 'callToAction' },
          { type: 'gallery' }
          // etc...
          ]
      }
    ],
    preview: {
        prepare: () => ({
           title: "Home Page"
        })
    }
  }