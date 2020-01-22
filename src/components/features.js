import React from 'react'

import Feature from './feature'
import ChatBubble from './chat-bubble'
import Calendar from './calendar'
import Brush from './brush'
import Devices from './devices'
import ComputerScreen from './computer-screen'
import AtomicBomb from './atomic-bomb'

const Features = () => (
  <section>
    <h4 className="italic">What you'll get</h4>
    <div className="sm:flex sm:flex-wrap sm:mx-neg">
      <Feature
        icon={<ChatBubble />}
        title="Proactive Communication"
        desc="You’ll know exactly what’s going on at every step. No more waiting for emails that never arrive."
      />
      <Feature
        icon={<Calendar />}
        title="Clear deadlines and deliverables"
        desc="My goal is to set clear deliverables, deadlines, and expectations. And meet them!"
      />
      <Feature
        icon={<Brush />}
        title="Custom-designed solution"
        desc="I’ll deliver an experience that’s custom-tailored to your business. No cookie-cutter designs."
      />
      <Feature
        icon={<Devices />}
        title="Looks good on every device"
        desc="To show your audience they can trust you and that yours is the business they’re looking for."
      />
      <Feature
        icon={<ComputerScreen />}
        title="Works well on mobile and desktop"
        desc="Give your audience what they expect, and provide a great experience no matter what."
      />
      <Feature
        icon={<AtomicBomb />}
        title="Makes a killer first-impression"
        desc="Make the most of your visitors first few seconds on your site and convince them to stay."
      />
    </div>
  </section>
)

export default Features
