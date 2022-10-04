import { useModal } from '../Modal'
import InvestSellModal from './SellModal'
import InvestBuyModal from './BuyModal'

interface ReturnType {
  onPresentInvestSellModal: () => void
}
const useInvestSellModal = (projectID: string, cfAddr: string): ReturnType => {
  const [onPresentInvestSellModal] = useModal(
    <InvestSellModal projectID={projectID} cfAddr={cfAddr} />,
  )
  return { onPresentInvestSellModal }
}

const useInvestBuyModal = (projectID: string, cfAddr: string) => {
  const [onPresentInvestBuyModal] = useModal(
    <InvestBuyModal cfAddr={cfAddr} projectID={projectID} />,
  )
  return { onPresentInvestBuyModal }
}

export { useInvestSellModal, useInvestBuyModal }
