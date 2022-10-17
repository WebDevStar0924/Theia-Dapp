import { Button } from 'components/Button'
import { Dropdown } from 'components/Dropdown'
import ExternalInput from 'components/ExternalInput'
import { Flex } from 'components/Flex'
import { Switch } from 'components/Switch'
import moment from 'moment-timezone'
import { useEffect, useRef, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { updateEvent } from 'state/event'
import { State } from 'state/types'
import CalendarSvg from '../../assets/svg/calendar.svg'
import ClockSvg from '../../assets/svg/clock.svg'
import WorldSvg from '../../assets/svg/world.svg'
import { TimeOptions, TimeZones } from './data'
import { ModalBodyWrapper } from './styles'

export type eventBasicPageProps = {
  isActiveSaveButton: boolean
  updateDetailsData: (arg: boolean) => void
}

const EventBasicPage: React.FC<eventBasicPageProps> = ({
  isActiveSaveButton,
  updateDetailsData,
}) => {
  const eventData = useSelector((state: State) => state.event.data)
  const [activeLocationItem, setActiveLocationItem] = useState(
    eventData.location_type.toLowerCase(),
  )
  const [title, setTitle] = useState('')
  const [starttime, setStartTime] = useState('')
  const [endtime, setEndTime] = useState('')
  const [timezone, setTimezone] = useState('')
  const [location, setLocation] = useState('')
  const [enddate, setEnddate] = useState('')
  const [defdate, setDefaultDate] = useState('')
  const [isShowCalendar, showCalendar] = useState(false)
  const dispatch = useDispatch()

  const wrapperRef = useRef(null)
  const [isActive, setActiveSaveButton] = useState<boolean>(false)

  function updateEventData() {
    dispatch(
      updateEvent({
        title: title,
        location: location,
        location_type: activeLocationItem.toUpperCase(),
        event_date: enddate,
        starttime: starttime,
        endtime: endtime,
        description: '',
        details: '',
        collective_id: '',
        owneraddress: '',
        timezone: timezone,
        image: '',
      }),
    )
  }

  useEffect(() => {
    setActiveSaveButton(isActiveSaveButton)
  }, [isActiveSaveButton])

  function disableSaveButton() {
    setActiveSaveButton(false)
  }
  function validationCheck() {
    let validation = true
    if (title === '') validation = false
    if (location === '') validation = false
    if (enddate === '') validation = false
    if (starttime === '') validation = false
    if (endtime === '') validation = false
    if (timezone === '') validation = false
    setActiveSaveButton(validation)
  }
  useOutsideAlerter(wrapperRef)
  useEffect(() => {
    updateEventData()
    if (title === '') disableSaveButton()
    else validationCheck()
  }, [title])

  useEffect(() => {
    updateEventData()
    if (location === '') disableSaveButton()
    else validationCheck()
  }, [location])

  useEffect(() => {
    updateEventData()
    if (enddate === '') disableSaveButton()
    else validationCheck()
  }, [enddate])
  useEffect(() => {
    updateEventData()
    if (timezone === '') disableSaveButton()
    else validationCheck()
  }, [timezone])
  useEffect(() => {
    updateEventData()
    if (starttime === '') disableSaveButton()
    else validationCheck()
  }, [starttime])
  useEffect(() => {
    updateEventData()
    if (endtime === '') disableSaveButton()
    else validationCheck()
  }, [endtime])

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          showCalendar(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  function showDate(value) {
    const d = new Date(value)
    let month = '' + (d.getMonth() + 1)
    let day = '' + d.getDate()
    const year = d.getFullYear()

    setDefaultDate(value)

    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    value = [year, month, day].join('/')
    setEnddate(value)
    showCalendar(false)
  }
  return (
    <ModalBodyWrapper>
      <Flex
        flexDirection="column"
        style={{ marginTop: '42px', gap: '24px', marginRight: '28px' }}
      >
        <div className="pageTitle">Basic Info</div>

        <Flex flexDirection="column" style={{ gap: '8px' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <p className="fieldTitle">Event Title</p>
            <p className="characterLimit">0/60</p>
          </Flex>
          <ExternalInput
            type="inactive"
            value={title}
            placeholder={'Add event title'}
            fontSize="14px"
            onUserInput={(val) => {
              setTitle(val.toUpperCase())
            }}
          />
        </Flex>

        <Flex flexDirection="column" style={{ gap: '8px' }}>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            style={{ gap: '16px' }}
          >
            <p className="fieldTitle">Location</p>
            <Switch
              items={[
                {
                  value: 'virtual',
                  label: 'VIRTUAL',
                },
                {
                  value: 'irl',
                  label: 'IRL',
                },
              ]}
              activeValue={activeLocationItem}
              onUpdateItem={(val) => {
                setActiveLocationItem(val)
                setLocation('')
              }}
            />
          </Flex>
          {activeLocationItem === 'virtual' ? (
            <ExternalInput
              type="inactive"
              value={location}
              placeholder={'Add conference URL'}
              fontSize="14px"
              onUserInput={(val) => {
                setLocation(val)
              }}
            />
          ) : (
            <GooglePlacesAutocomplete
              apiKey="AIzaSyASu_m7VIHuekxu4UrZL4buQRi2ipE1DH8"
              selectProps={{
                value: location,
                onChange: (val) => {
                  setLocation(val)
                },
              }}
            />
          )}
        </Flex>

        <Flex style={{ gap: '20px' }}>
          <div style={{ width: '23%' }}>
            <Flex flexDirection="column" style={{ position: 'relative' }}>
              {isShowCalendar && (
                <div ref={wrapperRef}>
                  <Calendar
                    className="event-calendar"
                    defaultValue={defdate}
                    prev2Label="‹"
                    next2Label="›"
                    onChange={(value) => {
                      showDate(value)
                    }}
                  />
                </div>
              )}
              <p style={{ marginBottom: '8px' }} className="fieldTitle">
                Date
              </p>
              <ExternalInput
                type="inactive"
                value={enddate}
                placeholder={'Enter date'}
                fontSize="14px"
                endIcon={<img src={CalendarSvg} alt="calendar" />}
                onFocus={() => showCalendar(true)}
                onClick={() => showCalendar(true)}
                // onBlur={() => showCalendar(false)}
              />
            </Flex>
          </div>

          <div style={{ width: '23%' }}>
            <Flex flexDirection="column" style={{ gap: '8px' }}>
              <p className="fieldTitle">Time Zone</p>

              <Dropdown
                className={'timeZoneInput'}
                activeItem={{
                  label: timezone,
                  value: timezone,
                }}
                placeholder={'Time zone'}
                key="timezone"
                onChange={(item) => {
                  setTimezone(item.value)
                }}
                type={'inactive'}
                dropdownlist={Object.keys(TimeZones).map((tz) => ({
                  value: tz,
                  label: tz,
                }))}
                icon={<img src={WorldSvg} alt="world" />}
              />
            </Flex>
          </div>
          <div style={{ width: '23%' }}>
            <Flex flexDirection="column" style={{ gap: '8px' }}>
              <p className="fieldTitle">Start</p>

              <Dropdown
                key="starttime"
                className={'timeZoneInput'}
                activeItem={{
                  label: starttime,
                  value: starttime,
                }}
                placeholder={'Start time'}
                onChange={(item) => {
                  setStartTime(item.value)
                }}
                type={'inactive'}
                dropdownlist={TimeOptions}
                icon={<img src={ClockSvg} alt="clock" />}
              />
            </Flex>
          </div>
          <div style={{ width: '23%' }}>
            <Flex flexDirection="column" style={{ gap: '8px' }}>
              <p className="fieldTitle">End</p>
              <Dropdown
                key="endtime"
                className={'timeZoneInput'}
                activeItem={{
                  label: endtime,
                  value: endtime,
                }}
                placeholder={'End time'}
                onChange={(item) => {
                  setEndTime(item.value)
                }}
                type={'inactive'}
                dropdownlist={TimeOptions}
                icon={<img src={ClockSvg} alt="clock" />}
              />
            </Flex>
          </div>
        </Flex>
      </Flex>
      <Flex
        justifyContent="center"
        style={{ marginTop: '52px', marginRight: '25px' }}
      >
        <Button
          className="saveButton"
          disabled={!isActive}
          onClick={() => updateDetailsData(true)}
        >
          NEXT
        </Button>
      </Flex>
    </ModalBodyWrapper>
  )
}
export default EventBasicPage
