import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const AUTHOR = graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`

const Footer = () => {
    const { site } = useStaticQuery(AUTHOR)

    return (
        <footer>
            <p>Created by {site.siteMetadata.author} &copy;</p>
        </footer>
    )
}

export default Footer
