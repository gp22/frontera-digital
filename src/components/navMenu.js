import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavMenu = ({ className }) => (
  <ul className={`flex uppercase font-bold tracking-wider ${className}`}>
    <li>
      <Link to="/about" className="text-black no-underline inline-block p-5">
        About
      </Link>
    </li>
    <li>
      <Link to="/services" className="text-black no-underline inline-block p-5">
        Services
      </Link>
    </li>
    <li>
      <Link
        to="/for-agencies"
        className="text-black no-underline inline-block p-5"
      >
        For Agencies
      </Link>
    </li>
    <li>
      <Link to="/contact" className="text-black no-underline inline-block p-5">
        Contact
      </Link>
    </li>
  </ul>
)

NavMenu.propTypes = {
  className: PropTypes.string,
}

export default NavMenu
