import { EventCarousel } from 'components/Carousel'
import { EventCard } from 'components/EventCard'
import { FilterBar } from 'components/FilterBar'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useMembership } from 'hooks/useMembership'
import moment from 'moment'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useMemo, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { Switch } from '../../../components/Switch'
import { EventsTabWrapper } from '../styles'

export default function EventsTab() {
  const { account } = useActiveWeb3React()
  const {
    events,
    sort,
    updateSort,
    filter,
    updateFilter,
    setEvents,
    collectiveInfo,
  } = useOutletContext<CollectiveContextProps>()
  const onMemberShipCheck = useMembership()
  const switchItems = [
    {
      value: 'upcoming',
      label: 'UPCOMING',
    },
    {
      value: 'featured',
      label: 'FEATURED',
    },
    {
      value: 'past',
      label: 'PAST',
    },
  ]
  const [activeSwitchItem, setActiveSwitchItem] = useState(switchItems[0].value)
  const navigate = useNavigate()
  const responsive = {
    xlarge: {
      breakpoint: {
        max: 3000,
        min: 1920,
      },
      items: 3,
      partialVisibilityGutter: 50,
    },
    large: {
      breakpoint: {
        max: 1920,
        min: 1440,
      },
      items: 4,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: {
        max: 1440,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }
  const onUpdateEvent = (idx: number, event: any) => {
    const newEvents = [...events]
    newEvents[idx] = event
    setEvents(newEvents)
  }

  const upcomingEvents = useMemo(() => {
    const favoriteWeight = 1
    const crownWeight = 2
    const commentWeight = 3
    const sortFunction = (a, b) => {
      const likeA =
        Number(a.votes) +
        Number(a.favorite_count) * favoriteWeight +
        Number(a.crown_count) * crownWeight +
        Number(a.commentscount) * commentWeight
      const likeB =
        Number(b.votes) +
        Number(b.favorite_count) * favoriteWeight +
        Number(b.crown_count) * crownWeight +
        Number(b.commentscount) * commentWeight
      if (sort === 'new') {
        return a.createdat - b.createdat
      } else if (sort === 'trending') {
        const hotnessA = (likeA + 1) * 287015 + moment(a.createdat).unix()
        const hotnessB = (likeB + 1) * 287015 + moment(b.createdat).unix()
        return hotnessB - hotnessA
      } else if (sort === 'top') {
        return likeB - likeA
      }
      return 0
    }
    let newData = [...events]
    if (sort === 'trending' || sort === 'new') {
      newData = newData.filter((ev) => {
        return moment(ev.event_date).unix() > moment().startOf('day').unix()
      })
    }
    if (filter.onlySaved) {
      newData = newData.filter((item) => Number(item.is_saved) === 1)
    }
    if (filter.onlyMyPosts) {
      newData = newData.filter((item) => item.owneraddress === account)
    }

    return newData.sort(sortFunction)
  }, [sort, filter, events])

  const filteredEvents = useMemo(() => {
    let newData = [...events]
    if (activeSwitchItem === 'upcoming') {
      newData = newData.filter((ev) => {
        return moment(ev.event_date).unix() > moment().startOf('day').unix()
      })
    } else if (activeSwitchItem === 'past') {
      newData = newData.filter(
        (ev) => moment().unix() > moment(ev.event_date).unix(),
      )
    }
    if (filter.onlySaved) {
      newData = newData.filter((item) => Number(item.is_saved) === 1)
    }
    if (filter.onlyMyPosts) {
      newData = newData.filter((item) => item.owneraddress === account)
    }
    return newData
  }, [activeSwitchItem, events, filter])

  return (
    <EventsTabWrapper>
      <FilterBar
        sort={sort}
        updateSort={updateSort}
        filter={filter}
        updateFilter={updateFilter}
      />

      <div className="mainPart">
        <div className={'sideContent'}>
          <EventCarousel
            items={upcomingEvents.map((item, idx) => (
              <EventCard
                data={item}
                eventData={item}
                onClick={
                  () =>
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => {
                        navigate(
                          `eventdetails/${item.owneraddress}/${item.event_id}/events`,
                        )
                      },
                    )
                  // navigate(
                  //   `eventdetails/${item.owneraddress}/${item.event_id}/events`,
                  // )
                }
                sort={sort}
                key={idx}
                onUpdateEvent={(event) => onUpdateEvent(idx, event)}
              />
            ))}
            responsive={responsive}
          />
        </div>
        <div
          style={{
            width: 'fit-content',
            background: 'white',
            fontSize: '25px',
            marginBottom: '24px',
            marginTop: '48px',
          }}
          className={'eventFilterSwitch'}
        >
          <Switch
            items={switchItems}
            activeValue={activeSwitchItem}
            onUpdateItem={(val) => setActiveSwitchItem(val)}
          />
        </div>
        <div className={'eventGridList'}>
          {filteredEvents.map((item, idx) => (
            <div id={`event${item.event_id}`}>
              <EventCard
                data={item}
                eventData={item}
                onClick={
                  () =>
                    onMemberShipCheck(
                      collectiveInfo.collective_id,
                      account,
                      () => {
                        navigate(
                          `eventdetails/${item.owneraddress}/${item.event_id}/events`,
                        )
                      },
                    )

                  // navigate(
                  //   `eventdetails/${item.owneraddress}/${item.event_id}/events`,
                  // )
                }
                sort={sort}
                key={idx}
                onUpdateEvent={(event) => onUpdateEvent(idx, event)}
              />
            </div>
          ))}
        </div>
      </div>
    </EventsTabWrapper>
  )
}
