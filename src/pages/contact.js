import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Address from "../components/address"
import ContactForm from "../components/contactForm"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { formSent: false, formError: false, message: "" }
    this.errorMessage =
      "Oh oh, something went wrong! Please reach out by email, and if you could let me know that this isn't working I'd really appreciate it. Thanks!"
    this.successMessage =
      "Hey, thanks for getting in touch! I'll reach back out soon. 👍"
  }

  sendForm = e => {
    e.preventDefault()
    const data = new FormData(e.target)

    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        this.setState({ formSent: true, message: this.successMessage })
      })
      .catch(error => {
        this.setState({
          formSent: true,
          message: this.errorMessage,
          formError: true,
        })
      })
  }

  render() {
    return (
      <Layout>
        <Seo title="Contact" />
        <section className="wrapper py-10 flex flex-col md:flex-row">
          <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
            <h1 className="text-4xl">Ready to chat?</h1>

            <p>
              Just fill out the form and hit the button. I typically respond
              within 24 hours M-F or the next business day if you reach out on a
              weekend.
            </p>

            <p>
              Not comfortable filling out the form? No problem! Just send me an
              email directly at{" "}
              <a href="mailto:hello@paulgarcia.co">hello@paulgarcia.co</a>.
            </p>
            <Address className="text-sm" />
          </div>
          <div className="md:w-1/2">
            {!this.state.formSent && <ContactForm sendForm={this.sendForm} />}
            {this.state.formSent && (
              <p
                className={`p-8 border ${
                  this.state.formError ? "border-red-500" : "border-green-500"
                }`}
              >
                {this.state.message}
              </p>
            )}
          </div>
        </section>
      </Layout>
    )
  }
}

export default IndexPage
