import { Flex } from 'components/Flex'
import { HeartButton } from 'components/HeartButton'
import { CommentButton } from 'components/CommentButton'
import { SaveButton } from 'components/SaveButton'
import defaultProjectBanner from '../../assets/image/defaultProjectBanner.png'
import { ShareButton } from 'components/ShareButton'
import { Backbutton } from 'components/ForumCard/styles'

import {
  CollectiveDetailsContainer,
  HomeTabV2Wrapper,
} from 'pages/CollectiveDetails/styles'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { MdArrowBack } from 'react-icons/all'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { ForumPostCardWrapper } from 'uikit/ForumPostCard/styles'
import { ForumCommentCard } from 'uikit/ForumCommentCard'
import { ReplyCommentBox } from 'uikit/ReplyCommentBox'

export default function ForumDetails() {
  const { cname, prev_tab, post_id: forum_id } = useParams()

  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()

  const navigate = useNavigate()
  const postTextList = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euturpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec  fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus  elit sed risus. Maecenas eget condimentum velit, sit amet feugiat  lectus. Class aptent taciti sociosqu ad litora torquent per conubia  nostra, per inceptos himenaeos. Praesent auctor purus luctus enim  egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Lorem  ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis  molestie, dictum est a, mattis tellus. Sed dignissim, metus nec  fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus  elit sed risus. Maecenas eget condimentum velit, sit amet feugiat  lectus. Class aptent taciti sociosqu ad litora torquent per conubia  nostra, per inceptos himenaeos. Praesent auctor purus luctus enim  egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  ]
  const fakeData = ['media1', 'media2', 'media3', 'media4']
  const count = 5
  const postMedia = fakeData.slice(2)
  const mediaCount = postMedia.length
  const gifUrl =
    'https://camo.githubusercontent.com/e4a569755580f96dce0e6d65bc761e0d9aef0fecae524ec73a1b0be60fc934fa/68747470733a2f2f7777772e6d79676f2e67652f75706c6f6164732f626c6f672f313538343032333739352e6a7067'
  return (
    <>
      {collectiveInfo && (
        <CollectiveDetailsContainer>
          <div className={'detailsContent'}>
            <HomeTabV2Wrapper>
              <div className="leftPart">
                <Backbutton
                  onClick={() => {
                    navigate(`/collective/${cname}/${prev_tab}`, {
                      replace: false,
                      state: {
                        forum_id,
                      },
                    })
                  }}
                >
                  <MdArrowBack size={25} />
                </Backbutton>
                <div className="underLine"></div>
                <ForumPostCardWrapper className="forumCard">
                  <Flex className={'dataLayout'} flexDirection="column">
                    <Flex
                      className={'postHeader'}
                      flexDirection="row"
                      justifyContent={'space-between'}
                    >
                      <Flex flexDirection={'row'} alignItems="center">
                        <img
                          src={collectiveInfo.avatar}
                          className="userNftAvatar"
                          alt="user nft image"
                          key={'sdfs'}
                        />

                        <Flex className={'ownerName'}>larrykong.eth</Flex>
                      </Flex>
                      <Flex className={'postedTime'}>11 MINS AGO</Flex>
                    </Flex>
                    <Flex className={'postContextForumDetails'}>
                      {postTextList[0]}
                    </Flex>
                    <Flex className={'imageLayout'} flexDirection="row">
                      {postMedia.map((value, index) => {
                        return mediaCount == 3 && index == 2 ? (
                          <img
                            src={defaultProjectBanner}
                            style={{
                              width: '270px',
                              height: '400px',
                              gridRowStart: '1',
                              gridRowEnd: '3',
                            }}
                            key={value + index}
                          ></img>
                        ) : (
                          <img
                            src={index == 0 ? gifUrl : defaultProjectBanner}
                            style={{
                              width: mediaCount == 1 ? '550px' : '270px',
                              height:
                                mediaCount == 1
                                  ? '360px'
                                  : mediaCount == 2
                                  ? '288px'
                                  : mediaCount == 3 && index == 2
                                  ? '288px'
                                  : '195px',
                            }}
                            key={value + index}
                          ></img>
                        )
                      })}
                    </Flex>
                    <div
                      className="underLine"
                      style={{ marginTop: '20px' }}
                    ></div>
                    <Flex
                      flexDirection="row"
                      alignItems="center"
                      className="replyActionLayout"
                      style={{ alignSelf: 'center' }}
                    >
                      <CommentButton
                        count={count.toString()}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                      />
                      <HeartButton
                        count={count.toString()}
                        size={'lg'}
                        onClick={(e) => {
                          e.stopPropagation()
                        }}
                        active={false}
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
                </ForumPostCardWrapper>
                <div className="underLine"></div>
                <ReplyCommentBox isSubComment={false}></ReplyCommentBox>
                <div className="underLine"></div>

                <Flex className="commentList" flexDirection={'column'}>
                  <ForumCommentCard></ForumCommentCard>
                  <div className="underLine"></div>
                </Flex>
              </div>
            </HomeTabV2Wrapper>
          </div>
        </CollectiveDetailsContainer>
      )}
    </>
  )
}
