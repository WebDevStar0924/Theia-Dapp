import { ShareIcon } from 'components/Svg'
import { ShareButton2Wrapper } from './styles'

interface iProps {
  onClick: (e) => void
}
export default function ShareButton2(props: iProps) {
  const { onClick } = props
  return (
    <ShareButton2Wrapper onClick={onClick}>
      <ShareIcon
        width="22px"
        height="22px"
        stroke="#667085"
        stroke-width="1px"
        fill="none"
      />
    </ShareButton2Wrapper>
  )
}
