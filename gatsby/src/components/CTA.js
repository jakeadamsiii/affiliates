import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Styles = styled.div`

    .cta {
        padding: 5rem 0 0 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button {
        height: 3rem;
        line-height: 3rem;
        color: black;
        text-decoration: none;
        background: #e9561e;
        padding: 0 1rem;
        border-radius: 0.5rem;
    }

`;

export default function CTA(props) {
    return (
        <Styles>
            <section className="cta">
                <Link className="button" to={props.url}>{props.linkText}</Link>
            </section>
        </Styles>
    )
}