import { useModal } from '../Modal'
import InviteModal from './InviteModal'

const useInviteModal = () => {
  const [onPresentInviteModal] = useModal(<InviteModal />)
  return { onPresentInviteModal }
}

export default useInviteModal
