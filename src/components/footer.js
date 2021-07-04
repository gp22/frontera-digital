import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="">
    <div className="wrapper">
      <div className="text-sm">
        <p className="font-bold">Paul Garcia</p>
        <p>519 W 22nd St. Ste 100</p>
        <p>#93183</p>
        <p>Sioux Falls, SD 57105</p>
        <a href="mailto:hello@paulgarcia.co">hello@paulgarcia.co</a>
      </div>
    </div>
    <div className="border-t border-gray-200">
      <div className="wrapper flex justify-between items-center">
        <p>© {new Date().getFullYear()} paulgarcia.co</p>
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
