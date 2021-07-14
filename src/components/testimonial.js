import * as React from "react"
import PropTypes from "prop-types"

const Testimonial = ({ cite, image, text }) => (
  <section className="wrapper mt-24 md:mt-36">
    <blockquote className="flex flex-wrap justify-center pl-5 py-5 border-gray-100 border-l-4">
      <div className="text-lg italic md:w-9/12">
        <q>{text}</q>
        <figcaption className="mt-6 font-bold opacity-60">
          —<cite>{cite}</cite>
        </figcaption>
      </div>
      <div className="flex mt-6 md:items-center md:justify-end md:mt-0 md:w-3/12">
        {image}
      </div>
    </blockquote>
  </section>
)

Testimonial.propTypes = {
  cite: PropTypes.string,
  image: PropTypes.object,
  text: PropTypes.string,
}

export default Testimonial
