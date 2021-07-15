import * as React from "react"
import { Link } from "gatsby"

import Address from "../components/address"

const Footer = () => (
  <footer className="text-sm pt-20 mt-36 bg-black relative">
    <div className="wrapper flex justify-center">
      <div className="">
        <Address className="text-white" />
        <a
          href="mailto:hello@paulgarcia.co"
          className="text-white hover:text-white hover:opacity-50"
        >
          hello@paulgarcia.co
        </a>
      </div>
    </div>
    <div className="mt-10">
      <div className="wrapper flex flex-col border-t border-gray-900 justify-between items-center md:flex-row">
        <div className="text-white opacity-50 pt-6 md:pt-0">
          © {new Date().getFullYear()} paulgarcia.co
        </div>
        <div>
          <Link
            to="/privacy-policy"
            className="text-white no-underline inline-block py-6 pr-3 hover:text-white hover:opacity-50"
          >
            Privacy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-white no-underline inline-block py-6 px-3 hover:text-white hover:opacity-50"
          >
            Terms
          </Link>
          <Link
            to="/accessibility-statement"
            className="text-white no-underline inline-block py-6 pl-3 hover:text-white hover:opacity-50"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
