import * as React from "react";
import { graphql } from "gatsby";
import Layout from './../../components/Layout.jsx'

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <div>
        <h1>{frontmatter.title}</h1>
        <h6>{frontmatter.lastUpdated === "N/A" || ""? <span>uploaded: {frontmatter.date}</span> : <span>revised: {frontmatter.lastUpdated} (uploaded: {frontmatter.date})</span>}</h6>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`