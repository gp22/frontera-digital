import * as React from "react"
import ContactButton from "./contactButton"

const Hero = () => (
  <section className="wrapper py-12 md:py-28">
    <div className="md:max-w-xl lg:max-w-2xl">
      <h1 className="leading-tight text-3xl lg:text-display-1">
        Modern, easy-to-use, mobile-friendly websites and apps that give you
        more of the results you want.
      </h1>
      <p className="">
        👋{" "}
        <span className="opacity-60">
          {" "}
          Hi, I’m Paul. I can help you build credibility, inspire trust, and
          achieve your business goals with clean, modern websites designed to
          solve your problems. Not create more.
        </span>
      </p>
      <ContactButton />
    </div>
  </section>
)

export default Hero
