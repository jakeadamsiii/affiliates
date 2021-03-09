import React from 'react';
import Nav from './Nav.js';
import Footer from './Footer.js';
import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';


export default function Layout({ children, data }) {

    return (
        <>
            <GlobalStyles />
            <Nav />
            { children }
            <Footer />
        </>
    )
}