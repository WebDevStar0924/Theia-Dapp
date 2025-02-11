import classnames from 'classnames'
import { TabListWrapper } from './styles'

interface iProps {
  activeTab: string | null
  items: { icon?: any; text: any; value: string; onClick?: () => void }[]
  setActiveTab: (item: string) => void
  gridGap?: string
  direction?: string
  minWidth?: string
}
export default function TabList(props: iProps) {
  const { activeTab, items, setActiveTab, gridGap, direction, minWidth } = props
  return (
    <TabListWrapper gridGap={gridGap} direction={direction} minWidth={minWidth}>
      {items.map((item, idx) => (
        <div
          className={classnames('tabItem', {
            active: activeTab === item.value,
          })}
          key={`tab_${item.value}_${idx}`}
          onClick={() => {
            if (item.onClick) {
              item.onClick()
            } else {
              setActiveTab(item.value)
            }
          }}
        >
          {item.icon && item.icon}
          <span>{item.text}</span>
        </div>
      ))}
    </TabListWrapper>
  )
}
