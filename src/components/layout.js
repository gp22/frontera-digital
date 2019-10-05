import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="grid">
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
