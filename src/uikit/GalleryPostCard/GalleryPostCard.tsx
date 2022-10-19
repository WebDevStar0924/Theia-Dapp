import { GalleryPostCardWrapper } from './styles'
import { useOutletContext } from 'react-router-dom'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { CommentButton } from 'components/CommentButton'
import { SaveButton } from 'components/SaveButton'
import { ShareButton } from 'components/ShareButton'
import defaultProjectBanner from '../../assets/image/defaultProjectBanner.png'
export default function GalleryPostCard() {
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const count = 5
  return (
    <GalleryPostCardWrapper>
      <Flex
        className={'postHeader'}
        flexDirection="row"
        justifyContent={'space-between'}
      >
        <Flex className={'profile'} flexDirection="column">
          <img
            src={collectiveInfo.avatar}
            className="userNftAvatar"
            alt="user nft image"
          />
          <Flex className={'ownerName'}>larrykong.eth</Flex>
        </Flex>
        <Flex className={'postedTime'}>11 MINS AGO</Flex>
      </Flex>

      <Flex className={'postContext'} flexDirection="column">
        <Flex className={'postImage'}>
          <img src={defaultProjectBanner}></img>
        </Flex>
        <Flex className={'postDescription'}>
          this nft artist is slept on for real
        </Flex>
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
    </GalleryPostCardWrapper>
  )
}
