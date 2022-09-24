import 'styled-components'
import { TheiaTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends TheiaTheme {}
}
