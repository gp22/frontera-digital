import React from 'react'

import Image from './image'

const Header = () => (
  <header className="md:flex md:justify-between md:items-center">
    <div className="mx-auto max-w-sm  lg:max-w-lg md:max-w-md md:mx-0">
      <h1 className="font-bold font-display text-2xl mb-4  sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        I can help you <span>build&nbsp;trust</span> and achieve your{' '}
        <span>business&nbsp;goals</span> through great web experiences
      </h1>
      <h2 className="text-gray-100 mb-10  md:mb-0">
        Hi, I’m Paul. Web developer, designer, and consultant.
      </h2>
    </div>
    <div className="flex">
      <Image />
    </div>
  </header>
)

export default Header
