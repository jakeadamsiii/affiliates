import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';

const Styles = styled.div`

    .hero {
        padding: 2rem 0 0 0;
    }

`;

export default function Hero(props) {
    return (
        <Styles>
            <section className="hero">
                <h1>{props.heading}</h1>
                <p>{props.tagline}</p>
                <Img fluid={props.image.asset.fluid}></Img>
            </section>
        </Styles>
    )
}