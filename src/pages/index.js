import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Bio from "../components/bio"
import CaseStudy from "../components/casestudy"
import ReadyToChat from "../components/readytochat"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Bio />
    <CaseStudy
      image={
        <StaticImage
          src="../images/vidatak.png"
          width={1200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Vidatak product page"
          className=""
        />
      }
      list={
        <>
          <li>Create a complete rebrand and redesign.</li>
          <li>
            Create a brand new block-based WordPress site that highlights the
            clients newest products.
          </li>
          <li>
            Build an accessible, fast, modern WordPress solution that's easy for
            the client to update.
          </li>
        </>
      }
      subtitle={
        <>
          I partnered with Robby Djendrono of{" "}
          <a href="https://www.djendronodesign.com/" className="underline">
            Djendrono Design
          </a>{" "}
          to...
        </>
      }
      title="Vidatak"
    />
    <CaseStudy
      image={
        <StaticImage
          src="../images/itr.png"
          width={1200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="ITRenew Workload Explorer"
          className=""
        />
      }
      list={
        <>
          <li>
            Create an engaging survey and product suggestion tool with
            animations and interactive elements.
          </li>
          <li>
            Create custom WordPress blocks to display the dynamic content.
          </li>
          <li>
            Build a WordPress native solution that used a popular,
            well-supported form plugin.
          </li>
        </>
      }
      subtitle={
        <>
          I partnered with the team at{" "}
          <a href="https://hkw.io" className="underline">
            HKW
          </a>{" "}
          to...
        </>
      }
      title="ITRenew"
    />
    <CaseStudy
      image={
        <StaticImage
          src="../images/celdf.png"
          width={1200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="CELDF blog post"
          className=""
        />
      }
      list={
        <>
          <li>Create a complete rebrand and redesign.</li>
          <li>
            Provide a more modern design, cleaner content layout, and simpler
            navigation.
          </li>
          <li>
            Build a custom editing experience that made it easy for the staff to
            build beautiful pages that are always on brand.
          </li>
        </>
      }
      subtitle={
        <>
          I partnered with the team at{" "}
          <a href="https://hkw.io" className="underline">
            HKW
          </a>{" "}
          to...
        </>
      }
      title="CELDF"
    />
    <Testimonial
      cite="Chris Handsel, Principal Solutions Consulting"
      className="mt-24 md:mt-36"
      image={
        <StaticImage
          src="../images/Chris_Handsel.jpg"
          width={140}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Chris Handsel"
          className="rounded-full"
        />
      }
      text="Paul was a great find and quickly became our top go-to developer. As
      long as you don’t give him so much work that he doesn’t have time for
      us, he gets my highest recommendation."
    />
    <ReadyToChat />
  </Layout>
)

export default IndexPage
