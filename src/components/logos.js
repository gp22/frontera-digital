import * as React from "react"
import ADT from "../images/adt-logo.svg"
import CELDF from "../images/celdf-logo.svg"
import DirecTV from "../images/directv-logo.svg"
import HughesNet from "../images/hughesnet-logo.svg"
import NCOA from "../images/ncoa-logo.svg"
import WellsFargo from "../images/wellsfargo-logo.svg"

const Logos = () => (
  <section className="wrapper mt-24 md:mt-36">
    <div className="flex flex-wrap justify-between md:flex-nowrap">
      <WellsFargo className="h-20 w-20" />
      <DirecTV className="h-20 w-1/2 sm:px-8 sm:w-5/12 md:px-0 md:w-1/6" />
      <HughesNet className="h-20 w-1/2 mt-8 sm:w-5/12 sm:mt-0 md:w-1/6" />
      <ADT className="h-20 mt-8 w-20 md:mt-0" />
      <NCOA className="h-20 w-1/2 mt-8 sm:w-5/12 md:mt-0 md:w-1/6" />
      <CELDF className="h-20 mt-8 w-20 md:mt-0" />
    </div>
  </section>
)

export default Logos
