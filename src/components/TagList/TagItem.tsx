import { TagItemWrapper } from './styles'

interface iProps {
  value: string
}
export default function TagItem(props: iProps) {
  return <TagItemWrapper>{props.value}</TagItemWrapper>
}
