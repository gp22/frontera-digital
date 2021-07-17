import * as React from "react"
import PropTypes from "prop-types"

const ContactForm = ({ sendForm }) => (
  <form
    name="contact"
    method="POST"
    data-netlify="true"
    onSubmit={sendForm}
    netlify-honeypot="bot-field"
  >
    <div className="my-4">
      <input type="hidden" name="form-name" value="contact" />
      <label className="hidden invisible" aria-hidden="true">
        Don’t fill this out if you're human:
        <input name="bot-field" />
      </label>
      <label>
        Name <span className="text-red-500">*</span>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border px-4 py-3"
          required
        />
      </label>
    </div>
    <div className="my-4">
      <label>
        Email <span className="text-red-500">*</span>
        <input
          type="email"
          name="email"
          id="email"
          className="w-full border px-4 py-3"
          required
        />
      </label>
    </div>
    <div className="my-4">
      <label>
        Message <span className="text-red-500">*</span>
        <textarea
          name="message"
          id="message"
          rows="5"
          className="w-full border px-4 py-3"
          required
        />
      </label>
    </div>
    <button type="submit" className="btn">
      Send Message
    </button>
  </form>
)

ContactForm.propTypes = {
  sendForm: PropTypes.func,
}

export default ContactForm
