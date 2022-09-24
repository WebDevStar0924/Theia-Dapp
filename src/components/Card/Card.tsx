import { ReactElement } from 'react'
import { CardWrapper } from './styles'

interface iProps {
  header: ReactElement
  content?: ReactElement
  padding?: string
  borderWidth?: string
}
export default function Card(props: iProps) {
  const { header, content, ...rest } = props
  return (
    <CardWrapper {...rest}>
      <div className="cardHeader">{header}</div>
      <div className="cardContent">{content}</div>
    </CardWrapper>
  )
}
