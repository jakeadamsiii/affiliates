import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
    ul {
        list-style: none;
        padding: 0;
    }

`;

export default function Nav() {

	return (
        <NavStyles className="container pad">
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