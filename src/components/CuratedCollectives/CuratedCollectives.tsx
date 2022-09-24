import '@splidejs/react-splide/dist/css/splide.min.css'
import curatedCollective1 from '../../assets/image/curatedCollective1.png'
import curatedCollective2 from '../../assets/image/curatedCollective2.png'
import curatedCollective3 from '../../assets/image/curatedCollective3.png'
import curatedCollectiveBg from '../../assets/image/curatedCollectiveBg.png'
import { Flex } from '../Flex'
import Checkmark from '../Svg/Icons/Checkmark'
import { CuratedCollectivesWrapper } from './styles'

export default function CuratedCollectives() {
  const collectives = [
    {
      name: 'Noodles',
      verified: true,
      description:
        'Noodles is an NFT collection of 5,555 noodles that is a comical interpretation and mash-up of Doodles and instant noodles.',
      image: curatedCollective1,
    },
    {
      name: 'SheFi',
      verified: true,
      description:
        'SheFi is an NFT collection of 5,555 noodles that is a comical interpretation and mash-up of Doodles and instant noodles.',
      image: curatedCollective2,
    },
    {
      name: 'Boys Club',
      verified: true,
      description:
        'Boys Club is an NFT collection of 5,555 noodles that is a comical interpretation and mash-up of Doodles and instant noodles.',
      image: curatedCollective3,
    },
  ]
  return (
    <CuratedCollectivesWrapper bg={curatedCollectiveBg}>
      <div className={'curatedLabel'}>Curated Collectives</div>
      <Flex
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}
        style={{ gridGap: '40px' }}
      >
        {collectives.map((collective, index) => (
          <div className={'curatedCollective'} key={`curative_${index}`}>
            <img
              className={'curatedCollectiveImg'}
              src={collective.image}
              alt="curatedCollectiveBg"
            />
            <div className={'curatedCollectiveBgGradient'} />
            <div className={'curatedCollectiveInfo'}>
              <div className={'infoHeader'}>
                <div className={'infoName'}>{collective.name}</div>
                {collective.verified && (
                  <div className={'checkContainer'}>
                    <Checkmark width={'14px'} fill={'#6CE9A6'} />
                  </div>
                )}
              </div>
              <div className={'infoDescription'}>{collective.description}</div>
            </div>
          </div>
        ))}
      </Flex>
    </CuratedCollectivesWrapper>
  )
}
