import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="35" height="35" viewBox="0 0 35 35" fill="none" {...props}>
      <circle cx="17.5" cy="17.5" r="17.5" fill="#1D2939" />
      <g clip-path="url(#clip0_1064_22136)">
        <path
          d="M23.75 11.25L11.25 23.75"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.25 11.25L23.75 23.75"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1064_22136">
          <rect x="10" y="10" width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
