import { CloseButtonWrapper } from './styles'
import CloseSvg from '../../assets/svg/close.svg'

interface iProps {
  onClick: (e) => void
}
export default function CloseButton(props: iProps) {
  const { onClick } = props
  return (
    <CloseButtonWrapper onClick={onClick}>
      <img src={CloseSvg} alt="close" />
    </CloseButtonWrapper>
  )
}
