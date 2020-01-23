import React from 'react'

const Feature = props => (
  <div className="py-6  md:px-8 md:w-1/2 lg:w-1/3">
    <div className="border-b border-gray-100 mb-4 pb-4 flex items-baseline  md:block">
      <span className="h-10 w-10 rounded-full flex items-center justify-center mr-4  gradient  md:mb-4 md:mr-0">
        {props.icon}
      </span>
      <h5 className="font-display  sm:text-xl md:text-2xl md:w-48">
        {props.title}
      </h5>
    </div>
    <p className="text-gray-100 font-light text-sm  md:w-48">{props.desc}</p>
  </div>
)

export default Feature
