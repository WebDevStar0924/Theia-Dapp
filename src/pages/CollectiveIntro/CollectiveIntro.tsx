import { Header } from '../../layout/Header'
import { MotionButton } from '../../components/MotionButton/styles'
import { CollectiveIntroWrapper } from './styles'
import { ReactComponent as CommunitySvg } from './Community.svg'
import { ReactComponent as MarketsSvg } from './market.svg'
import { useNavigate } from 'react-router-dom'

export default function CollectiveIntro() {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <CollectiveIntroWrapper className={'content'}>
        <div className={'heading'}>
          A Home for
          <br /> Web3 Communities
        </div>
        <div className={'supportingText'}>
          THEIA is a community of collectives, projects and
          <br /> supporters building the future of Web3.{' '}
        </div>
        <MotionButton
          bgColor={'#101828'}
          color={'#fff'}
          onClick={() => navigate('/collective/magic')}
          className={'joinBtn'}
        >
          JOIN
        </MotionButton>
        <CommunitySvg className={'communitySvg'} />
        <MarketsSvg className={'marketsSvg'} />
      </CollectiveIntroWrapper>
    </>
  )
}
