import sampleImg from '../../assets/image/defaultProjectIcon.png'
import { DashItemWrapper } from './styles'

interface iProps {
  icon: string | null
  name: string
  type: string
}
export default function DashItem(props: iProps) {
  const { icon, name, type } = props

  return (
    <DashItemWrapper>
      <img src={icon ?? sampleImg} className={'icon'} alt={'icon'} />
      <div className={'info'}>
        <div className={'name'}>{name}</div>
        <div className={'type'}>{type}</div>
      </div>
    </DashItemWrapper>
  )
}
