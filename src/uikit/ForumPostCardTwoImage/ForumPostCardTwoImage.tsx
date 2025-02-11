import { ForumPostCardTwoImageWrapper } from './styles'
import { useOutletContext } from 'react-router-dom'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { CommentButton } from 'components/CommentButton'
import { SaveButton } from 'components/SaveButton'
import defaultProjectBanner from '../../assets/image/defaultProjectBanner.png'
import { ShareButton } from 'components/ShareButton'
export default function ForumPostCardTwoImage() {
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const count = 5
  return (
    <ForumPostCardTwoImageWrapper>
      <img
        src={collectiveInfo.avatar}
        className="userNftAvatar"
        alt="user nft image"
      />
      <Flex className={'rightPart'} flexDirection="column">
        <Flex
          className={'postHeader'}
          flexDirection="row"
          justifyContent={'space-between'}
        >
          <Flex className={'ownerName'}>larrykong.eth</Flex>
          <Flex className={'postedTime'}>11 MINS AGO</Flex>
        </Flex>
        <Flex className={'postContext'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
          molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.{' '}
        </Flex>
        <Flex className={'imageLayout'} flexDirection="row">
          <img src={defaultProjectBanner}></img>
          <img src={defaultProjectBanner}></img>
        </Flex>
        <Flex
          flexDirection="row"
          alignItems="center"
          className="replyActionLayout"
        >
          <HeartButton
            count={count.toString()}
            size={'lg'}
            onClick={(e) => {
              e.stopPropagation()
            }}
            active={false}
          />
          <CommentButton
            count={count.toString()}
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
          <SaveButton
            onClick={(e) => {
              e.stopPropagation()
            }}
            isSaved={false}
          />
          <ShareButton
            onClick={(e) => {
              e.stopPropagation()
            }}
          />
        </Flex>
      </Flex>
    </ForumPostCardTwoImageWrapper>
  )
}
