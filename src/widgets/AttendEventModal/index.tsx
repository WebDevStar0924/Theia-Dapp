import { Flex } from 'components/Flex'
import { signInToGoogle, initClient, getSignedInUserEmail, signOutFromGoogle, publishTheCalenderEvent } from 'api/api';
import { Text } from 'components/Text'
import { FiCalendar } from 'react-icons/fi'
import EventImage from '../../assets/image/eventBg.png'
import { Modal } from '../Modal'
import { AttendEventModalWrapper } from './style'
import { useEffect, useState } from 'react';
import { useToast } from '../../hooks/useToast'

import { Handler } from 'widgets/Modal/types';
interface iProps {
  eventData?: any
  onDismiss?: Handler
}
export default function AttendEventModal(props: iProps) {
  const { onDismiss, eventData } = props;
  const [signedin, setSignedIn] = useState(false);
  const [googleAuthedEmail, setgoogleAuthedEmail] = useState("");
  const [description, setDescription] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const { toastWarning } = useToast()

  function getMonth(string) {
    const data = new Date(string).toDateString();
    const array = data.split(" ");
    const returnDate = array[1] + ' ' + array[2];
    return returnDate
  }
  useEffect(() => {
    initClient((success) => {
      if (success) {
        getGoogleAuthorizedEmail();
      } else {
        toastWarning("Initialize failed", '');
      }
    });
  }, []);
  const getGoogleAuthorizedEmail = async () => {
    const email = await getSignedInUserEmail();
    if (email) {
      setSignedIn(true)
      setgoogleAuthedEmail(email)
    } else {
      toastWarning("Get authorized email failed", '');
      getAuthToGoogle();
    }
  };
  const getAuthToGoogle = async () => {
    const successfull = await signInToGoogle();
    if (successfull) {
      getGoogleAuthorizedEmail();
    } else {
      toastWarning("Get auth to google failed", '');
    }
  };
  const _signOutFromGoogle = () => {
    const status = signOutFromGoogle();
    if (status) {
      setSignedIn(false);
      setgoogleAuthedEmail("");
    } else {
      toastWarning("Sign out from google failed", '');
    }
  };
  const addEventToCalendar = () => {
    const event = {
      'summary': eventData?.event_title,
      'location': eventData?.location,
      'description': eventData?.description,
      'start': {
        'dateTime': eventData?.event_date + "-" + eventData?.starttime,
        'timeZone': eventData?.timezone,
      },
      'end': {
        'dateTime': eventData?.event_date + "-" + eventData?.endtime,
        'timeZone': eventData?.timezone,
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      'attendees': [
        { 'email': 'sbrin@example.com' }
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          { 'method': 'email', 'minutes': 24 * 60 },
          { 'method': 'popup', 'minutes': 10 }
        ]
      }
    }
    publishTheCalenderEvent(event);

  }
  return (
    <Modal
      title={''}
      hideCloseButton={true}
      bodyPadding={'32px 40px'}
      width={'680px'}
      borderRadius={'16px'}
      onDismiss={() => {
        alert()
      }}
    >
      <AttendEventModalWrapper>
        <Flex>
          <Text className={'modalTitle'}>YOU'RE GOING</Text>
        </Flex>

        <Flex
          flexDirection={'column'}
          style={{ gap: '17px', marginTop: '40px' }}
        >
          <Flex style={{ alignItems: "center" }}>
            <Text className="placeHolder">{eventData?.event_title.toUpperCase()}</Text>
            {eventData?.location_type === 'VIRTUAL' ? (
              <Text className="virtualTag" style={{ marginLeft: '16px' }}>
                VIRTUAL
              </Text>) : (
              <Text className="irlTag" style={{ marginLeft: "16px" }}>IRL</Text>
            )}
          </Flex>
          <Flex alignItems={'center'}>
            <FiCalendar size={22} color="#101828" />
            <Text className="eventDate" style={{ marginLeft: '10px' }}>
              {getMonth(eventData?.event_date).toUpperCase()}
            </Text>
            <Text className="eventTime" style={{ marginLeft: '16px' }}>
              {eventData?.starttime} - {eventData?.endtime} {eventData?.timezone}
            </Text>
          </Flex>
          <Flex>
            <Text className="eventDescription">
              {eventData?.description}
            </Text>
          </Flex>
          <Flex style={{ marginTop: '24px' }}>
            <img className="eventImage" src={EventImage} alt="event" />
          </Flex>
          <Flex className={'addToCalendarButton'} style={{ marginTop: '32px' }} onClick={() => {
            addEventToCalendar();
            onDismiss && onDismiss()
          }}>
            ADD TO CALENDAR
          </Flex>
        </Flex>
      </AttendEventModalWrapper>
    </Modal>
  )
}

