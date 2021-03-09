import React from 'react';
import { graphql } from 'gatsby';
import Hero from '../components/Hero.js'
import TextWithImage from '../components/TextWithImage.js'
import Gallery from '../components/Gallery.js'
import CTA from '../components/CTA.js'
import RegionList from '../components/RegionList.js'


export default function HomePage({data}) {

	const regions = data.regions.nodes;
	const home = data.home.pageBuilder;

	const content = (home || [])
    .map((c, i) => {
      let el = null;
      switch (c._type) {
        case "hero":
			el = <Hero key={c._key} {...c} />;
          break;
        case "textWithIllustration":
		  el = <TextWithImage key={c._key} {...c} />
          break;
        case "gallery":
		  el = <Gallery key={c._key} {...c} />
          break;
        case "callToAction":
			el = <CTA key={c._key} {...c} />
          break;
        default:
          el = null;
      }
      return el;
    });

	return (
		<>
			<section className="container page pad">
				{content}
				<RegionList regions={regions}></RegionList>
			</section>
		</>
	);
}

export const query = graphql`
	query homeQuery {
		regions: allSanityRegion {
			nodes {
				name
				id
				image{
					asset{
						fixed( width: 400, height: 400) {
							...GatsbySanityImageFixed
						}
					}
				}
				alt
				slug {
					current
				}
				subregions {
					name
					id
					slug {
						current
					}
				}
			}
		}
		logo: sanityLogo {
			image {
				asset {
					fixed(width: 150) {
						...GatsbySanityImageFixed
					}
				}
			}
			
		}
		home: sanityHomepage {
			pageBuilder {
			... on SanityCallToAction {
				_key
				_type
				linkText
				url
			}
			... on SanityGallery {
				_key
				_type
				images {
				asset {
					fixed( width: 400, height: 400) {
							...GatsbySanityImageFixed
					}
				}
				}
			}
			... on SanityHero {
				_key
				_type
				heading
				tagline
				image {
				asset {
					fluid(maxWidth: 1200) {
							...GatsbySanityImageFluid
						}
				}
				}
			}
			... on SanityTextWithIllustration {
				_key
				_type
				excerpt
				heading
				image {
				asset {
					fixed( width: 400, height: 400) {
						...GatsbySanityImageFixed
					}
				}
				}
				tagline
			}
			}
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
