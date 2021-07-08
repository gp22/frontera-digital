import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="">
    <div className="wrapper">
      <div className="text-sm">
        <div className="font-bold">Paul Garcia</div>
        <div>519 W 22nd St. Ste 100</div>
        <div>#93183</div>
        <div>Sioux Falls, SD 57105</div>
        <a href="mailto:hello@paulgarcia.co">hello@paulgarcia.co</a>
      </div>
    </div>
    <div className="border-t border-gray-200">
      <div className="wrapper flex flex-col justify-between items-center md:flex-row">
        <div>© {new Date().getFullYear()} paulgarcia.co</div>
        <div>
          <Link to="/privacy-policy" className="inline-block py-6">
            Privacy
          </Link>
          <Link to="/terms-of-service" className="inline-block py-6">
            Terms
          </Link>
          <Link to="/accessibility-statement" className="inline-block py-6">
            Accessibility
          </Link>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
