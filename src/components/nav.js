import { Link } from 'gatsby'
import React from 'react'

import Chevron from './svg/chevron'

const Nav = () => (
  <nav role="navigation" className="flex justify-between mb-12  lg:mb-20">
    <Link className="font-display font-bold text-lg" to="/">
      Paul Garcia
    </Link>
    <span className="text-sm">
      <a className="mr-6 text-blue-500 border-b-2" href="#about">
        about
      </a>
      <a
        className="pr-4 pl-3 relative rounded-full text-blue-100  gradient"
        href="#footer"
      >
        <span className="mr-1 font-bold">contact</span>
        <Chevron className="absolute chevron" />
      </a>
    </span>
  </nav>
)

export default Nav
