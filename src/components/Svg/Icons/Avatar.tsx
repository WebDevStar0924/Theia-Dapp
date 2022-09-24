import React from 'react'
import Svg from '../Svg1'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 120 120" {...props}>
      <g filter="url(#filter0_d_4817_11061)">
        <circle cx="50" cy="50" r="35" fill="url(#paint0_linear_4817_11061)" />
        <circle cx="24" cy="20" r="1" stroke="#E4E7EC" strokeWidth="2" />
      </g>
      <defs>
        <filter
          id="filter0_d_4817_11061"
          x="0"
          y="0"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_4817_11061"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_4817_11061"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_4817_11061"
          x1="4"
          y1="20"
          x2="44"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#89EDFA" />
          <stop offset="1" stopColor="#7B8AF9" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon
