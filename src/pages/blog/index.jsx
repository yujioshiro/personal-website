import React from 'react';
import Layout from '../../components/Layout';
import BlogList from './BlogList';
import { graphql } from "gatsby"

export default function IndexPage({ data }) {
  return (
    <Layout>
      <BlogList data={data} />
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
