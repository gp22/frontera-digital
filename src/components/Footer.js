import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer>
    © {new Date().getFullYear()}, Built with
    {` `}
    <Link to="https://www.gatsbyjs.org">Gatsby</Link>
  </footer>
)

export default Footer
