import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 12" {...props}>
      <path
        d="M13.7415 0.205895C13.4024 -0.0740428 12.8839 -0.0553803 12.5648 0.261883L4.9466 8.1188L1.35686 5.35675C1.07766 5.1328 0.658854 5.11414 0.359709 5.31943C-0.0192087 5.56204 -0.0989808 6.04726 0.160278 6.40185L3.88962 11.3847C3.98934 11.5154 4.12894 11.646 4.26854 11.7393C4.96655 12.1872 5.92381 12.0193 6.40244 11.3661L6.46227 11.2914L13.8611 1.21367C14.1004 0.896408 14.0406 0.46717 13.7415 0.205895Z"
        fill="white"
      />
    </Svg>
  )
}

export default Icon
