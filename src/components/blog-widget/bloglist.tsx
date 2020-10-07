import React from "react"
import { Link, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import BlogCard from "./blogcard"

/*
post.id, post.formatter.title, post.frontmatter.date, post.frontmatter.excerpt
*/


// import '../css/index.css'; // add some style if you want!
const BlogList = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div className="blog-posts">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <BlogCard
              id={ post.id }
              title={ post.frontmatter.title }
              date={ post.frontmatter.date }
              excerpt={ post.frontmatter.date }
              path={ post.frontmatter.path }
            />
          )
        })}
    </div>
  )
}

export default BlogList