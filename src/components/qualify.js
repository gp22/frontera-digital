import React from 'react'

import CheckCircle from './svg/check-circle'
import BanSolid from './svg/ban-solid'

const Qualify = () => (
  <section className="mb-32">
    <h4 className="italic mb-6">
      Wonder if we're a good fit to work together?
    </h4>
    <div className="lg:flex lg:wrap">
      <div className="rounded-lg shadow-lg px-12 py-10  lg:w-1/2 lg:mr-4">
        <h5 className="font-display mb-6 text-lg">
          I'm the right consultant for you if:
        </h5>
        <ul className="text-gray-100 text-sm">
          <li className="mb-5 relative">
            <CheckCircle className="absolute  list-style" />
            You understand that your website is an investment in your business.
          </li>
          <li className="mb-5 relative">
            <CheckCircle className="absolute  list-style" />
            You want someone who can act independently to solve problems, and
            can also work with your team.
          </li>
          <li className="mb-5 relative">
            <CheckCircle className="absolute  list-style" />
            You are comfortable working with someone on a project basis and see
            the value they provide to your business.
          </li>
          <li className="relative">
            <CheckCircle className="absolute  list-style" />
            You want someone who will work with you like a business partner and
            isn’t afraid to share a different opinion when appropriate.
          </li>
        </ul>
      </div>
      <div className="rounded-lg shadow-lg px-12 py-10  lg:w-1/2">
        <h5 className="font-display mb-6 text-lg">
          I'm not the right consultant for you if:
        </h5>
        <ul className="text-gray-100 text-sm">
          <li className="mb-5 relative">
            <BanSolid className="absolute  list-style" />
            You see your website and all work associated with it as an expense.
          </li>
          <li className="mb-5 relative">
            <BanSolid className="absolute  list-style" />
            You want to hire someone to join your team, give them a schedule,
            and tell them exactly what to do.
          </li>
          <li className="mb-5 relative">
            <BanSolid className="absolute  list-style" />
            You want to hire someone for small fixes here and there or are only
            concerned with price.
          </li>
          <li className="relative">
            <BanSolid className="absolute  list-style" />
            You want someone who will act more like an employee than a valued
            business partner.
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default Qualify
