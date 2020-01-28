import React from 'react'

const Feature = props => (
  <li className="pb-4 mb-4 rounded-b-lg shadow-md  md:mb-0 lg:w-1/3 md:px-8 md:py-6 md:shadow-none md:w-1/2">
    <div className="bg-blue-200 border-b border-gray-100 flex items-baseline mb-4 px-2 py-4 rounded-t-lg  md:bg-white md:block md:pt-0 md:px-0">
      <span className="h-10 w-10 rounded-full flex items-center justify-center mr-4  gradient  md:mb-4 md:mr-0">
        {props.icon}
      </span>
      <h5 className="font-display  sm:text-xl md:text-2xl md:w-48">
        {props.title}
      </h5>
    </div>
    <p className="font-light px-3 text-gray-100 text-sm  md:pl-0">{props.desc}</p>
  </li>
)

export default Feature
