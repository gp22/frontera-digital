import React from 'react'

import Image from './image'

const Header = () => (
  <header>
    <div className="max-w-md mx-auto">
      <h1 className="font-bold font-display text-2xl mb-4">
        I can help you <span>build&nbsp;trust</span> and achieve your{' '}
        <span>business&nbsp;goals</span> through great web experiences
      </h1>
      <h2 className="text-gray-100 mb-10">
        Hi, I’m Paul. Web developer, designer, and consultant.
      </h2>
    </div>
    <div>
      <Image />
    </div>
  </header>
)

export default Header
