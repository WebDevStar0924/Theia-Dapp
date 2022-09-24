import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 91 36" {...props}>
      <path
        d="M9.20801 2.12451C9.35027 1.98225 9.51917 1.8694 9.70505 1.7924C9.89092 1.71541 10.0901 1.67578 10.2913 1.67578C10.4925 1.67578 10.6918 1.71541 10.8776 1.7924C11.0635 1.8694 11.2324 1.98225 11.3747 2.12451C11.5169 2.26678 11.6298 2.43567 11.7068 2.62155C11.7838 2.80743 11.8234 3.00665 11.8234 3.20785C11.8234 3.40904 11.7838 3.60826 11.7068 3.79414C11.6298 3.98002 11.5169 4.14891 11.3747 4.29118L4.06217 11.6037L1.08301 12.4162L1.89551 9.43701L9.20801 2.12451Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default Icon
