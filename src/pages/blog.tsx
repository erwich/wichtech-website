import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import BlogList from "../components/blog-widget/bloglist"
import Navigation from "../components/navigation"

import { graphql } from "gatsby"

const Blog = ({ data }) => (
    <Layout>
      <Parallax pages={5}>
        <Navigation />
        <BlogList data={data} />
      </Parallax>
    </Layout>
)

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`

export default Blog