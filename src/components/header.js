import React from 'react'

import Image from './image'

const Header = () => (
  <header>
    <div className="sm:max-w-lg">
      <h1 className="font-bold font-display text-4xl mb-4  sm:text-6xl">
        I can help you build trust and achieve your business goals through great
        web experiences
      </h1>
      <h2 className="text-gray-100 mb-10">
        Hi, I’m Paul. Web developer, designer, and consultant.
      </h2>
    </div>
    <Image />
  </header>
)

export default Header
