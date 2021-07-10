import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="text-sm pt-20">
    <div className="wrapper flex justify-center">
      <div className="">
        <div className="opacity-75">
          <span className="font-bold">Paul Garcia</span>
          <br />
          519 W 22nd St. Ste 100
          <br />
          #93183
          <br />
          Sioux Falls, SD 57105
        </div>
        <a href="mailto:hello@paulgarcia.co">hello@paulgarcia.co</a>
      </div>
    </div>
    <div className="mt-10 border-t border-gray-200">
      <div className="wrapper flex flex-col justify-between items-center md:flex-row">
        <div className="opacity-50 pt-6 md:pt-0">
          © {new Date().getFullYear()} paulgarcia.co
        </div>
        <div>
          <Link
            to="/privacy-policy"
            className="text-black no-underline inline-block py-6 pr-3"
          >
            Privacy
          </Link>
          <Link
            to="/terms-of-service"
            className="text-black no-underline inline-block py-6 px-3"
          >
            Terms
          </Link>
          <Link
            to="/accessibility-statement"
            className="text-black no-underline inline-block py-6 pl-3"
          >
            Accessibility
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
