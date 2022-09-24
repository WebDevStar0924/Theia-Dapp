import { FiHeart } from 'react-icons/all'
import { HeartButtonWrapper } from './styles'

interface iProps {
  active: boolean
  count: string
  size: string
  onClick: (e) => void
}
export default function HeartButton(props: iProps) {
  const { active, count, onClick, size } = props
  return (
    <HeartButtonWrapper active={active} size={size} onClick={onClick}>
      <FiHeart />
      <span>{count}</span>
    </HeartButtonWrapper>
  )
}
