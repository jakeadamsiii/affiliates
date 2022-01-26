import path from 'path';
import fs from 'fs';
import fse from 'fs-extra';

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

// post build move public folders
exports.onPostBuild = function() {
    fs.renameSync(path.join(__dirname, 'public'), path.join(__dirname, 'public-blog'));
    fs.mkdirSync(path.join(__dirname, 'public'));
    fs.renameSync(path.join(__dirname, 'public-blog'), path.join(__dirname, 'public', 'blog'));
};

exports.onCreateDevServer = function() {
    if (process.env.APP_ENV === "VH") {
        // delete src/pages 
        fse.removeSync(path.join(__dirname, 'src/pages'));
        // copy src/vh-pages
        // fse.copySync(path.join(__dirname, 'src/vh-pages'), path.join(__dirname, 'src/tmp/'), function (err) {
        //     if (err) {                 
        //       console.error("error: ", err);     
        //     } else {
        //       console.log("success!");
        //     }
        // });
        // rename src/vh-pages to src/pages
        fs.renameSync(path.join(__dirname, 'src/vh-pages'), path.join(__dirname, 'src/pages'));
        //rename copy of src/vh-pages to src/vh-pages
    } else if (process.env.APP_ENV === "LWHT") {
        console.log('hello lwht');
    }
}

// pre build move src folders
exports.onPreBootstrap = function() {

}

export async function createPages(params) {

    await turnRegionsIntoPages(params);

    await turnSubregionsIntoPages(params);
}