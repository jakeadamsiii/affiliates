import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    ul {
        list-style: none;
        background: var(--primary);
        padding: 0 1rem;
        margin: 0;
    }

    li a {
        font-size: 2rem;
        color: var(--secondary);
    }

`;

export default function Nav() {

	return (
        <NavStyles className="container ">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/region">Region</Link>
                </li>
            </ul>
        </NavStyles>
	);
}