import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function RegionPage({data}) {

	return (
		<>
			<section className="container page pad">
				<h1>Region</h1>
			</section>
		</>
	);
}

export const query = graphql`
	query regionQuery {
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
