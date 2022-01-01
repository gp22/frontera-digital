import * as React from "react"
import PropTypes from "prop-types"

const Address = ({ className }) => (
  <div className={className}>
    <span className="font-bold">Frontera Digital LLC</span>
    <br />
    1309 Coffeen Ave. Ste 1200
    <br />
    Sheridan, WY 82801
  </div>
)

Address.propTypes = {
  className: PropTypes.string,
}

export default Address
