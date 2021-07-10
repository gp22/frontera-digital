import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <header className="wrapper py-5">
    <div className="flex items-center justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <nav>
        <ul className="flex uppercase font-bold tracking-wider text-sm">
          <li>
            <Link
              to="/about"
              className="text-black no-underline inline-block p-5"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-black no-underline inline-block p-5"
            >
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
            <Link
              to="/contact"
              className="text-black no-underline inline-block p-5"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
