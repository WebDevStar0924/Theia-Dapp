import './mint.scss'

interface iProps {
  videoSrc: string
  title: string
  content: string
}

const MintDetailItem = ({ videoSrc, title, content }: iProps) => {
  return (
    <div className="mint-detail-wrapper">
      <video
        className="mint-detail-wrapper__video"
        autoPlay
        loop
        muted
        src={videoSrc}
      />
      <h3 className="mint-detail-wrapper__title">{title}</h3>
      <label className="mint-detail-wrapper__content">{content}</label>
      <div style={{ marginTop: 48 }}>
        <div className="mintBtn">LAUNCH ALPHA APP</div>
      </div>
    </div>
  )
}

export default MintDetailItem
