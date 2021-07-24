import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import ShapeDivider from "./shapeDivider"
import ContactButton from "./contactButton"

const Bio = () => (
  <section className="bg-gray-100 mt-32 pt-16 pb-36 relative">
    <ShapeDivider className="shape-divider-top" fill="text-gray-100" />
    <div className="wrapper flex flex-wrap md:items-center">
      <div className="md:w-7/12">
        <h2 className="text-2xl">Need a reliable technology partner?</h2>
        <p>
          I help tech, creative, and socially-responsible businesses get modern,
          on-brand, high-converting websites that are easy to use, navigate, and
          maintain, and are accessible for visitors with disabilities. That way
          you get the results you want, plus more free time because you don't
          have to spend it maintaining your website. All this even if you've had
          past bad experiences with developers or agencies.
        </p>
        <p>
          I do this through website design and development, website maintenance,
          asset design and creation, and content publishing.
        </p>
        <p>
          If you want the ease and peace of mind that comes from knowing your
          online presence is polished and professional, better results from your
          website, and more free time because you don't have to maintain and
          update it, I invite you to get in touch.
        </p>
        <ContactButton />
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
