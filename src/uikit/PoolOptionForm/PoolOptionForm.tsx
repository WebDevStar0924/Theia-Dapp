import ExternalInput from 'components/ExternalInput'
import { Flex } from 'components/Flex'
import { useState } from 'react'
import { PoolOptionFormWrapper } from './styles'
import { AiOutlinePlus, AiFillAppstore, AiOutlineClose } from 'react-icons/ai'
import { Dropdown } from 'components/Dropdown'
import { dropdownItem } from 'components/Dropdown/types'
interface iProps {
  removePollPost: (arg: boolean) => void
}
export default function PoolOptionForm(props: iProps) {
  const { removePollPost } = props
  const [poolOptionText1, setPoolOptionText1] = useState('')
  const [poolOptionText2, setPoolOptionText2] = useState('')
  const [poolOptionText3, setPoolOptionText3] = useState('')
  const [poolOptionText4, setPoolOptionText4] = useState('')
  const daysDropdownList: dropdownItem[] = []
  const hoursDropdownList: dropdownItem[] = []
  const minsDropdownList: dropdownItem[] = []
  const [activeHour, setHourItem] = useState<dropdownItem | null>(null)
  const [activeMin, setMinItem] = useState<dropdownItem | null>(null)
  const [activeDay, setDayItem] = useState<dropdownItem | null>(null)
  const [currentPollOptions, setCurrentPollOptions] = useState(2)
  for (let i = 0; i < 7; i++) {
    daysDropdownList.push({
      value: i,
      label: `${i}`,
    })
  }
  for (let i = 0; i < 24; i++) {
    hoursDropdownList.push({
      value: i,
      label: `${i}`,
    })
  }
  for (let i = 0; i < 60; i++) {
    minsDropdownList.push({
      value: i,
      label: `${i}`,
    })
  }
  function removePoll() {
    setPoolOptionText1('')
    setPoolOptionText2('')
    setPoolOptionText3('')
    setPoolOptionText4('')
    setHourItem(null)
    setDayItem(null)
    setMinItem(null)
    setCurrentPollOptions(2)
    removePollPost(true)
  }

  return (
    <PoolOptionFormWrapper>
      <Flex className="optionDescription">
        Poll Options <span>MAX 4</span>
      </Flex>
      {currentPollOptions >= 1 && (
        <Flex
          flexDirection={'row'}
          alignItems="center"
          className="poolOptionInput"
        >
          <Flex>
            <AiFillAppstore fontSize={'26px'} color={'#667085'} />
          </Flex>
          <ExternalInput
            className="inputText"
            type="active"
            inputSize="sm"
            value={poolOptionText1}
            placeholder={'Text'}
            onUserInput={(val) => {
              setPoolOptionText1(val)
            }}
          />
          <Flex
            className="closePoolOption"
            onClick={() => {
              setCurrentPollOptions(currentPollOptions - 1),
                setPoolOptionText1('')
            }}
          >
            <AiOutlineClose fontSize={'26px'} color={'#667085'} />
          </Flex>
        </Flex>
      )}
      {currentPollOptions >= 2 && (
        <Flex
          flexDirection={'row'}
          alignItems="center"
          className="poolOptionInput"
        >
          <Flex>
            <AiFillAppstore fontSize={'26px'} color={'#667085'} />
          </Flex>
          <ExternalInput
            className="inputText"
            type="active"
            inputSize="sm"
            value={poolOptionText2}
            placeholder={'Text'}
            onUserInput={(val) => {
              setPoolOptionText2(val)
            }}
          />
          <Flex
            className="closePoolOption"
            onClick={() => {
              setCurrentPollOptions(currentPollOptions - 1),
                setPoolOptionText2('')
            }}
          >
            <AiOutlineClose fontSize={'26px'} color={'#667085'} />
          </Flex>
        </Flex>
      )}
      {currentPollOptions >= 3 && (
        <Flex
          flexDirection={'row'}
          alignItems="center"
          className="poolOptionInput"
        >
          <Flex>
            <AiFillAppstore fontSize={'26px'} color={'#667085'} />
          </Flex>
          <ExternalInput
            className="inputText"
            type="active"
            inputSize="sm"
            value={poolOptionText3}
            placeholder={'Text'}
            onUserInput={(val) => {
              setPoolOptionText3(val)
            }}
          />
          <Flex
            className="closePoolOption"
            onClick={() => {
              setCurrentPollOptions(currentPollOptions - 1),
                setPoolOptionText3('')
            }}
          >
            <AiOutlineClose fontSize={'26px'} color={'#667085'} />
          </Flex>
        </Flex>
      )}
      {currentPollOptions == 4 && (
        <Flex
          flexDirection={'row'}
          alignItems="center"
          className="poolOptionInput"
        >
          <Flex>
            <AiFillAppstore fontSize={'26px'} color={'#667085'} />
          </Flex>
          <ExternalInput
            className="inputText"
            type="active"
            inputSize="sm"
            value={poolOptionText4}
            placeholder={'Text'}
            onUserInput={(val) => {
              setPoolOptionText4(val)
            }}
          />
          <Flex
            className="closePoolOption"
            onClick={() => {
              setCurrentPollOptions(currentPollOptions - 1)
            }}
          >
            <AiOutlineClose fontSize={'26px'} color={'#667085'} />
          </Flex>
        </Flex>
      )}
      <Flex
        className="addOptionButton"
        onClick={() => {
          setCurrentPollOptions(currentPollOptions + 1), setPoolOptionText4('')
        }}
      >
        <AiOutlinePlus fontSize={'26px'} /> <span>Add Option</span>
      </Flex>
      <Flex className="optionDescription" marginTop={'10px'}>
        Poll Length
      </Flex>
      <Flex flexDirection={'row'} className={'poolLengthLayout'}>
        <Flex alignItems={'center'}>
          <Dropdown
            type="active"
            activeItem={activeDay}
            dropdownlist={daysDropdownList}
            className="pollDropdown"
            onChange={(item) => setDayItem(item)}
          />
          <span>Days</span>
        </Flex>
        <Flex alignItems={'center'}>
          <Dropdown
            type="active"
            activeItem={activeHour}
            dropdownlist={hoursDropdownList}
            className="pollDropdown"
            onChange={(item) => setHourItem(item)}
          />
          <span>Hours</span>
        </Flex>
        <Flex alignItems={'center'}>
          <Dropdown
            type="active"
            activeItem={activeMin}
            dropdownlist={minsDropdownList}
            className="pollDropdown"
            onChange={(item) => setMinItem(item)}
          />
          <span>Minutes</span>
        </Flex>
      </Flex>
      <Flex
        className="removePoolButton"
        onClick={() => {
          removePoll()
        }}
      >
        REMOVE POLL
      </Flex>
    </PoolOptionFormWrapper>
  )
}
