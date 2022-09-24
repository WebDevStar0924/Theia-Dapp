import { memo } from 'react'
interface iProps {
  data: any
  dataIndex: any
}
export const ImageCard = memo(function (props: iProps) {
  const { data, dataIndex } = props
  const { cover } = data[dataIndex]
  return (
    <div
      style={{
        width: '100%',
        height: 300,
        userSelect: 'none',
      }}
      key={`carousel_${dataIndex}`}
      className="my-slide-component"
    >
      <video
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
          borderRadius: 0,
        }}
        draggable={false}
        src={cover}
        autoPlay
        muted
        loop
      />
    </div>
  )
})
