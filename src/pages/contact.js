import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Address from "../components/address"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="wrapper py-10 flex flex-col md:flex-row">
      <div className="md:w-1/2 md:pr-8">
        <h1 className="text-4xl">Ready to chat?</h1>

        <p>
          Just fill out the form and hit the button. I typically respond within
          24 hours M-F or the next business day if you reach out on a weekend.
        </p>

        <p>
          Not comfortable filling out the form? No problem! Just send me an
          email directly at{" "}
          <a href="mailto:hello@paulgarcia.co">hello@paulgarcia.co</a>.
        </p>
        <Address className="text-sm" />
      </div>
      <div className="md:w-1/2">
        <form name="contact" method="POST" data-netlify="true">
          <div className="my-4">
            <label>
              Name
              <input
                type="text"
                name="name"
                id="name"
                className="w-full border px-4 py-3"
              />
            </label>
          </div>
          <div className="my-4">
            <label>
              Email
              <input
                type="email"
                name="email"
                id="email"
                className="w-full border px-4 py-3"
              />
            </label>
          </div>
          <div className="my-4">
            <label>
              Message
              <textarea
                name="message"
                id="message"
                rows="5"
                className="w-full border px-4 py-3"
              />
            </label>
          </div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  </Layout>
)

export default IndexPage
