import React from 'react';
import Img from 'gatsby-image'
import styled from 'styled-components';

const Styles = styled.div`

    .gallery {
        padding: 5rem 0 0 0;
        display: flex;
    }

`;

export default function Gallery(props) {
    return (
        <Styles>
            <section className="gallery">
                {props.images.map((image, i)=>(
                    <Img key={i} fixed={image.asset.fixed}></Img>
                ))}
            </section>
        </Styles>
    )
}