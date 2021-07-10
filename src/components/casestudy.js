import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const CaseStudy = () => (
  <section className="wrapper mt-24 md:mt-36">
    <span className="uppercase tracking-wider">Recent Project</span>
    <div className="flex flex-wrap md:items-center">
      <div className="md:w-1/3">
        <h2 className="text-display-1">CELDF</h2>
        <h3>
          I partnered with the team at{" "}
          <a href="https://hkw.io" className="underline">
            HKW
          </a>{" "}
          to...
        </h3>
        <ul className="opacity-60">
          <li>Create a complete rebrand and redesign.</li>
          <li>
            Provide a more modern design, cleaner content layout, and simpler
            navigation.
          </li>
          <li>
            Build a custom editing experience that made it easy for the staff to
            build beautiful pages that are always on brand.
          </li>
        </ul>
      </div>

      <div className="md:w-2/3">
        <StaticImage
          src="../images/celdf.png"
          width={1200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="CELDF blog post"
          className=""
        />
      </div>
    </div>
  </section>
)

export default CaseStudy
