import { FaRegComment } from 'react-icons/fa'
import { HeartButtonWrapper } from './styles'

interface iProps {
  active: boolean
  count: string
  size: string
  onClick: (e) => void
}
export default function ReplyButton(props: iProps) {
  const { active, count, onClick, size } = props
  return (
    <HeartButtonWrapper active={active} size={size} onClick={onClick}>
      <FaRegComment />
      <span>{count}</span>
    </HeartButtonWrapper>
  )
}
