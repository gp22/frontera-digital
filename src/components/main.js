import React from 'react'

import Blockquote from './blockquote'

const Main = () => (
  <section className="max-w-xl">
    <h3 className="font-bold font-display text-2xl mb-2">
      Most businesses get their website all wrong
    </h3>
    <p className="mb-4">
      They choose their layout and design based on the preferences of someone in
      the business, and not what their target audience would find appealing.
      They think about themselves when making design decisions, and not their
      customers.
    </p>
    <p className="mb-4">
      I get it. They probably don’t even know they’re doing this.
    </p>
    <Blockquote
      quote="Website design is the main factor for 48% of users when they determine
      the credibility of a business."
      cite="Blue Corona"
    />
    <p className="mb-4">
      One of the biggest factors people use to judge the trustworthiness of your
      website is how it looks, and you have an incredibly short amount of time
      (a few seconds) to grab their attention.
    </p>
    <p className="mb-4">
      Good design is important – but what’s more important is design that speaks
      to your audience.
    </p>
    <p className="mb-4">
      And not only design that speaks to your audience, but that encourages them
      to take action.
    </p>
    <p className="mb-4">
      I can help you create an experience that focuses on your customers and
      helps you achieve your goals. Together, we’ll analyze who your customers
      are and use what we learn as a basis for your web experience.
    </p>
  </section>
)

export default Main
