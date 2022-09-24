import { SwitchWrapper } from './styles'
import cn from 'classnames'

interface SwitchItem {
  value: string | number
  label: string
}

interface iProps {
  items: SwitchItem[]
  activeValue: string | number
  onUpdateItem: (val) => void
}

export default function Switch(props: iProps) {
  const { items, activeValue, onUpdateItem } = props
  return (
    <SwitchWrapper>
      {items.map((item) => (
        <div
          key={item.value}
          className={cn('switchItem', {
            active: item.value === activeValue,
          })}
          onClick={() => onUpdateItem(item.value)}
        >
          {item.label}
        </div>
      ))}
    </SwitchWrapper>
  )
}
