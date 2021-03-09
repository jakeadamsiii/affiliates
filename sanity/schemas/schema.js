// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
// Then we give our schema to the builder and provide the result to Sanity

import logo from "./logo";
import region from "./region";
import subregion from "./subregion";
import footer from "./footer";
import homepage from "./homepage";
import siteSettings from "./siteSettings";

//objects
import hero from "./hero";
import gallery from "./gallery";
import callToAction from "./callToAction";
import textWithIllustration from "./textWithIllustration";

export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([siteSettings, logo, region, subregion, homepage, hero, gallery, textWithIllustration, callToAction, footer]),
});
