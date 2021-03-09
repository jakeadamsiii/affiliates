import React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import Img from 'gatsby-image'

export default function singleRegionPage({data}) {


    return(
        <>
            <section className="container pad page">
                <p>{data.region.name}</p>
                <Img fixed={data.region.image.asset.fixed} ></Img>
                <ul>
                    {data.region.subregions.map((subregion)=>(
                    <li key={subregion.id}>
                        <Link  to={`/${data.region.slug.current}/${subregion.slug.current}`}>
                            <p>{subregion.name}</p>
                        </Link>
                    </li>
                ))}
                </ul>
            </section>
        </>
    )
}

export const query = graphql`
	query($slug: String!) {
        region: sanityRegion( slug: { current: { eq: $slug } }) {
            name
            image {
				asset {
					fixed(width: 150) {
						...GatsbySanityImageFixed
					}
				}
			}
            slug {
                    current
                }
			alt
            subregions {
                name
                id
                slug {
                    current
                }
            }
        }
	}
`