import React from 'react'

import Image from './image'

const Header = () => (
  <header className="mb-16  lg:mb-32 lg:flex lg:justify-between lg:items-center">
    <div className="max-w-lg">
      <h1 className="font-bold font-display mb-2 text-2xl  lg:leading-snug lg:text-5xl xl:text-6xl">
        I can help you <span>build&nbsp;trust</span> and achieve&nbsp;your{' '}
        <span>business&nbsp;goals</span> through great web&nbsp;experiences
      </h1>
      <h2 className="text-gray-100 mb-10  lg:mb-0">
        Hi, I’m Paul. Web developer, designer, and consultant.
      </h2>
    </div>
    <div className="flex">
      <Image />
    </div>
  </header>
)

export default Header
