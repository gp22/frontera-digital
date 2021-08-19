import * as React from "react"
import ContactButton from "./contactButton"

const Hero = () => (
  <section className="wrapper py-12 md:py-28">
    <div className="">
      <h1 className="leading-tight text-3xl mb-6 md:text-display-1 lg:text-display-2">
        Modern, easy-to-use, mobile-friendly websites and apps designed to give
        you the results you want.
      </h1>
      <p className="mb-6">
        👋{" "}
        <span className="opacity-60">
          {" "}
          Hi, I’m Paul. You probably don't really want a website. It's just a
          means to an end. You want the results it provides. Whether that's more
          email subscribers, more leads, more sales, or something else, I can
          help you achieve your goals with clean, modern websites designed to
          get you results.
        </span>
      </p>
      <ContactButton />
    </div>
  </section>
)

export default Hero
