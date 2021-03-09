import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import SEO from './SEO.js';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';


export default function Layout({ children, data }) {

    var settings = data.settings.nodes[0];

    return (
        <>
            <SEO {...settings}/>
            <GlobalStyles {...settings}/>
            <Nav />
            { children }
            <Footer />
        </>
    )
}