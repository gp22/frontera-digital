import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import ShapeDivider from "./shapeDivider"
import ContactButton from "./contactButton"

const Bio = () => (
  <section className="bg-gray-100 mt-44 pt-16 pb-36 relative md:mt-56">
    <ShapeDivider className="shape-divider-top" fill="text-gray-100" />
    <div className="wrapper flex flex-wrap md:items-center">
      <div className="md:w-7/12">
        <h2 className="text-2xl">Need a reliable technology partner?</h2>
        <p>
          We help tech, creative, and socially-responsible businesses get
          modern, on-brand, high-converting websites that are easy to use, easy
          to navigate, easy to maintain, and are accessible for visitors with
          disabilities. All this even if you've had past bad experiences with
          developers or agencies.
        </p>
        <p>
          We do this through website design and development, website
          maintenance, asset design and creation, and content publishing.
        </p>
        <p>
          If you want the peace of mind that comes from knowing your online
          presence is polished and professional, seeing better results from your
          website, and having more free time because you don't have to maintain
          and update it, get in touch!
        </p>
        <ContactButton />
      </div>
      <div className="flex justify-end mt-6 transform -rotate-6 md:mt-0 md:w-5/12">
        <div className="flex flex-col">
          <StaticImage
            src="../images/Paul_Garcia.jpg"
            width={220}
            quality={100}
            formats={["AUTO", "WEBP", "AVIF"]}
            alt="Paul Garcia"
            className="border-solid border-8 border-white shadow-lg"
          />
          <div className="mt-2 text-center text-sm">
            <span className="block">
              👋 Hi, I'm Paul. Owner and founder
              <br />
              of Frontera Digital.
            </span>
          </div>
        </div>
      </div>
    </div>
    <ShapeDivider className="shape-divider-bottom" fill="text-white" />
  </section>
)

export default Bio
