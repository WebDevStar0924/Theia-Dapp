import { useLocation, useNavigate } from 'react-router-dom'
// import classnames from 'classnames'
import {
  SaveFillIcon,
  CompassFillIcon,
  HomeOutlineFillIcon,
  HomeOutlineIcon,
  SaveOutlineIcon,
  CompassOutlineIcon,
} from '../../components/Svg'
import { SidebarV2Wrapper } from './styles'
import { useState } from 'react'

export default function Sidebar() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('home')
  return (
    <SidebarV2Wrapper marginTop={'64px'}>
      <div className={'menuList'}>
        <div
          className={'menuItem'}
          onClick={() => {
            navigate('/'), setActiveTab('home')
          }}
        >
          {activeTab == 'home' ? <HomeOutlineFillIcon /> : <HomeOutlineIcon />}
        </div>
        <div
          className={'menuItem'}
          onClick={() => {
            navigate(`/`), setActiveTab('explore')
          }}
        >
          {activeTab == 'explore' ? (
            <CompassFillIcon />
          ) : (
            <CompassOutlineIcon />
          )}
        </div>
        <div
          className={'menuItem'}
          onClick={() => {
            navigate('/'), setActiveTab('save')
          }}
        >
          {activeTab == 'save' ? <SaveFillIcon /> : <SaveOutlineIcon />}
        </div>

        {/* <div className={'menuItem disabled'}><MarketIcon stroke="#98A2B3" width={'28px'}/></div>
				<div className={'menuItem disabled'}><BookIcon stroke="#98A2B3" width={'20px'}/></div> */}
      </div>
      {/* <div className={'socialList'}>
        <div className={'socialItem'}>
          <TwitterIcon width={'15px'} fill={'black'} />
        </div>
        <div className={'socialItem'}>
          <DiscordIcon width={'15px'} fill={'black'} />
        </div>
      </div> */}
    </SidebarV2Wrapper>
  )
}
