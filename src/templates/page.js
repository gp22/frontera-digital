import React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ReadyToChat from "../components/readytochat"
import Testimonial from "../components/testimonial"

const PageTemplate = ({ data }) => {
  const { title } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <Layout>
      <Seo title={title} />
      <div className="wrapper entry-content py-10">
        <h1 className="mb-8">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {title === "For Agencies" && (
        <Testimonial
          cite="Meredith Chase, 1558 Brand Agency"
          image={
            <StaticImage
              src="../images/Meredith_Chase.jpg"
              width={140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Chris Handsel"
              className="rounded-full"
            />
          }
          text="Paul has been a joy to work with. As an agency owner, I’m looking for team members who will hold themselves to my high standards and Paul definitely meets this requirement. He is thoughtful, always considering ways to do things better with a client-first focus. He is timely and does what he says he is going to do on time – if not sooner. And he’s very knowledgeable in web development. We look forward to our continued relationship with Paul."
        />
      )}
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
