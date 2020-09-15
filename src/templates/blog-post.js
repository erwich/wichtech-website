import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import '../css/blog-post.css'; // make it pretty!

import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"

import Navigation from "../components/navigation"
import Inner from "../elements/inner"
import Content from "../elements/content"

import BlogPost from "../components/blog-post"

export default function Template({
  data
}) {
  const { markdownRemark: post } = data
  const offset = .1
  const factor = .5
  return (
    <div className="blog-post-container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <Layout>
        <Parallax pages={1}>
          <Navigation />
          <Content speed={0.4} offset={offset} factor={factor}>
            <Inner>
              <BlogPost
                title={ post.frontmatter.title }
                content={ post.html }
                date={ post.frontmatter.date }
              />
            </Inner>
          </Content>
        </Parallax>
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