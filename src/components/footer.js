import React from 'react'

import BrushArrow from './svg/brush-arrow'
import PhoneSolid from './svg/phone-solid'

const Footer = () => (
  <footer id="footer" className="bg-brown-100">
    <div className="content-wrapper mx-auto px-6 pt-12 pb-6 relative">
      <BrushArrow className="absolute  brush-arrow" />
      <h4 className="text-xl text-brown-300 mb-6 relative">
        Ready to chat about your next project or just have questions?
      </h4>
      <a
        className="border-4 border-brown-300 pl-3 pr-8 py-1 rounded-sm inline-block mb-20 uppercase relative"
        href="https://calendly.com/paulgarciaco/phone-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="text-brown-300 font-bold tracking-wide">
          Schedule a call
        </span>
        <PhoneSolid className="absolute  phone-solid" />
      </a>
      <p className="text-brown-200 text-xs">
        © {new Date().getFullYear()} design and development by Paul Garcia
      </p>
    </div>
  </footer>
)

export default Footer
