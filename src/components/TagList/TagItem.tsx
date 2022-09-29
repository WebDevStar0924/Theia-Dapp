import { TagItemWrapper } from './styles'

interface iProps {
  value: string
  active: boolean
  onClick: () => void
}
export default function TagItem(props: iProps) {
  return (
    <TagItemWrapper active={props.active} onClick={props.onClick}>
      {props.value}
    </TagItemWrapper>
  )
}
