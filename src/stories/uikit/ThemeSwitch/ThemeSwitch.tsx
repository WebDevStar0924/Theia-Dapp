import { SwitchWrapper } from './styles'
import cn from 'classnames'
import { LightModeIcon, DarkModeIcon } from '../../components/Svg'

interface iProps {
  activeValue: boolean
  onUpdateItem: (val) => void
}

export default function ThemeSwitch(props: iProps) {
  const { activeValue, onUpdateItem } = props
  return (
    <SwitchWrapper
      style={{ background: activeValue === true ? '#E4E7EC' : '#636363' }}
    >
      <div
        key="lightMode"
        className={cn('switchItemLight', {
          active: activeValue === true,
        })}
        onClick={() => onUpdateItem(false)}
      >
        <LightModeIcon width="22px" height="22px" fill="none" />
      </div>
      <div
        key="darkMode"
        className={cn('switchItemDark', {
          active: activeValue === false,
        })}
        onClick={() => onUpdateItem(true)}
      >
        <DarkModeIcon width="22px" height="22px" fill="none" />
      </div>
    </SwitchWrapper>
  )
}
