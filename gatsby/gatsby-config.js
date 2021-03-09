import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
    siteMetadata: {
        title: `Lodges with hot tubs`,
        siteUrl: `https://www.jake-test.site`,
        description: `Best hot tubs in town!` 
    },
    plugins: [
        'gatsby-plugin-styled-components', 
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'azty0c0l',
                dataset: 'production',
                watchMode: true,
                token: process.env.SANITY_TOKEN
            }
        }
    ]
}