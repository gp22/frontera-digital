import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Bio from "../components/bio"
import CaseStudy from "../components/casestudy"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Bio />
    <CaseStudy />
    <Testimonial />
  </Layout>
)

export default IndexPage
