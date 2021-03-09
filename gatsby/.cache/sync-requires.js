const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/jakeadams/Documents/affilaites/gatsby/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jakeadams/Documents/affilaites/gatsby/src/pages/index.js"))),
  "component---src-pages-region-js": hot(preferDefault(require("/Users/jakeadams/Documents/affilaites/gatsby/src/pages/region.js"))),
  "component---src-templates-region-js": hot(preferDefault(require("/Users/jakeadams/Documents/affilaites/gatsby/src/templates/Region.js"))),
  "component---src-templates-subregion-js": hot(preferDefault(require("/Users/jakeadams/Documents/affilaites/gatsby/src/templates/Subregion.js")))
}

