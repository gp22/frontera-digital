import * as React from "react"
import ContactButton from "./contactButton"

const Hero = () => (
  <section className="wrapper py-12 md:py-28">
    <div className="md:max-w-xl lg:max-w-2xl">
      <h1 className="leading-tight text-3xl mb-6 lg:text-display-1">
        Modern, easy-to-use, mobile-friendly websites and apps designed to give
        you the results you want.
      </h1>
      <p className="mb-6">
        👋{" "}
        <span className="opacity-60">
          {" "}
          Hi, I’m Paul. You probably don't want a website or app. You want the
          results they provide. I can help you achieve your goals with clean,
          modern websites designed to get you results.
        </span>
      </p>
      <ContactButton />
    </div>
  </section>
)

export default Hero
