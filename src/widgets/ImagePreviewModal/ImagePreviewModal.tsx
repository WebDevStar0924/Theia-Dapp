import { Modal } from 'widgets/Modal'
import { Handler } from 'widgets/Modal/types'

interface iProps {
  params?: any
  onDismiss?: Handler
}

export default function ImagePreviewModal(props: iProps) {
  const { params: imageUrl } = props
  return (
    <Modal title="" width="800px" bodyPadding="0">
      <img src={imageUrl} width="100%" alt="image" />
    </Modal>
  )
}
