import React from 'react'

import BrushCircle from './svg/brush-circle'

const About = () => (
  <section className="mb-20 relative">
    <BrushCircle className="absolute  brush-circle" />
    <h3 id="about" className="font-bold font-display text-2xl mb-2">
      About
    </h3>
    <p className="mb-4 max-w-xl relative">
      <span className="italic">In case you were wondering...</span> I taught
      myself web and app development while traveling and working as a
      &ldquo;digital nomad&rdquo; in 2016. I liked it so much, I pivoted away
      from the business I was working on to pursue it full-time.
    </p>
    <p className="mb-4 max-w-xl">
      Since then, I’ve developed websites and apps for Fortune 500 companies in
      telecom, media, and finance. I’ve also helped build and run marketing
      campaigns for a major digital marketing agency.
    </p>
    <p className="mb-4 max-w-xl">
      <span className="italic">On a more personal note...</span> I like to keep
      life simple, and free of clutter. Both inner and outer! I love to cook,
      and health and fitness are major parts of my life. I'm also a big
      supporter of privacy and freedom. Both online and off.
    </p>
    <p className="mb-4 max-w-xl">
      My goal is to help you accomplish your business goals by being a problem
      solving partner so you can focus on what you do best.
    </p>
    <p className="max-w-xl">
      I hope that together we can make something great!
    </p>
  </section>
)

export default About
