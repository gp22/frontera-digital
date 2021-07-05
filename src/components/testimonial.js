import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Testimonial = () => (
  <section className="wrapper mt-24 md:mt-36">
    <blockquote className="flex flex-wrap justify-center pl-5 py-5 border-gray-100 border-l-4">
      <div className="text-lg italic md:w-9/12">
        <q>
          Paul was a great find and quickly became our top go-to developer. As
          long as you don’t give him so much work that he doesn’t have time for
          us, he gets my highest recommendation.
        </q>
        <figcaption className="mt-6 font-bold opacity-60">
          —<cite>Chris Handsel, Principal Solutions Consulting</cite>
        </figcaption>
      </div>
      <div className="flex mt-6 md:items-center md:justify-end md:mt-0 md:w-3/12">
        <StaticImage
          src="../images/Chris_Handsel.jpg"
          width={140}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Chris Handsel"
          className="rounded-full"
        />
      </div>
    </blockquote>
  </section>
)

export default Testimonial
