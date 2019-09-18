import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body {
                json
            }
        }
    }
`

const Blog = ({ data: { contentfulBlogPost } }) => {
    return (
        <Layout>
            <Head title={contentfulBlogPost.title} />
            <h1>{contentfulBlogPost.title}</h1>
            <p>{contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(contentfulBlogPost.body.json, {
                renderNode: {
                    'embedded-asset-block': ({ data }) => {
                        return (
                            <img
                                src={data.target.fields.file['en-US'].url}
                                alt={data.target.fields.title['en-US']}
                            />
                        )
                    },
                },
            })}
        </Layout>
    )
}

export default Blog
