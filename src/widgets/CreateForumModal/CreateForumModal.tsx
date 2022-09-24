import API from 'api/api'
import { Dropdown } from 'components/Dropdown'
import { dropdownItem } from 'components/Dropdown/types'
import ExternalInput from 'components/ExternalInput'
import { Flex } from 'components/Flex'
import { MotionButton } from 'components/MotionButton/styles'
import { TabList } from 'components/TabList'
import { TextView } from 'components/TextView'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useToast } from 'hooks/useToast'
import { useState } from 'react'
import { FileUploader } from 'react-drag-drop-files'
import { FaTrashAlt } from 'react-icons/all'
import { BiPoll } from 'react-icons/bi'
import { FiEdit3, FiImage, FiLink } from 'react-icons/fi'
import { HiOutlineUpload } from 'react-icons/hi'
import { IoGrid } from 'react-icons/io5'
import { RiAddLine } from 'react-icons/ri'
import { Modal } from 'widgets/Modal'
import { ForumModalWrapper } from './styles'

interface iProps {
  onDismiss?: () => null
  params?: any
}
export default function CreateForumModal(props: iProps) {
  const { onDismiss, params } = props
  const [activeTab, setActiveTab] = useState(params?.active ?? 'POST')
  const [forumTitle, setForumTitle] = useState('')
  const [forumDesc, setForumDesc] = useState('')
  const [forumUrl, setForumUrl] = useState('')
  const [pollOptions, setPollOptions] = useState<string[]>(['', '', ''])
  const [imageFiles, setImageFiles] = useState([])
  const { account } = useActiveWeb3React()
  const { toastError } = useToast()
  const [activeHour, setHourItem] = useState<dropdownItem | null>(null)
  const [activeMin, setMinItem] = useState<dropdownItem | null>(null)
  const [activeDay, setDayItem] = useState<dropdownItem | null>(null)

  const daysDropdownList: dropdownItem[] = []
  const hoursDropdownList: dropdownItem[] = []
  const minsDropdownList: dropdownItem[] = []
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

  const onImageChange = (files) => {
    setImageFiles(files)
  }

  const handlePost = async () => {
    if (forumTitle === '') {
      toastError('Title is required', '')
      return
    }
    const data: any = {
      title: forumTitle,
      description: forumDesc,
      type: activeTab,
      ownerAddress: account,
      collectiveID: params.collectiveID,
    }
    if (activeTab === 'IMAGE') {
      const formData = new FormData()
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append('files', imageFiles[i])
      }
      const imageRes = await API.uploadFiles(formData)
      if (imageRes.data.success) {
        data.images = imageRes.data.urls
      }
    } else if (activeTab === 'LINK') {
      if (forumUrl === '') {
        toastError('URL is required', '')
        return
      }
      data.url = forumUrl
    } else if (activeTab === 'POLL') {
      data.polls = pollOptions
      data.pollLength = {
        days: activeDay?.value ?? 0,
        hours: activeHour?.value ?? 0,
        mins: activeMin?.value ?? 0,
      }
    }
    API.createForum(data).then((res) => {
      if (res.data.success) {
        onDismiss && onDismiss()
        params?.callback(res.data.forum)
      } else {
        toastError(res.data.msg, '')
      }
    })
  }

  const onRemovePollOption = (idx) => {
    const newPollOptions = [...pollOptions]
    newPollOptions.splice(idx, 1)
    setPollOptions(newPollOptions)
  }
  return (
    <Modal title={''} onDismiss={onDismiss} width="760px" bodyPadding="48px">
      <ForumModalWrapper>
        <div className="title">Create Post</div>
        <TabList
          activeTab={activeTab}
          items={[
            {
              icon: <FiEdit3 size={18} />,
              text: 'POST',
              value: 'POST',
            },
            {
              icon: <FiImage size={18} />,
              text: 'IMAGE',
              value: 'IMAGE',
            },
            {
              icon: <FiLink size={18} />,
              text: 'LINK',
              value: 'LINK',
            },
            {
              icon: <BiPoll size={18} />,
              text: 'POLL',
              value: 'POLL',
            },
          ]}
          setActiveTab={function (item: string): void {
            setActiveTab(item)
          }}
        />

        {activeTab === 'POST' && (
          <>
            <ExternalInput
              label="Title"
              value={forumTitle}
              type="active"
              placeholder="Add title"
              onUserInput={(val) => setForumTitle(val)}
            />

            <TextView
              value={forumDesc}
              rows={5}
              label="Text(optional)"
              onUserInput={(val) => setForumDesc(val)}
            />
          </>
        )}
        {activeTab === 'IMAGE' && (
          <>
            <ExternalInput
              label="Title"
              value={forumTitle}
              type="active"
              placeholder="Add title"
              onUserInput={(val) => setForumTitle(val)}
            />

            <TextView
              value={forumDesc}
              rows={5}
              label="Text(optional)"
              onUserInput={(val) => setForumDesc(val)}
            />

            <FileUploader
              handleChange={onImageChange}
              name="file"
              types={['JPG', 'PNG', 'GIF', 'JPEG', 'SVG']}
              multiple={true}
              classes="drag_drop"
              fileOrFiles={imageFiles}
              maxSize={4}
              children={
                <>
                  <div className="preview">
                    {Array.from(imageFiles).map((file, idx) => (
                      <img
                        src={URL.createObjectURL(file)}
                        key={`preview_${idx}`}
                        width="80px"
                        style={{ margin: '5px' }}
                      />
                    ))}
                  </div>
                  <div>Drag and drop up to 4 image(s) here or</div>
                  <MotionButton>
                    <HiOutlineUpload size={18} color="#101828" />
                    &nbsp; Upload more files
                  </MotionButton>
                </>
              }
            />
          </>
        )}
        {activeTab === 'LINK' && (
          <>
            <ExternalInput
              label="Title"
              value={forumTitle}
              type="active"
              placeholder="Add title"
              onUserInput={(val) => setForumTitle(val)}
            />

            <TextView
              value={forumDesc}
              rows={5}
              label="Text(optional)"
              onUserInput={(val) => setForumDesc(val)}
            />

            <ExternalInput
              label="URL"
              value={forumUrl}
              type="active"
              onUserInput={(val) => setForumUrl(val)}
            />
          </>
        )}
        {activeTab === 'POLL' && (
          <>
            <ExternalInput
              label="Title"
              value={forumTitle}
              type="active"
              placeholder="Add title"
              onUserInput={(val) => setForumTitle(val)}
            />

            <TextView
              value={forumDesc}
              rows={5}
              label="Text(optional)"
              onUserInput={(val) => setForumDesc(val)}
            />
            <div className="pollOptions">
              <div className="pollTitle">Poll Options</div>
              {pollOptions.map((pollOption, idx) => (
                <div className="pollOption" key={`pollOption_${idx}`}>
                  <IoGrid color="#667085" size={20} />
                  <ExternalInput
                    value={pollOption}
                    placeholder={`Options ${idx + 1}`}
                    type={pollOption.length < 25 ? 'active' : 'inactive'}
                    endIcon={
                      <span className="pollLimit">
                        {pollOption.length} / 25
                      </span>
                    }
                    onUserInput={(val) => {
                      if (val.length <= 25) {
                        const newPollOptions = [...pollOptions]
                        newPollOptions[idx] = val
                        setPollOptions(newPollOptions)
                      }
                    }}
                  />
                  <FaTrashAlt
                    size={20}
                    color="#667085"
                    onClick={() => onRemovePollOption(idx)}
                  />
                </div>
              ))}
              {pollOptions.length < 4 && (
                <div
                  className="pollOption"
                  onClick={() => {
                    setPollOptions([...pollOptions, ''])
                  }}
                >
                  <RiAddLine size="20" color="#101828" />
                  <span className="addPoll">Add Option</span>
                </div>
              )}

              <div className="pollTitle">Poll Length</div>
              <Flex alignItems={'center'} style={{ gridGap: '10px' }}>
                <Dropdown
                  type="active"
                  activeItem={activeDay}
                  dropdownlist={daysDropdownList}
                  className="pollDropdown"
                  onChange={(item) => setDayItem(item)}
                />
                <div className="dropdownLabel">Days</div>
                <Dropdown
                  type="active"
                  activeItem={activeHour}
                  dropdownlist={hoursDropdownList}
                  className="pollDropdown"
                  onChange={(item) => setHourItem(item)}
                />
                <div className="dropdownLabel">Hours</div>
                <Dropdown
                  type="active"
                  activeItem={activeMin}
                  dropdownlist={minsDropdownList}
                  className="pollDropdown"
                  onChange={(item) => setMinItem(item)}
                />
                <div className="dropdownLabel">Minutes</div>
              </Flex>
            </div>
          </>
        )}

        <div className="forumActions">
          <MotionButton bgColor="#3538CD" color="#fff" onClick={handlePost}>
            POST
          </MotionButton>
        </div>
      </ForumModalWrapper>
    </Modal>
  )
}
