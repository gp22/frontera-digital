import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Bio from "../components/bio"
import CaseStudy from "../components/casestudy"
import Logos from "../components/logos"
import ReadyToChat from "../components/readytochat"
import Testimonial from "../components/testimonial"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Logos />
    <Bio />
    <CaseStudy
      image={
        <StaticImage
          src="../images/mcmc.png"
          width={1200}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="My Care My Choice"
          className=""
        />
      }
      list={
        <>
          <li className="mb-4">
            Create an app for the National Council On Aging to allow people to
            find state-sponsored health care.
          </li>
          <li className="mb-4">
            Use a content service so the client can just focus on adding and
            updating content.
          </li>
          <li className="mb-4">
            Create a solution that's easy to use for people with disabilities or
            who rely on assistive technologies.
          </li>
        </>
      }
      subtitle={
        <>
          I partnered with the team at{" "}
          <a href="https://www.project6.com/" className="underline">
            Project 6
          </a>{" "}
          to...
        </>
      }
      title="NCOA"
    />
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
          <li className="mb-4">Create a complete rebrand and redesign.</li>
          <li className="mb-4">
            Create a brand new block-based WordPress site that highlights the
            clients newest products.
          </li>
          <li className="mb-4">
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
          <li className="mb-4">
            Create an engaging survey and product suggestion tool with
            animations and interactive elements.
          </li>
          <li className="mb-4">
            Create custom WordPress blocks to display the dynamic content.
          </li>
          <li className="mb-4">
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
          <li className="mb-4">Create a complete rebrand and redesign.</li>
          <li className="mb-4">
            Provide a more modern design, cleaner content layout, and simpler
            navigation.
          </li>
          <li className="mb-4">
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
      business="Principal Solutions Consulting"
      cite="Chris Handsel"
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
