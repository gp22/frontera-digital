import React from 'react'

import QuoteLeft from './svg/quote-left'

const Blockquote = props => (
  <blockquote className="bg-blue-100 border-2 border-blue-500 py-5 px-6 mb-4 relative">
    <QuoteLeft className="absolute  quote-left" />
    <p className="text-blue-600 mb-3 relative">{props.quote}</p>
    <cite className="text-blue-400 font-light">&mdash; {props.cite}</cite>
  </blockquote>
)

export default Blockquote
