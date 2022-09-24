import { FavouriteIcon } from 'components/Svg'
import { WineButtonWrapper } from './styles'

interface iProps {
  active: boolean
  count: string
  onClick: (e) => void
  size: string
}
export default function WineButton(props: iProps) {
  const { active, count, onClick, size } = props
  return (
    <WineButtonWrapper active={active} size={size} onClick={onClick}>
      <FavouriteIcon width={'24px'} />
      <span>{count}</span>
    </WineButtonWrapper>
  )
}
