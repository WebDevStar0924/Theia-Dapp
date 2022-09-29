import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 29" {...props} fill={'none'}>
      <path
        d="M25 19L16 10L7 19"
        stroke="url(#paint0_linear_3314_35221)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="28"
        rx="7.5"
        stroke="url(#paint1_linear_3314_35221)"
      />
      <defs>
        <linearGradient
          id="vote_up_path_not_hover"
          x1="16"
          y1="10"
          x2="16"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#101828" />
          <stop offset="0.505208" stopColor="#101828" />
          <stop offset="1" stopColor="#101828" />
        </linearGradient>
        <linearGradient
          id="vote_up_rect_not_hover"
          x1="16"
          y1="0"
          x2="16"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="transparent" />
          <stop offset="0.505208" stopColor="transparent" />
          <stop offset="1" stopColor="transparent" />
        </linearGradient>
        <linearGradient
          id="vote_up_path_hover"
          x1="16"
          y1="10"
          x2="16"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38A169" />
          <stop offset="0.505208" stopColor="#319795" />
          <stop offset="1" stopColor="#00B5D8" />
        </linearGradient>
        <linearGradient
          id="vote_up_rect_hover"
          x1="16"
          y1="0"
          x2="16"
          y2="29"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#38A169" />
          <stop offset="0.505208" stopColor="#319795" />
          <stop offset="1" stopColor="#00B5D8" />
        </linearGradient>
      </defs>
    </Svg>
  )
}

export default Icon
