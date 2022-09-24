import { TopSupporter, TopSupporterWrapper } from './styles'
import connoisseur from './assets/connoisseur.png'
import degen from './assets/degen.png'
import shitposter from './assets/shitposter.png'
import saltakira from './assets/saltakira.png'
import croissantsea from './assets/croissantsea.png'
import ratclarinet from './assets/ratclarinet.png'
import { ReactComponent as ConnoisseurBottom } from './assets/saltakiraBottom.svg'
import { ReactComponent as DegenBottom } from './assets/degenShape.svg'
import { ReactComponent as ShitposterBottom } from './assets/shitposterShape.svg'

export default function TopSupporters() {
  return (
    <TopSupporterWrapper>
      <div className={'title'}>Supporters of the Week</div>
      <div className={'supporter-list'}>
        <TopSupporter>
          <div className={'noise'} />
          <div className={'supporterIcon'}>🍷</div>
          <img
            src={connoisseur}
            alt={'nft connoisseur'}
            className={'supporterType'}
          />
          <div className={'supporterImg'}>
            <img src={saltakira} alt={'saltakira'} />
          </div>
          <div className={'supporterName'}>@saltakira</div>
          <ConnoisseurBottom className={'bottomShape'} />
        </TopSupporter>

        <TopSupporter>
          <div className={'noise'} />
          <div className={'supporterIcon'}>✨</div>
          <img
            src={degen}
            alt={'nft connoisseur'}
            className={'supporterType'}
          />
          <div className={'supporterImg'}>
            <img src={croissantsea} alt={'degen extraordinaire'} />
          </div>
          <div className={'supporterName'}>@croissantsea</div>
          <DegenBottom className={'bottomShape'} />
        </TopSupporter>

        <TopSupporter>
          <div className={'noise'} />
          <div className={'supporterIcon'}>👑</div>
          <img
            src={shitposter}
            alt={'nft connoisseur'}
            className={'supporterType'}
          />
          <div className={'supporterImg'}>
            <img src={ratclarinet} alt={'saltakira'} />
          </div>
          <div className={'supporterName'}>@ratclarinet</div>
          <ShitposterBottom className={'bottomShape'} />
        </TopSupporter>
      </div>
    </TopSupporterWrapper>
  )
}
