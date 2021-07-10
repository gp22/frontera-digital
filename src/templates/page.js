import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const PageTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <Layout className="wrapper">
      <Seo title={title} />
      <div className="entry-content">
        {title !== "Home" && <h1 className="text-5xl mt-0 mb-8">{title}</h1>}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
        path
      }
    }
  }
`

export default PageTemplate
