import { NFTAvatarWrapper } from './styled'

interface iProps {
  avatarUrl: string
  width: string
}
export default function NFTAvatar(props: iProps) {
  const { avatarUrl, width } = props
  return (
    <NFTAvatarWrapper width={width}>
      <img src={avatarUrl} className="userNftAvatar" alt="user nft image" />
    </NFTAvatarWrapper>
  )
}
