import { MotionButton } from 'components/MotionButton/styles'
import { SendIcon } from 'components/Svg'
import { useToast } from 'hooks/useToast'
import { useLocation } from 'react-router-dom'
import defaultProjectBanner from '../../assets/image/defaultProjectBanner.png'
import defaultProjectIcon from '../../assets/image/defaultProjectIcon.png'
import { CollectiveHeaderWrapper } from './styles'

interface iProps {
  collectiveInfo: any
  updateCollectiveInfo: (data: any) => void
}
export default function CollectiveHeader(props: iProps) {
  const { collectiveInfo } = props
  const location = useLocation()
  const { toastSuccess } = useToast()
  return (
    <CollectiveHeaderWrapper>
      {location.pathname.split('/')[3] !== 'gallery' && <div style={{ height: '64px', width: '100%', background: 'transparent' }}></div>}
      <img
        src={
          collectiveInfo.banner && collectiveInfo.banner !== ''
            ? collectiveInfo.banner
            : defaultProjectBanner
        }
        className="bannerImg"
      />
      {location.pathname.split('/')[3] !== 'gallery' ? (
        <img
          src={
            collectiveInfo.avatar && collectiveInfo.avatar !== ''
              ? collectiveInfo.avatar
              : defaultProjectIcon
          }
          className="avatarImg"
          style={{ top: '144px' }}
        />
      ) : (
        <img
          src={
            collectiveInfo.avatar && collectiveInfo.avatar !== ''
              ? collectiveInfo.avatar
              : defaultProjectIcon
          }
          className="avatarImg"
          style={{ left: 'calc(50% - 80px)' }}
        />
      )}
      {location.pathname.split('/')[3] !== 'gallery' && (
        <div className={'detailActions'}>
          <div>
            <div className={'title'}>{collectiveInfo.name} </div>
            <div className={'shortDescription'}>{collectiveInfo.tagline}</div>
          </div>
          <div className={'detailMore'}>
            <MotionButton
              className={'detailMoreBtn2'}
              borderColor={'#D0D5DD'}
              onClick={() => {
                const shareLink = window.location.href
                if ('clipboard' in navigator) {
                  navigator.clipboard.writeText(shareLink.toString())
                } else {
                  document.execCommand('copy', false, `${shareLink.toString()}`)
                }
                toastSuccess('Share link is copied', '')
              }}
            >
              <SendIcon width={'16px'} height={'16px'} /> SHARE
            </MotionButton>
          </div>
        </div>
      )}
      {location.pathname.split('/')[3] !== 'gallery' && <div className="underLine"></div>}
    </CollectiveHeaderWrapper>
  )
}
