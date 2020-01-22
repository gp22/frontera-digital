import React from 'react'

const ChatBubble = props => (
  <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
    <path data-name="Rectangle 32" fill="none" d="M0 0H24V24H0z" />
    <g data-name="Group 22">
      <g data-name="Group 18">
        <path
          data-name="Path 10"
          d="M6 22v-4H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-8.667zM4 4v12h4v2l2.667-2H20V4z"
          transform="translate(2 2) translate(-2 -2)"
          fill="#fafcff"
        />
      </g>
      <g data-name="Group 19">
        <path
          data-name="Path 11"
          d="M7.422 11a4.993 4.993 0 009.156 0z"
          transform="translate(2 2) translate(5.422 9) translate(-7.422 -11)"
          fill="#fafcff"
        />
      </g>
      <g data-name="Group 20">
        <circle
          data-name="Ellipse 2"
          cx={1.25}
          cy={1.25}
          r={1.25}
          fill="#fafcff"
          transform="translate(2 2) translate(5.75 4)"
        />
      </g>
      <g data-name="Group 21">
        <circle
          data-name="Ellipse 3"
          cx={1.25}
          cy={1.25}
          r={1.25}
          fill="#fafcff"
          transform="translate(2 2) translate(11.75 4)"
        />
      </g>
    </g>
  </svg>
)

export default ChatBubble
