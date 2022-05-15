import React from "react";
import { useStaticQuery,Link,graphql } from "gatsby";
import { NavWrapper } from "../elements/NavElements";

export const Nav = () =>{

    const data = useStaticQuery(graphql`
        query{
            logo:file(relativePath:{eq:"logo.png"}){
                publicURL
            }
        }
    `)

    return(
        <NavWrapper>
            <Link to="/">
                <img src={data.logo.publicURL} alt="website logo" />
            </Link>
        </NavWrapper>
    )
}