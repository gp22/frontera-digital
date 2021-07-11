import * as React from "react"
import PropTypes from "prop-types"

const Address = ({ className }) => (
  <div className={className}>
    <span className="font-bold">Paul Garcia</span>
    <br />
    519 W 22nd St. Ste 100
    <br />
    #93183
    <br />
    Sioux Falls, SD 57105
  </div>
)

Address.propTypes = {
  className: PropTypes.string,
}

export default Address
