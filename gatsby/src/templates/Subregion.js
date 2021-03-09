import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

export default function singleSubregionPage({data}) {

    return(
        <>
            <section className="container pad page">
                <h1>{data.subregion.name}</h1>
            </section>
        </>
    )
}

export const query = graphql`
	query($slug: String!) {
        subregion: sanitySubregion( slug: { current: { eq: $slug } }) {
            name
        }
        settings: allSanitySettings {
			nodes {
			description
			id
			image {
				asset {
				fixed(height: 400, width: 400) {
					base64
					srcWebp
					srcSetWebp
				}
				}
			}
			keywords
			primaryColor {
				hex
			}
			secondaryColor {
				hex
			}
			title
			}
		}
	}
`