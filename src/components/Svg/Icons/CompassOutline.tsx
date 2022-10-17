import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <path
        d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z"
        stroke="#101828"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M18.6301 13.3626L16.9981 16.975L13.5498 18.4495L15.025 14.9997L18.6301 13.3626Z"
        stroke="#101828"
        stroke-width="3"
        stroke-linecap=""
        stroke-linejoin=""
      />
    </Svg>
  )
}

export default Icon
