import { FiBookmark } from 'react-icons/all'
import { SaveButtonWrapper } from './styles'

interface iProps {
  onClick: (e) => void
  isSaved: boolean
}
export default function ShareButton(props: iProps) {
  const { onClick, isSaved } = props
  return (
    <SaveButtonWrapper active={isSaved} onClick={onClick}>
      <FiBookmark size={24} />
    </SaveButtonWrapper>
  )
}
