import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';

const Styles = styled.div`

    .imageCopy {
        padding: 5rem 0 0 0;
    }

    .flex {
        display: flex;
    }

    .padding {
        padding: 0 1rem;
    }

`;

export default function TextWithImage(props) {
    return (
        <Styles >
            <section className="imageCopy">
                <h2>{props.heading}</h2>
                <div className="flex">
                        <div className="padding">
                            <h3>{props.tagline}</h3>
                            <p>{props.excerpt}</p>
                        </div>
                        <Img fixed={props.image.asset.fixed}></Img>
                </div>
           </section>
        </Styles>
    )
}