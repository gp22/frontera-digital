import * as React from "react"
import CELDF from "../images/celdf-logo.svg"
import DirecTV from "../images/directv-logo.svg"
import HughesNet from "../images/hughesnet-logo.svg"
import NCOA from "../images/ncoa-logo.svg"
import WellsFargo from "../images/wellsfargo-logo.svg"

const Logos = () => (
  <section className="wrapper mt-24 md:mt-36">
    <div className="flex justify-between">
      <WellsFargo className="h-20" />
      <DirecTV className="h-20 w-1/5" />
      <HughesNet className="h-20 w-1/5" />
      <NCOA className="h-20 w-1/5" />
      <CELDF className="h-20" />
    </div>
  </section>
)

export default Logos
