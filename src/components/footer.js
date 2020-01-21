import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <footer className="bg-brown-100">
    <div className="content-wrapper mx-auto px-4  lg:px-12">
      © {new Date().getFullYear()}, Built with
      {` `}
      <Link to="https://www.gatsbyjs.org">Gatsby</Link>
    </div>
  </footer>
)

export default Footer
