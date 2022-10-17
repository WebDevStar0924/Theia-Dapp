import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 74 75" {...props}>
      <path
        d="M15.4167 9.90332L58.5834 37.6533L15.4167 65.4033V9.90332Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={props.fill}
      />
    </Svg>
  )
}

export default Icon
