import React from 'react'

import BrushCircle from './svg/brush-circle'

const About = () => (
  <section className="mb-20 relative">
    <BrushCircle className="absolute  brush-circle" />
    <h3 className="font-bold font-display text-2xl mb-2">About</h3>
    <p className="mb-4 max-w-xl relative">
      I’ve developed websites and apps for major US corporations in telecom,
      media, and finance. I’ve also helped build and run marketing campaigns for
      a top digital marketing agency.
    </p>
    <p className="mb-4 max-w-xl">
      I’m here to help you solve your web development problems so you can focus
      on what you do best.
    </p>
    <p className="mb-4 max-w-xl">
      My goal is to help you achieve your goals through web experiences that put
      your best foot forward and communicate that you’re serious about what you
      do.
    </p>
    <p className="max-w-xl">
      Together, we’ll make something that clearly communicates who you are and
      what you do.
    </p>
  </section>
)

export default About
