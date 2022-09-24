import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 20" {...props}>
      <path
        d="M6.57422 19.305C4.53516 16.8223 0 10.8049 0 7.425C0 3.32423 3.35781 0 7.5 0C11.6406 0 15 3.32423 15 7.425C15 10.8049 10.4297 16.8223 8.42578 19.305C7.94531 19.8967 7.05469 19.8967 6.57422 19.305V19.305ZM7.5 9.9C8.87891 9.9 10 8.79012 10 7.425C10 6.05988 8.87891 4.95 7.5 4.95C6.12109 4.95 5 6.05988 5 7.425C5 8.79012 6.12109 9.9 7.5 9.9Z"
        fill="#667085"
      />
    </Svg>
  )
}
export default Icon
