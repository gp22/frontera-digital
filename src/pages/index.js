import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Main from '../components/main'
import Features from '../components/features'
import Qualify from '../components/qualify'

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main />
      <Features />
      <Qualify />
    </Layout>
  )
}

export default IndexPage
