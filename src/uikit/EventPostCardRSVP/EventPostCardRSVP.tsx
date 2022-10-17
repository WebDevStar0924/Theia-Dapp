import { EventPostCardRSVPWrapper } from './styles'
import { useOutletContext } from 'react-router-dom'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { CommentButton } from 'components/CommentButton'
import { SaveButton } from 'components/SaveButton'
import { ShareButton } from 'components/ShareButton'
import defaultProjectBanner from '../../assets/image/defaultProjectBanner.png'
import { MotionButtonV2 } from 'uikit/MotionButtonV2/styles'
import { FiClock } from 'react-icons/fi'
import { AiOutlineUser } from 'react-icons/ai'
export default function EventPostCardRSVP() {
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const count = 5
  return (
    <EventPostCardRSVPWrapper>
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
        <Flex className={'postContext'} flexDirection="column">
          <Flex className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </Flex>
          <Flex className="detailContent">
            <Flex className="leftContent" flexDirection="column">
              <Flex className="locationTag">VIRTUAL</Flex>
              <Flex className="eventTitle">PLACE HOLDER</Flex>
              <Flex flexDirection={'row'}>
                <FiClock fontSize="22px" color="#475467"></FiClock>
                <Flex flexDirection={'column'} marginLeft="11px">
                  <Flex className="eventDate">Friday, Oct 7</Flex>
                  <Flex className="eventTime">6PM-8PM</Flex>
                </Flex>
              </Flex>
              <Flex
                flexDirection={'row'}
                style={{ rowGap: '11px' }}
                alignItems="center"
              >
                <AiOutlineUser
                  fontSize={'28px'}
                  color="#475467"
                ></AiOutlineUser>
                <img
                  src={collectiveInfo.avatar}
                  className="userNftAvatar"
                  alt="user nft image"
                />
                <Flex className="userName">larrykong.eth</Flex>
              </Flex>
              <Flex
                flexDirection={'row'}
                style={{ rowGap: '-11px' }}
                alignItems="center"
                marginTop={'20px'}
                marginLeft={'10px'}
              >
                <img
                  src={collectiveInfo.avatar}
                  className="followUser"
                  alt="user nft image"
                />
                <img
                  src={collectiveInfo.avatar}
                  className="followUser"
                  alt="user nft image"
                />
                <img
                  src={collectiveInfo.avatar}
                  className="followUser"
                  alt="user nft image"
                />
                <img
                  src={collectiveInfo.avatar}
                  className="followUser"
                  alt="user nft image"
                />
                <img
                  src={collectiveInfo.avatar}
                  className="followUser"
                  alt="user nft image"
                />
                <div className={'moreUser'}>9+</div>
              </Flex>
            </Flex>
            <img src={defaultProjectBanner}></img>
          </Flex>
          <MotionButtonV2 className="rsvpButton">RSVP</MotionButtonV2>
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
    </EventPostCardRSVPWrapper>
  )
}
