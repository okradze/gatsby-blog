import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql, useStaticQuery } from 'gatsby'

const AUTHOR = graphql`
    query {
        site {
            siteMetadata {
                author
            }
        }
    }
`

const Head = ({ title }) => {
    const { site } = useStaticQuery(AUTHOR)

    return <Helmet title={`${title} | ${site.siteMetadata.author}`} />
}

export default Head
