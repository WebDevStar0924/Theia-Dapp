import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 29" {...props} fill={'none'}>
      <path
        d="M7 10L16 19L25 10"
        stroke="url(#vote_down_path_not_active)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="31.5"
        y="28.5"
        width="31"
        height="28"
        rx="7.5"
        transform="rotate(-180 31.5 28.5)"
        stroke="url(#vote_down_rect_stable)"
      />
      <defs>
        <linearGradient
          id="vote_down_path_not_active"
          x1="8.485"
          y1="18.3077"
          x2="23.3894"
          y2="10.2125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#101828" />
          <stop offset="1" stop-color="#101828" />
        </linearGradient>
        <linearGradient
          id="vote_down_path_hover"
          x1="8.485"
          y1="18.3077"
          x2="23.3894"
          y2="10.2125"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F42829" />
          <stop offset="1" stop-color="#D96FF8" />
        </linearGradient>
        <linearGradient
          id="vote_down_rect_stable"
          x1="61.36"
          y1="31.2308"
          x2="29.8741"
          y2="40.666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="transparent" />
          <stop offset="1" stop-color="transparent" />
        </linearGradient>
        <linearGradient
          id="vote_down_rect_hover"
          x1="61.36"
          y1="31.2308"
          x2="29.8741"
          y2="40.666"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F42829" />
          <stop offset="1" stop-color="#D96FF8" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon
