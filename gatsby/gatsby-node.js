import path from 'path';

async function turnRegionsIntoPages({ graphql, actions}) {

    const regionTemplate = path.resolve('./src/templates/Region.js');
    const { data } = await graphql(`
        query {
            regions: allSanityRegion {
                nodes {
                    name
                    id
                    slug {
                        current
                    }
                }
            }
        }
  `);

    data.regions.nodes.forEach((region) => {
        actions.createPage({
          path: `${region.slug.current}`,
          component: regionTemplate,
          context: {
            slug: region.slug.current,
            id: region.id
          },
        });
    });
}


async function turnSubregionsIntoPages({ graphql, actions}) {

    const subregionTemplate = path.resolve('./src/templates/Subregion.js');
    const { data } = await graphql(`
        query {
            regions: allSanityRegion {
                nodes {
                    name
                    id
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
        }
  `);

    data.regions.nodes.forEach((region) => {
        region.subregions.forEach((subregion) => {
            actions.createPage({
                path: `${region.slug.current}/${subregion.slug.current}`,
                component: subregionTemplate,
                context: {
                  slug: subregion.slug.current,
                  id: subregion.id
                },
              });
        })

    });
}



export async function createPages(params) {

    await turnRegionsIntoPages(params);

    await turnSubregionsIntoPages(params);
}