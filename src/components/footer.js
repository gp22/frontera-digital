import * as React from "react"
import { Link } from "gatsby"

import Address from "../components/address"
import Facebook from "../images/facebook.svg"
import Github from "../images/github.svg"
import Linkedin from "../images/linkedin.svg"
import Twitter from "../images/twitter.svg"

const Footer = () => (
  <footer className="text-sm pt-20 mt-36 bg-black relative">
    <div className="wrapper flex flex-col md:flex-row">
      <div className="flex-1 md:w-1/3"></div>
      <div className="flex justify-center flex-1 md:w-1/3">
        <div>
          <Address className="text-white" />
          <a
            href="mailto:hello@thefrontera.agency"
            className="text-white hover:text-white hover:opacity-50"
          >
            hello@thefrontera.agency
          </a>
        </div>
      </div>
      <div className="mt-6 flex items-end justify-center flex-1 md:w-1/3 md:mt-0">
        <a href="https://www.facebook.com/PaulGarciaco-112620274393448">
          <Facebook className="mx-1 h-8 w-8" />
        </a>
        <a href="https://github.com/gp22">
          <Github className="mx-1 h-8 w-8" />
        </a>
        <a href="https://www.linkedin.com/in/paulgarcia22">
          <Linkedin className="mx-1 h-8 w-8" />
        </a>
        <a href="https://twitter.com/paul_garcia_dev">
          <Twitter className="mx-1 h-8 w-8" />
        </a>
      </div>
    </div>
    <div className="mt-10">
      <div className="wrapper flex flex-col border-t border-gray-900 justify-between items-center md:flex-row">
        <div className="text-white opacity-50 pt-6 md:pt-0">
          © {new Date().getFullYear()} Frontera Digital
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
