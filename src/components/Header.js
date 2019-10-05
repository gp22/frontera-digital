import PropTypes from 'prop-types'
import React from 'react'
import Hero from './hero'
import Nav from './nav'

const Header = () => (
  <header>
    <Nav />
    <Hero />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
