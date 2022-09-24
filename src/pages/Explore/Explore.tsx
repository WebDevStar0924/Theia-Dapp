import cn from 'classnames'
import { useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { useNavigate } from 'react-router-dom'
import All from '../../components/ExploreTabs/all'
import { ExploreWrapper } from './styles'

//import { List, ListItem, Loading } from '../components/List';

export default function Explore() {
  const [tab, updateTab] = useState('dashboard')
  const navigate = useNavigate()

  return (
    <ExploreWrapper>
      <div className={'exploreHeader'}>
        <div>Explore</div>
        <div className={'CarouselWrapper'}>
          <Carousel
            axis={'vertical'}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            showIndicators={false}
            centerMode={false}
            autoPlay={true}
            swipeable={false}
            width={'100%'}
            infiniteLoop={true}
          >
            <div className={'collectivesFont'}>COLLECTVES</div>
            <div className={'artFont'}>ART</div>
            <div className={'musicFont'}>MUSIC</div>
            <div className={'gamingFont'}>GAMING</div>
            <div className={'filmFont'}>FILM</div>
          </Carousel>
        </div>
      </div>
      <div className={'tabList'}>
        <div
          className={cn('tabItem', {
            active: tab === 'ALL',
          })}
          onClick={() => {
            navigate('/explore/all')
            updateTab('ALL')
          }}
        >
          ALL
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'TRENDING',
          })}
          onClick={() => {
            navigate('/explore/trending')
            updateTab('TRENDING')
          }}
        >
          TRENDING 🔥
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'NEW',
          })}
          onClick={() => {
            navigate('/explore/new')
            updateTab('NEW')
          }}
        >
          NEW ❗️
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'VERIFIED',
          })}
          onClick={() => {
            navigate('/explore/verified')
            updateTab('VERIFIED')
          }}
        >
          VERIFIED
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'ART',
          })}
          onClick={() => {
            navigate('/explore/art')
            updateTab('ART')
          }}
        >
          ART
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'MUSIC',
          })}
          onClick={() => {
            navigate('/explore/music')
            updateTab('MUSIC')
          }}
        >
          MUSIC
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'GAMING',
          })}
          onClick={() => {
            navigate('/explore/gaming')
            updateTab('GAMING')
          }}
        >
          GAMING
        </div>
        <div
          className={cn('tabItem', {
            active: tab === 'FILM',
          })}
          onClick={() => {
            navigate('/explore/film')
            updateTab('FILM')
          }}
        >
          FILM
        </div>
      </div>

      <div className={'allCollectives'}>{tab === 'ALL' && <All />}</div>
    </ExploreWrapper>

    //ask about the header buttons and what they need to do
    //also need to ask about what the pull down menu should do (assuming it stores link value somewhere)
  )
}
