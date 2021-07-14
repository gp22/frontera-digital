import * as React from "react"
import PropTypes from "prop-types"

const CaseStudy = ({ image, list, subtitle, title }) => (
  <section className="wrapper mt-24 md:mt-36">
    <div className="flex flex-wrap md:items-center">
      <div className="md:w-1/3 md:pr-4">
        <span className="uppercase tracking-wider">Recent Project</span>
        <h2 className="text-display-1">{title}</h2>
        <h3>{subtitle}</h3>
        <ul className="opacity-60">{list}</ul>
      </div>
      <div className="md:w-2/3">{image}</div>
    </div>
  </section>
)

CaseStudy.propTypes = {
  image: PropTypes.object,
  list: PropTypes.object,
  subtitle: PropTypes.object,
  title: PropTypes.string,
}

export default CaseStudy
