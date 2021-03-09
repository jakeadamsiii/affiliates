// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-region-js": () => import("./../../../src/pages/region.js" /* webpackChunkName: "component---src-pages-region-js" */),
  "component---src-templates-region-js": () => import("./../../../src/templates/Region.js" /* webpackChunkName: "component---src-templates-region-js" */),
  "component---src-templates-subregion-js": () => import("./../../../src/templates/Subregion.js" /* webpackChunkName: "component---src-templates-subregion-js" */)
}

