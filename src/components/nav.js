import { Link } from 'gatsby'
import React from 'react'

const Nav = () => (
  <nav role="navigation" className="flex justify-between mb-12  md:mb-20">
    <Link className="font-display font-bold text-lg" to="/">
      Paul Garcia
    </Link>
    <span>
      <Link className="mr-6 text-blue-500 border-b-2" to="#about">
        about
      </Link>
      <Link
        className="bg-blue-500 px-3 rounded-full text-blue-100"
        to="#contact"
      >
        contact
      </Link>
    </span>
  </nav>
)

export default Nav
