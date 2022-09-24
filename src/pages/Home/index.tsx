import { Banner } from 'components/Banners'
import { BottomVideo } from 'components/BottomVideo'
import { BrowseCategory } from 'components/BrowseCategory'
import { CuratedCollectives } from 'components/CuratedCollectives'
import { NewCollectives } from 'components/NewCollectives'
import { PopularCollectives } from 'components/PopularCollectives'
import { TopSupporters } from 'components/TopSupporters'
import { HomeContentWrapper } from './styles'

export default function Home() {
  return (
    <HomeContentWrapper>
      <Banner />
      <PopularCollectives />
      <NewCollectives />
      <BrowseCategory />
      <CuratedCollectives />
      <TopSupporters />
      <BottomVideo />
    </HomeContentWrapper>
  )
}
