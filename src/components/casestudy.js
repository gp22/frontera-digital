import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CaseStudy = () => (
  <section className="wrapper mt-24 md:mt-36">
    <span className="uppercase tracking-wider">Recent Project</span>
    <h2 className="text-2xl">
      The Community Environmental Legal Defense Fund (CELDF) wanted a site that
      was easier to maintain, with a more modern design, and simplified layout.
    </h2>
    <div className="flex flex-wrap md:items-center">
      <div className="md:w-1/2">
        <StaticImage
          src="../images/celdf.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="CELDF blog post"
          className="border-solid border-8 border-white shadow-lg"
        />
      </div>
      <div className="md:w-1/2">
        <h3>I partnered with the team at HKW to create...</h3>
        <ul className="list-disc text-lg opacity-60">
          <li>Created a complete rebrand and redesign</li>
          <li>
            Provided a more modern design, cleaner content layout, and simpler
            navigation
          </li>
          <li>
            Built a custom editing experience that made it easy for the staff to
            build beautiful pages that are always on brand
          </li>
          <li>Migrated all existing content into the new layout</li>
        </ul>
      </div>
    </div>
  </section>
)

export default CaseStudy
