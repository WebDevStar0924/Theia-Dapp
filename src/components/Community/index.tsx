import { CommunityLeftWrapper, CommunityWrapper } from './styles'
import { MotionButton } from '../MotionButton/styles'
import { BsArrowRight } from 'react-icons/all'
import communityImg from './community.png'
import { useNavigate } from 'react-router-dom'

export default function Community() {
  const navigate = useNavigate()
  return (
    <CommunityWrapper>
      <CommunityLeftWrapper>
        <div className={'communityName'}>
          Revolutionizing Funding for Web 3.0
        </div>
        <div className={'communityDesc'}>
          THEIA is a community of creators and investors building the future of
          Web3.
        </div>
        <div className={'buttonGroup'}>
          <MotionButton
            bgColor={'#101828'}
            color={'#FFFFFF'}
            onClick={() => {
              navigate('/project/list/all')
            }}
          >
            Invest
          </MotionButton>
          <MotionButton
            onClick={() => {
              navigate('/project/intro')
            }}
          >
            Create
          </MotionButton>
        </div>
        <a
          href={
            'https://medium.com/@theia.finance/testnet-v2-manual-262b31a2f86e'
          }
          target={'_blank'}
        >
          How it works <BsArrowRight />
        </a>
      </CommunityLeftWrapper>

      <img src={communityImg} alt={'community'} />
    </CommunityWrapper>
  )
}
