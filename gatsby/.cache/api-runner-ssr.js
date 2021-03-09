var plugins = [{
      plugin: require('/Users/jakeadams/Documents/affilaites/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/jakeadams/Documents/affilaites/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"azty0c0l","dataset":"production","watchMode":true,"token":"skYGQioG0oFCikdzC8WagphcQpht6SMo5YmLIKgHeCwitJUCIcqltzWI4uCN1amTArGRfbD4msPrK7JqnpNwNqtGqUrJEeWrAdJglbbHzXKShvTInIYJKTKe2RFMkPP9n0Fg3NSVKLNewIEomV8keNcpXDLVy8W6fvqQ962KXvw55rTx891W"},
    },{
      plugin: require('/Users/jakeadams/Documents/affilaites/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
