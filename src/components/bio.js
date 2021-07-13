import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import ShapeDivider from "./shapeDivider"

const Bio = () => (
  <section className="bg-gray-100 mt-32 pt-16 pb-36 relative">
    <ShapeDivider className="shape-divider-top" fill="text-gray-100" />
    <div className="wrapper flex flex-wrap md:items-center">
      <div className="md:w-7/12">
        <h2 className="text-2xl">Need a reliable technology partner?</h2>
        <p>
          A lot of business owners get burned on websites by people who
          over-promise and under-deliver. Then they get stuck with a slow site
          that doesn’t work how they expect, and needs to be fixed by someone
          else at an increased cost.
        </p>
        <p>
          My name is Paul Garcia, I build clean, fast websites that relieve all
          that hassle. You’ll get a website that looks modern, loads fast, works
          perfectly on all devices, and is easy to use and maintain — even if
          you decide to hire someone else to work on it later.
        </p>
      </div>
      <div className="flex justify-end mt-6 transform -rotate-6 md:mt-0 md:w-5/12">
        <StaticImage
          src="../images/Paul_Garcia.jpg"
          width={220}
          quality={100}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Paul Garcia"
          className="border-solid border-8 border-white shadow-lg"
        />
      </div>
    </div>
    <ShapeDivider className="shape-divider-bottom" fill="text-white" />
  </section>
)

export default Bio
