import { StyledWrapper } from './styles'
import { textViewProps } from './types'

export default function TextView(props: textViewProps) {
  const { label, value, rows, placeholder, onUserInput } = props
  return (
    <StyledWrapper>
      {label && <div className={'label'}>{label}</div>}
      <textarea
        value={value}
        rows={rows}
        placeholder={placeholder}
        onChange={(e) => onUserInput && onUserInput(e.target.value)}
      />
    </StyledWrapper>
  )
}
