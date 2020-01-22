import { Link } from 'gatsby'
import React from 'react'

import Chevron from './chevron'

const Nav = () => (
  <nav role="navigation" className="flex justify-between mb-12  lg:mb-20">
    <Link className="font-display font-bold text-lg" to="/">
      Paul Garcia
    </Link>
    <span className="text-sm">
      <Link className="mr-6 text-blue-500 border-b-2" to="#about">
        about
      </Link>
      <Link
        className="pr-4 pl-3 relative rounded-full text-blue-100  gradient"
        to="#contact"
      >
        <span className="mr-1">contact</span>
        <Chevron className="absolute chevron" />
      </Link>
    </span>
  </nav>
)

export default Nav
