import { ReplyItemWrapper } from './styles'

export default function EventCommentCard() {
  return (
    <>
      <ReplyItemWrapper>
        <div className={'replyContent'}>
          <div className={'replyHeader'}>
            <div className={'replyOwner'}>
              <div className="userDefaultImage" />
              <div className={'userName'}>saltakira</div>
              <span className={'userType memberTag'}>MEMBER</span>
              <span className={'replyTime'}>8 MIN AGO</span>
            </div>
          </div>
          <div className={'replyMessage'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>

          <div className={'replyAction2'}></div>
        </div>
      </ReplyItemWrapper>
    </>
  )
}
