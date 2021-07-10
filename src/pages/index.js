import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Bio from "../components/bio"
import CaseStudy from "../components/casestudy"
import ReadyToChat from "../components/readytochat"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Bio />
    <CaseStudy />
    <Testimonial />
    <ReadyToChat />
  </Layout>
)

export default IndexPage
