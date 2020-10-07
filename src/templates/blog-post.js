import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import '../css/blog-post.css'; // make it pretty!

import {
  Container,
  Row,
  Col,
} from "reactstrap"

import Layout from "../components/layout"
import Navigation from "../components/navigation"
import BlogPost from "../components/blog-post"

export default function Template({
  data
}) {
  const { markdownRemark: post } = data
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <Layout>
        <Navigation />
        <Container>
          <Row>
            <Col>
              <BlogPost
                title={ post.frontmatter.title }
                content={ post.html }
                date={ post.frontmatter.date }
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`