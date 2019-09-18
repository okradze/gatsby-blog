import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { graphql, useStaticQuery, Link } from 'gatsby'
import styles from './blog.module.scss'

const BLOGS = graphql`
    query MyQuery {
        allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
            edges {
                node {
                    title
                    publishedDate(formatString: "MMMM Do, YYYY")
                    slug
                }
            }
        }
    }
`

const BlogPage = () => {
    const data = useStaticQuery(BLOGS)

    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <ol className={styles.posts}>
                {data.allContentfulBlogPost.edges.map(edge => (
                    <li className={styles.post}>
                        <Link to={`/blog/${edge.node.slug}`}>
                            <h2>{edge.node.title}</h2>
                            <p>{edge.node.publishedDate}</p>
                        </Link>
                    </li>
                ))}
            </ol>
        </Layout>
    )
}

export default BlogPage
