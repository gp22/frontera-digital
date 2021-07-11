import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ReadyToChat from "../components/readytochat"

const PageTemplate = ({ data }) => {
  const title = data.markdownRemark.frontmatter.title
  const html = data.markdownRemark.html

  return (
    <Layout className="wrapper">
      <Seo title={title} />
      <div className="entry-content py-10">
        <h1 className="mb-8">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {(title === "About" ||
        title === "Services" ||
        title === "For Agencies") && <ReadyToChat />}
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
