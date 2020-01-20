import { Link } from 'gatsby'
import React from 'react'

const Footer = () => (
  <footer className="bg-brown-100 px-4  sm:px-8 xxl:px-56">
    © {new Date().getFullYear()}, Built with
    {` `}
    <Link to="https://www.gatsbyjs.org">Gatsby</Link>
  </footer>
)

export default Footer
