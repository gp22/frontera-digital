import React from 'react'

import BrushArrow from './svg/brush-arrow'
import PhoneSolid from './svg/phone-solid'
import Envelope from './svg/envelope'
import Github from './svg/github'
import Linkedin from './svg/linkedin'

const Footer = () => (
  <footer id="footer" className="bg-brown-100">
    <div className="content-wrapper mx-auto px-6 pt-12 pb-6 relative">
      <BrushArrow className="absolute  brush-arrow" />
      <h4 className="text-xl text-brown-300 mb-6 relative">
        Ready to chat about your next project or just have questions?
      </h4>
      <a
        className="bg-brown-300 text-brown-100 border-4 border-brown-300 inline-block mb-16 pl-3 pr-8 py-1 relative rounded-sm uppercase  hover:text-brown-300 hover:bg-brown-100  transition cta-button"
        href="https://calendly.com/paulgarciaco/phone-call"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-bold tracking-wide">
          Schedule a call
        </span>
        <PhoneSolid className="absolute  phone-solid" />
      </a>
      <div className="md:flex md:items-baseline">
        <span className="flex mb-2  md:mb-0">
          <a className="mr-3 hover:opacity-75  transition" href="mailto:hello@paulgarcia.co">
            <Envelope />
          </a>
          <a
            className="mr-3 hover:opacity-75  transition"
            href="https://github.com/gp22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            className="hover:opacity-75  md:mr-3  transition"
            href="https://www.linkedin.com/in/paulgarcia22"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
        </span>
        <p className="text-brown-200 text-xs">
          © {new Date().getFullYear()} design and development by Paul Garcia
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
