import { Flex } from 'components/Flex'
import moment from 'moment'
import { UserInfo } from 'pages/SupporterProfile/types'
import { getDiffTime } from 'utils'
import { StyledPostTop } from './styles'
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon'

interface iProps {
  creator: UserInfo
  createdat?: string
}
export default function PostTop(props: iProps) {
  const { creator, createdat } = props
  return (
    <StyledPostTop>
      <Flex style={{ gridGap: '10px' }} alignItems="center">
        {creator.avatar != null && creator.avatar != 'null' ? (
          <img
            src={creator.avatar}
            className="creatorAvatar"
            alt={creator.name}
          />
        ) : (
          <Jazzicon
            diameter={60}
            seed={jsNumberForAddress(creator.walletaddress)}
          />
        )}
        <span className="username">{creator.name}</span>
        <span className="userTag">MEMBER</span>
      </Flex>
      <div className="createTime">{getDiffTime(moment(createdat))}</div>
    </StyledPostTop>
  )
}
