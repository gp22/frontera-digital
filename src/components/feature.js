import React from 'react'

const Feature = props => (
  <div className="py-6  sm:px-8 sm:w-1/2 lg:w-1/3">
    <div className="h-10 w-10 mb-4 rounded-full flex items-center justify-center  gradient">
      {props.icon}
    </div>
    <div className="border-b border-gray-100 mb-4 pb-4">
      <h5 className="font-display text-2xl w-48">{props.title}</h5>
    </div>
    <p className="text-gray-100 font-light text-sm w-48">{props.desc}</p>
  </div>
)

export default Feature
