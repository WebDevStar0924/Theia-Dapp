import { TrendingTopicsBarWrapper } from './styles'
import { TredingFireIcon } from 'components/Svg'
import { Flex } from 'components/Flex'
export default function HeaderProfile() {
  const trendsList: Array<string> = [
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
    '#Label',
  ]
  return (
    <TrendingTopicsBarWrapper>
      <TredingFireIcon></TredingFireIcon>
      <Flex className={'title'}>TREDNING</Flex>
      <div className="trendItemList">
        {trendsList.map((item, idx) => (
          <div id={`trend${idx}`} key={idx} className={'trendItem'}>
            {item}
          </div>
        ))}
      </div>
    </TrendingTopicsBarWrapper>
  )
}
