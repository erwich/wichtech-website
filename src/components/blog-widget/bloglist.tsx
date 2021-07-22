import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import { useColorMode } from "theme-ui"

import {
  Container,
  Row,
  Col,
  Jumbotron,
} from "reactstrap"

import BlogCard from "./blogcard"

/*
post.id, post.formatter.title, post.frontmatter.date, post.frontmatter.excerpt
*/


// import '../css/index.css'; // add some style if you want!
const BlogList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const [colorMode, setColorMode] = useColorMode()
  return (
    <Container>
        <Jumbotron
            className={ colorMode == "dark" ? "bg-dark" : "bg-light" }
        >
            <h1>Blog Posts</h1>
        </Jumbotron>      
        <Row>
          <Col>
            <ul>
            {posts
              .filter(post => post.node.frontmatter.title.length > 0)
              .map(({ node: post }) => {
                return (
                  <li>
                    <BlogCard
                      id={ post.id }
                      title={ post.frontmatter.title }
                      date={ post.frontmatter.date }
                      excerpt={ post.frontmatter.date }
                      path={ post.frontmatter.path }
                    />
                  </li>
                )
              })}
            </ul>        
          </Col>
      </Row>
    </Container>
  )
}

export default BlogList