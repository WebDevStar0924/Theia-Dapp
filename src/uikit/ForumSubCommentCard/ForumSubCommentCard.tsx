import { ForumSubCommentCardWrapper } from './styles'
import { useOutletContext } from 'react-router-dom'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import defaultProjectBanner from '../../assets/image/defaultProjectBanner.png'
import { useState } from 'react'

import { ReplyCommentBox } from 'uikit/ReplyCommentBox'
export default function ForumSubCommentCard() {
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const postTextList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec  fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus  elit sed risus. Maecenas eget condimentum velit, sit amet feugiat  lectus. Class aptent taciti sociosqu ad litora torquent per conubia  nostra, per inceptos himenaeos. Praesent auctor purus luctus enim  egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec  fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus  elit sed risus. Maecenas eget condimentum velit, sit amet feugiat  lectus. Class aptent taciti sociosqu ad litora torquent per conubia  nostra, per inceptos himenaeos. Praesent auctor purus luctus enim  egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ]
  const fakeData = ['media1', 'media2', 'media3', 'media4']
  const [visibleReplyBox, ShowReplyBox] = useState(false)
  const count = 5
  const postMedia = fakeData.slice(1)
  const mediaCount = postMedia.length
  const gifUrl =
    'https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067'
  const userInfo = '@larrykong.eth '

  return (
    <>
      {
        <ForumSubCommentCardWrapper>
          <Flex>
            <img
              src={collectiveInfo.avatar}
              className="userNftAvatar"
              alt="user nft image"
            />
            <Flex className={'dataLayout'} flexDirection="column">
              <Flex
                className={'postHeader'}
                flexDirection="row"
                justifyContent={'space-between'}
              >
                <Flex className={'ownerName'}>larrykong.eth</Flex>
                <Flex className={'postedTime'} marginLeft={'10px'}>
                  11 MINS AGO
                </Flex>
              </Flex>
              <Flex alignItems={'center'}>
                Replying to <span className="userInfo">{userInfo}</span>
              </Flex>
              <Flex className={'postContext'}>{postTextList[0]}</Flex>
              <Flex
                className={'imageLayout'}
                flexDirection="row"
                style={{ gridGap: mediaCount == 1 ? '0px' : '10px' }}
              >
                {postMedia.map((value, index) => {
                  return mediaCount == 3 && index == 2 ? (
                    <img
                      key={value + index}
                      src={defaultProjectBanner}
                      style={{
                        width: '240px',
                        height: '400px',
                        gridRowStart: '1',
                        gridRowEnd: '3',
                      }}
                    ></img>
                  ) : (
                    <img
                      key={value + index}
                      src={index == 0 ? gifUrl : defaultProjectBanner}
                      style={{
                        width: mediaCount == 1 ? '490px' : '240px',
                        height:
                          mediaCount == 1
                            ? '550px'
                            : mediaCount == 2
                            ? '288px'
                            : mediaCount == 3 && index == 2
                            ? '288px'
                            : '195px',
                      }}
                    ></img>
                  )
                })}
              </Flex>
              <Flex
                flexDirection="row"
                alignItems="center"
                className="replyActionLayout"
              >
                <div
                  className="commentButton"
                  onClick={(e) => {
                    e.stopPropagation(), ShowReplyBox(!visibleReplyBox)
                  }}
                >
                  Reply
                </div>
                <HeartButton
                  count={count.toString()}
                  size={'lg'}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  active={false}
                />
              </Flex>
            </Flex>
          </Flex>
          {visibleReplyBox && (
            <div>
              <div
                className={'underLine'}
                style={{ margin: '10px -13px 0px -70px' }}
              ></div>
              <ReplyCommentBox isSubComment={true}></ReplyCommentBox>
            </div>
          )}
        </ForumSubCommentCardWrapper>
      }
    </>
  )
}
