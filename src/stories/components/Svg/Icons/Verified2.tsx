import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" {...props} fill={'none'}>
      <circle cx="10" cy="10" r="9.5" stroke={props.fill} />
      <path
        d="M15 7L8.125 13.4167L5 10.5"
        stroke={props.fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
