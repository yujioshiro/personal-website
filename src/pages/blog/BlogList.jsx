import React from "react"
import { Link } from "gatsby";


export default function BlogList({ data }) {
  const posts = data.allMarkdownRemark.edges

  return (
    <div>
      
      <h1>Blog Posts</h1>
      {posts.map(({ node }) => (
        <div key={node.id}>
          <Link to={`/blog${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <p>{node.frontmatter.date}</p>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}