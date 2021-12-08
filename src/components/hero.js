import * as React from "react"
import ContactButton from "./contactButton"

const Hero = () => (
  <section className="wrapper py-12 md:py-28">
    <div className="">
      <h1 className="leading-tight text-3xl mb-6 md:text-display-1 lg:text-display-2">
        Modern, easy-to-use, mobile-friendly websites and apps designed to give
        you the results you want.
      </h1>
      <p className="opacity-60 mb-6 md:max-w-3xl">
        You probably don't really want a website—it's just a means to an end—you
        want the results it provides. Whether that's more email subscribers,
        more leads, more sales, or something else, we can help you achieve your
        goals with clean, modern websites designed to get you results.
      </p>
      <ContactButton />
    </div>
  </section>
)

export default Hero
