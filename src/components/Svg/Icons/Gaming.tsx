import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 80 80" {...props}>
      <path
        d="M43.3333 6.66663L10 46.6666H40L36.6667 73.3333L70 33.3333H40L43.3333 6.66663Z"
        stroke="#FCFCFD"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
