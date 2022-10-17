import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 52 52" {...props}>
      <g filter="url(#filter0_d_3628_22975)">
        <rect x="10" y="7" width="32" height="32" rx="16" fill="white" />
        <path
          d="M31.8931 18.0733C31.5526 17.7327 31.1483 17.4624 30.7033 17.2781C30.2584 17.0937 29.7814 16.9988 29.2998 16.9988C28.8181 16.9988 28.3412 17.0937 27.8962 17.2781C27.4512 17.4624 27.0469 17.7327 26.7064 18.0733L25.9998 18.78L25.2931 18.0733C24.6053 17.3855 23.6724 16.9991 22.6998 16.9991C21.7271 16.9991 20.7942 17.3855 20.1064 18.0733C19.4186 18.7611 19.0322 19.694 19.0322 20.6667C19.0322 21.6394 19.4186 22.5722 20.1064 23.26L20.8131 23.9667L25.9998 29.1533L31.1864 23.9667L31.8931 23.26C32.2338 22.9195 32.504 22.5152 32.6884 22.0702C32.8727 21.6253 32.9676 21.1483 32.9676 20.6667C32.9676 20.185 32.8727 19.7081 32.6884 19.2631C32.504 18.8181 32.2338 18.4138 31.8931 18.0733Z"
          fill="#F04438"
          stroke="#F04438"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_3628_22975"
          x="0"
          y="0"
          width="52"
          height="52"
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
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3628_22975"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3628_22975"
            result="shape"
          />
        </filter>
      </defs>
    </Svg>
  )
}
export default Icon
