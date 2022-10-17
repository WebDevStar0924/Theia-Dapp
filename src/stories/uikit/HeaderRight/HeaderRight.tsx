import { HeaderRightWrapper } from './styles'
import { ThemeSwitch } from '../ThemeSwitch'

import { useState } from 'react'

interface iProps {
  themeMode: boolean
}

export default function HeaderRight(props: iProps) {
  const { themeMode } = props
  const [themeModeOption, setThemeMode] = useState(themeMode)

  return (
    <HeaderRightWrapper>
      <ThemeSwitch
        activeValue={themeModeOption}
        onUpdateItem={(val) => {
          setThemeMode(!val)
        }}
      ></ThemeSwitch>
    </HeaderRightWrapper>
  )
}
