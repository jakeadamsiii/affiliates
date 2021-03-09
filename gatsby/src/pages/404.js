import React from 'react';
import { graphql } from 'gatsby';

export default function ErrorPage({data}) {

	return (
		<>
			<section className="container page">
				<h1>404 - Oops something went wrong!</h1>
			</section>
		</>
	);
}


export const query = graphql`
	query errorQuery {
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