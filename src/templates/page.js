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
      <div className="wrapper entry-content pt-10">
        <h1 className="mb-8">{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      {title === "About" && (
        <Testimonial
          business="Garnet Creative"
          cite="Karen Pasternack Straus"
          className="mt-24"
          image={
            <StaticImage
              src="../images/Karen_Straus.jpg"
              width={140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Karen Straus"
              className="rounded-full"
            />
          }
          link="https://garnetcreative.com/"
          text="I'm very pleased with Paul's work. He has a thorough knowledge of CSS and WordPress, and was willing to learn new tools to accomplish what I needed. I especially appreciated his clear communication and transparency about his progress. He beautifully completed the project on time with little supervision. I look forward to working with Paul again soon."
        />
      )}
      {title === "For Agencies" && (
        <Testimonial
          business="1558 Brand Agency"
          cite="Meredith Chase"
          className="mt-24"
          image={
            <StaticImage
              src="../images/Meredith_Chase.jpg"
              width={140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Meredith Chase"
              className="rounded-full"
            />
          }
          link="https://1558brand.com/"
          text="Paul has been a joy to work with. As an agency owner, I’m looking for team members who will hold themselves to my high standards and Paul definitely meets this requirement. He is thoughtful, always considering ways to do things better with a client-first focus. He is timely and does what he says he is going to do on time – if not sooner. And he’s very knowledgeable in web development. We look forward to our continued relationship with Paul."
        />
      )}
      {title === "Services" && (
        <Testimonial
          business="G3 Creative"
          cite="Vince Giuseffi"
          className="mt-24"
          image={
            <StaticImage
              src="../images/Vince_Giuseffi.jpg"
              width={140}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Vince Giuseffi"
              className="rounded-full"
            />
          }
          link="https://g3creative.com/"
          text="Working with Paul is great! We had some complex issues dealing with ADA Compliance and mobile phone user experience on a website project. Paul was able to seamlessly integrate with our team and fix the issues. Paul is knowledgeable and has helped us with several WordPress development projects. Paul is a great communicator and easy to work with. We are glad to have him as an expert resource."
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
