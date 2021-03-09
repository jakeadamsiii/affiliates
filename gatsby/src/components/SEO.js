import React from 'react';
import Helmet from "react-helmet";


export default function SEO(props) {
    
    return (
        <>
            <Helmet
                title={props.title}
                meta={[
                    {
                      name: "description",
                      content: props.description
                    },
                    {
                      property: "og:title",
                      content: props.title
                    },
                    {
                      property: "og:description",
                      content: props.description
                    },
                  ]
                    .concat(
                      props.keywords && props.keywords.length > 0 ? {
                            name: "keywords",
                            content: props.keywords.join(", ")
                          }
                        : []
                    )
                    .concat()}
            />
        </>
    )
}