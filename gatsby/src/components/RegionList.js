import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image'


const Styles = styled.div`

    .regionList {
        padding: 5rem 0 0 0;
    }

`;

function SingleRegion({region}){
    return (
        <div>
            <Link to={`/${region.slug.current}`}>
                <h2>{region.name}</h2>
                <Img fixed={region.image.asset.fixed} ></Img>
            </Link>

            {region.subregions.map((subregion)=>(
                <Link key={subregion.id} to={`/${region.slug.current}/${subregion.slug.current}`}>
                    <p>{subregion.name}</p>
                </Link>
            ))}
        </div>
    )
}

export default function regionList({ regions }){
    return (
        <Styles >
            <section className="regionList">
                {regions.map((region) => (
                    <SingleRegion key={region.id} region={region}></SingleRegion>
                ))}
            </section>
        </Styles>
    )

}
