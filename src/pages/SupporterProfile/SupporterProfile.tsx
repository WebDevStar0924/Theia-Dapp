import cn from 'classnames'
import { useEffect, useState } from 'react'
import { BsGlobe, BsTwitter } from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import API from '../../api/api'
import sampleImg from '../../assets/image/defaultProjectIcon.png'
import sampleBanner from '../../assets/image/defaultSupporterBanner.png'
import ProfileDashboard from '../../components/Profiles/ProfileDashboard'
import ProfileFavorites from '../../components/Profiles/ProfileFavorites'
import ProfileGallery from '../../components/Profiles/ProfileGallery'
import ProfileSettings from '../../components/Profiles/ProfileSettings'
import { DiscordIcon, Location } from '../../components/Svg'
import useActiveWeb3React from '../../hooks/useActiveWeb3React'
import { State } from '../../state/types'
import { SupporterProfileContainer } from './styles'

export default function SupporterProfile() {
  const { tabItem } = useParams()
  const [profileTab, updateProfileTab] = useState(tabItem ?? 'settings')
  const { account } = useActiveWeb3React()
  const profileData = useSelector((state: State) => state.profile.data)
  const [collectives, updateCollectives] = useState<any[]>([])
  const [projects, updateProjects] = useState<any[]>([])
  const [favorites, updateFavorites] = useState<any[]>([])
  const [pageNum, updatePageNum] = useState({
    collectives: 0,
    projects: 0,
    favorites: 0,
  })

  useEffect(() => {
    API.getUserFavorites(account, pageNum.favorites, 5)
      .then((res) => {
        updateFavorites(res.data.favorites)
      })
      .catch(() => {
        const sampleResponse = [
          {
            collectiveName: 'Acme Inc',
            type: 'Collective',
            icon: null,
          },
          {
            collectiveName: 'Acme Inc1',
            type: 'Collective',
            icon: null,
          },
          {
            projectName: 'Project1',
            type: 'Project',
            icon: null,
          },
          {
            projectName: 'Project2',
            type: 'Project',
            icon: null,
          },
          {
            projectName: 'Project4',
            type: 'Project',
            icon: null,
          },
        ]
        updateFavorites([...favorites, ...sampleResponse])
      })
  }, [pageNum.favorites])

  useEffect(() => {
    API.getUserCollectives(account, pageNum.collectives, 5)
      .then((res) => {
        updateCollectives(res.data.collectives)
      })
      .catch(() => {
        const sampleResponse = [
          {
            collectiveName: 'Acme Inc',
            type: 'Collective',
            icon: null,
          },
          {
            collectiveName: 'Acme Inc1',
            type: 'Collective',
            icon: null,
          },
          {
            collectiveName: 'Acme Inc2',
            type: 'Collective',
            icon: null,
          },
          {
            collectiveName: 'Acme Inc3',
            type: 'Collective',
            icon: null,
          },
        ]
        updateCollectives([...collectives, ...sampleResponse])
      })
  }, [pageNum.collectives])

  useEffect(() => {
    API.getUserProjects(account, pageNum.projects, 5)
      .then((res) => {
        updateProjects(res.data.projects)
      })
      .catch(() => {
        const sampleResponse = [
          {
            projectName: 'Project1',
            type: 'Project',
            icon: null,
          },
          {
            projectName: 'Project2',
            type: 'Project',
            icon: null,
          },
          {
            projectName: 'Project3',
            type: 'Project',
            icon: null,
          },
          {
            projectName: 'Project4',
            type: 'Project',
            icon: null,
          },
        ]
        updateProjects([...projects, ...sampleResponse])
      })
  }, [pageNum.projects])

  return (
    <>
      <SupporterProfileContainer>
        <div className={'profileInfo'}>
          <img
            src={
              profileData.banner && profileData.banner !== ''
                ? profileData.banner
                : sampleBanner
            }
            width={'100%'}
            alt={'banner'}
            className={'banner'}
          />
          <div className={'Elipse-80'}>
            <img
              src={
                profileData.avatar && profileData.avatar !== ''
                  ? profileData.avatar
                  : sampleImg
              }
              className={'iconImage'}
              alt={'userAvatar'}
            />
          </div>
          <div className="infoSection">
            <div className={'name'}>
              <span>{profileData.name}</span>
              <div className={'linksButtons'}>
                {profileData.discord && (
                  <a href={'#'} key={'social_discord'}>
                    <DiscordIcon />
                  </a>
                )}
                {profileData.twitter && (
                  <a href={'#'} key={'social_twitter'}>
                    <BsTwitter size={25} className={'twitterIcon'} />
                  </a>
                )}
                {profileData.website && (
                  <a href={profileData.website} target={'_blank'}>
                    <BsGlobe size={25} className={'globeIcon'} />
                  </a>
                )}
              </div>
            </div>

            <div className={'userName'}>
              <span>{profileData.username}</span>
            </div>
            <div className={'shortDescription'}>
              {profileData.shortDescription}
            </div>
            {profileData.location && (
              <div className={'locationList'}>
                <Location />
                <div className={'location'}>
                  <span>{profileData.location}</span>
                </div>
              </div>
            )}
            <div className={'tabList'}>
              {/* <div
				className={cn("tabItem", {
				  active: profileTab === "gallery",
				})}
				onClick={() => updateProfileTab("gallery")}
			  >
				Gallery
			  </div>
			  <div
				className={cn("tabItem", {
				  active: profileTab === "collectives",
				})}
				onClick={() => updateProfileTab("collectives")}
			  >
				Collectives
			  </div>
			  <div
				className={cn("tabItem", {
				  active: profileTab === "favorites",
				})}
				onClick={() => updateProfileTab("favorites")}
			  >
				Favorites
			  </div> */}
              <div
                className={cn('tabItem', {
                  active: profileTab === 'settings',
                })}
                onClick={() => updateProfileTab('settings')}
              >
                Settings
              </div>
            </div>
          </div>
        </div>

        <div className={'profileDetails'}>
          {profileTab === 'dashboard' && (
            <ProfileDashboard
              collectives={collectives}
              projects={projects}
              pageNum={pageNum}
              onMore={(type) => {
                updatePageNum({
                  ...pageNum,
                  [type]: pageNum[type] + 1,
                })
              }}
            />
          )}
          {profileTab === 'gallery' && <ProfileGallery />}
          {profileTab === 'favorites' && <ProfileFavorites />}
          {profileTab === 'settings' && (
            <ProfileSettings profileData={profileData} />
          )}
        </div>
      </SupporterProfileContainer>
    </>
  )
}
