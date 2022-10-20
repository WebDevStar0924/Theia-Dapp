import { Flex } from 'components/Flex'
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react'
import {
  useAvailbleCollectives,
  useCurrentNFTProfile,
} from 'hooks/useCurrentNFTProfile'
import { useToast } from 'hooks/useToast'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useEffect, useRef, useState } from 'react'
import { HiEmojiHappy } from 'react-icons/hi'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useOutletContext } from 'react-router-dom'
import Select, { components } from 'react-select'
import NFTAvatar from 'uikit/NFTAvatar'
import { PoolOptionForm } from 'uikit/PoolOptionForm'
import arrakisImg from '../../assets/image/arrakisBg.png'
import {
  CloseImageIcon,
  GifIcon,
  ImageFillIcon,
  PoolIcon,
} from '../../components/Svg'
import { IconButtonV2, MotionButtonV2 } from '../../uikit/MotionButtonV2/styles'
import useGifUploadModal from '../GifUploadModal/useGifUploadModal'
import { CollectiveFeedPostWrapper } from './styles'
export default function CollectiveFeedPost() {
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const [postText, setPostText] = useState('')
  const [visiblePollOptionForm, showPollOptionForm] = useState(false)
  const [selectedGif, setGifUrl] = useState(null)
  const { onPresendGifUploadModal } = useGifUploadModal()
  const [visibleImageUploadForm, showImageUploadForm] = useState(false)
  const [visibleEmojiForm, showEmojiForm] = useState(false)
  const [alreadyGifOpend, setAlreadyGifOpend] = useState(false)
  const [currentMediaCount, setCurrentMediaCount] = useState(0)
  const [photoList, setPhotoList] = useState<Array<string>>([])
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const { toastWarning } = useToast()
  const currentUserProfile = useCurrentNFTProfile(collectiveInfo?.collective_id)
  const availableCollectives = useAvailbleCollectives()
  const photoRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef(null)
  useEmojiPickerOutSideClick(wrapperRef)
  const oneImageWidth = '550px'
  const oneImageHeight = '550px'
  const twoImageWidth = '270px'
  const twoImageHeight = '288px'
  const thirdImageHeight = '400px'
  const fourImageHeight = '195px'

  const removePhotoItem = (idx) => {
    const selectedImage = photoList
    selectedImage.splice(idx, 1)
    setPhotoList([...selectedImage])
    setCurrentMediaCount(currentMediaCount - 1)
  }

  const removeGif = () => {
    setCurrentMediaCount(currentMediaCount - 1)
    setGifUrl(null)
    setAlreadyGifOpend(false)
  }
  const updateGifUrl = (url) => {
    if (url != undefined && url != null) {
      setGifUrl(url)
    }
  }
  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject)
    setPostText(postText + emojiObject.emoji)
    showEmojiForm(false)
    console.log(chosenEmoji)
  }
  useEffect(() => {
    if (
      currentMediaCount < 4 &&
      selectedGif != undefined &&
      selectedGif != null &&
      alreadyGifOpend == false
    ) {
      setCurrentMediaCount(currentMediaCount + 1)
      setAlreadyGifOpend(true)
    }
  }, [selectedGif])
  useEffect(() => {
    console.log(postText)
  }, [postText])

  useEffect(() => {
    console.log('current media count')
    console.log(currentMediaCount)
  }, [currentMediaCount])

  const formatOptionLabel = ({ label }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={arrakisImg}
        style={{
          borderRadius: '50%',
          filter: 'drop-shadow(0px 0px 12px rgba(0, 0, 0, 0.16))',
        }}
        width="40px"
        height="40px"
      />
      <div style={{ marginLeft: '10px' }}>{label}</div>
    </div>
  )
  const menuHeaderStyle = {
    padding: '8px 12px',
    background: 'white',
    color: 'black',
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: '20px',
    lineHeight: '24px',
  }
  const MenuList = (props) => {
    return (
      <components.MenuList {...props}>
        <div style={menuHeaderStyle}>Choose Collectives</div>
        {props.children}
      </components.MenuList>
    )
  }
  const modules = {
    toolbar: [
      ['bold', 'italic'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  }
  const MultiValue = (props) => (
    <components.MultiValue {...props}>{props.data.value}</components.MultiValue>
  )
  const styles = {
    container: (base) => ({
      ...base,
      flex: 1,
      boxShadow: 'none',
    }),
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? 0 : 0,
      // This line disable the blue border
      boxShadow: state.isFocused ? 0 : 0,
      '&:hover': {
        border: state.isFocused ? 0 : 0,
      },
    }),
    menu: (provided) => ({
      ...provided,
      width: 260,
      maxHeight: 266,
      overflow: 'hidden',
      borderRadius: '16px',
      boxShadow: '0px 0px 12px rgba(0, 0, 0, 0.11)',
      color: 'black',
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '24px',
    }),
    multiValue: (base) => ({
      ...base,
      background: 'white',
    }),
    input: (base) => ({
      ...base,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '24px',
      color: '#3538CD',
    }),
    multiValueLabel: (base) => ({
      ...base,
      fontFamily: 'Montserrat',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '18px',
      lineHeight: '24px',
      color: '#3538CD',
    }),
    multiValueRemove: (base) => ({
      ...base,
      display: 'none',
    }),
  }
  function useEmojiPickerOutSideClick(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          showEmojiForm(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const photoChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      console.log('called')
      const selectedImage: Array<string> = []
      Array.prototype.forEach.call(e.target.files, function (file) {
        if (file.size > 1024 * 1024 * 5) {
          toastWarning('Max image size is 5MB!', URL.createObjectURL(file))
        } else {
          selectedImage.push(URL.createObjectURL(file))
        }
      })
      const slicedImageList = selectedImage.slice(0, 4 - currentMediaCount)
      const data = photoList.concat(slicedImageList)
      setPhotoList([...data])
      setCurrentMediaCount(currentMediaCount + slicedImageList.length)
      showImageUploadForm(true)
      showPollOptionForm(false)
    }
  }
  return (
    <CollectiveFeedPostWrapper>
      <Flex className="inputLayout">
        <NFTAvatar avatarUrl={currentUserProfile?.avatarUrl} width={'56px'} />
        <ReactQuill
          placeholder="What's happening"
          theme="snow"
          value={postText}
          onChange={setPostText}
          modules={modules}
        />
      </Flex>

      <Flex flexDirection={'column'} className={'collectiveSelectionLayout'}>
        <Flex flexDirection={'row'} alignItems="center">
          <Flex className="defaultCollectiveItem">
            {'@' + collectiveInfo.name.toUpperCase()}
          </Flex>
          <Select
            styles={styles}
            className={'react-select-container'}
            isMulti
            closeMenuOnSelect={false}
            placeholder=""
            components={{
              MenuList,
              MultiValue,
              DropdownIndicator: () => null,
              ClearIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            options={availableCollectives
              .filter((c) => c.collective_id !== collectiveInfo.collective_id)
              .map((c) => ({ value: `@${c.name}`, label: c.name }))}
            formatOptionLabel={formatOptionLabel}
          />
        </Flex>
      </Flex>

      <Flex className="formLayout">
        {visiblePollOptionForm && (
          <PoolOptionForm
            removePollPost={() => {
              showPollOptionForm(false)
            }}
          />
        )}

        {visibleImageUploadForm && currentMediaCount != 0 && (
          <Flex className="imageListLayout">
            {photoList.map((item, idx) => {
              return currentMediaCount == 3 &&
                alreadyGifOpend == false &&
                idx == 2 ? (
                <Flex
                  className="imageCard"
                  id={'image' + { idx }}
                  style={{ gridRowStart: '1', gridRowEnd: '3' }}
                >
                  <IconButtonV2
                    className="closeImageButton"
                    onClick={() => {
                      removePhotoItem(idx)
                    }}
                  >
                    <CloseImageIcon fontSize="30px" />
                  </IconButtonV2>
                  <img
                    src={item}
                    style={{ width: twoImageWidth, height: thirdImageHeight }}
                  ></img>
                </Flex>
              ) : (
                <Flex className="imageCard" id={'image' + { idx }}>
                  <IconButtonV2
                    className="closeImageButton"
                    onClick={() => {
                      removePhotoItem(idx)
                    }}
                  >
                    <CloseImageIcon fontSize="30px" />
                  </IconButtonV2>
                  {currentMediaCount == 1 && (
                    <img
                      src={item}
                      style={{ width: oneImageWidth, height: oneImageHeight }}
                    ></img>
                  )}
                  {currentMediaCount == 2 && (
                    <img
                      src={item}
                      style={{ width: twoImageWidth, height: twoImageHeight }}
                    ></img>
                  )}
                  {currentMediaCount == 3 && (
                    <img
                      src={item}
                      style={{ width: twoImageWidth, height: fourImageHeight }}
                    ></img>
                  )}
                  {currentMediaCount == 4 && (
                    <img
                      src={item}
                      style={{ width: twoImageWidth, height: fourImageHeight }}
                    ></img>
                  )}
                </Flex>
              )
            })}
            {selectedGif != undefined &&
              selectedGif != null &&
              currentMediaCount == 3 && (
                <Flex
                  className="imageCard"
                  style={{ gridRowStart: '1', gridRowEnd: '3' }}
                >
                  <IconButtonV2
                    className="closeImageButton"
                    onClick={() => {
                      removeGif()
                    }}
                  >
                    <CloseImageIcon fontSize="30px" />
                  </IconButtonV2>
                  <img
                    src={selectedGif['images']['downsized']['url']}
                    style={{ height: '400pxpx', width: twoImageWidth }}
                  />
                </Flex>
              )}
            {selectedGif != undefined &&
              selectedGif != null &&
              currentMediaCount == 2 && (
                <Flex className="imageCard">
                  <IconButtonV2
                    className="closeImageButton"
                    onClick={() => {
                      removeGif()
                    }}
                  >
                    <CloseImageIcon fontSize="30px" />
                  </IconButtonV2>
                  <img
                    src={selectedGif['images']['downsized']['url']}
                    style={{ height: twoImageHeight, width: twoImageWidth }}
                  />
                </Flex>
              )}
            {selectedGif != undefined &&
              selectedGif != null &&
              currentMediaCount == 1 && (
                <Flex className="imageCard">
                  <IconButtonV2
                    className="closeImageButton"
                    onClick={() => {
                      removeGif()
                    }}
                  >
                    <CloseImageIcon fontSize="30px" />
                  </IconButtonV2>
                  <img
                    src={selectedGif['images']['downsized']['url']}
                    style={{ height: oneImageHeight, width: oneImageWidth }}
                  />
                </Flex>
              )}
            {selectedGif != undefined &&
              selectedGif != null &&
              currentMediaCount == 4 && (
                <Flex className="imageCard">
                  <IconButtonV2
                    className="closeImageButton"
                    onClick={() => {
                      removeGif()
                    }}
                  >
                    <CloseImageIcon fontSize="30px" />
                  </IconButtonV2>
                  <img
                    src={selectedGif['images']['downsized']['url']}
                    style={{ height: fourImageHeight, width: twoImageWidth }}
                  />
                </Flex>
              )}
          </Flex>
        )}

        {visibleEmojiForm && (
          <div ref={wrapperRef}>
            <EmojiPicker
              emojiStyle={EmojiStyle.TWITTER}
              onEmojiClick={onEmojiClick}
              width={'300px'}
            />
          </div>
        )}
      </Flex>

      <Flex className="toolBoxLayout">
        <Flex className="toolButtonGroup">
          <IconButtonV2
            className="toolBoxButton"
            size="sm"
            onClick={() => {
              photoRef.current && photoRef.current.click()
            }}
          >
            <ImageFillIcon fontSize="16px" />
            <input
              ref={photoRef}
              className="form-control"
              type="file"
              style={{ display: 'none' }}
              accept="image/png, image/jpeg"
              required
              multiple
              name="banner"
              onChange={photoChange}
            />
          </IconButtonV2>
          <IconButtonV2
            className="toolBoxButton"
            size="sm"
            onClick={() => {
              showPollOptionForm(!visiblePollOptionForm),
                showImageUploadForm(false),
                showEmojiForm(false)
            }}
          >
            <PoolIcon fontSize="16px" />
          </IconButtonV2>
          <IconButtonV2
            className="toolBoxButton"
            size="sm"
            onClick={() => {
              onPresendGifUploadModal({ callback: updateGifUrl })
              showPollOptionForm(false),
                showImageUploadForm(true),
                showEmojiForm(false)
            }}
          >
            <GifIcon fontSize="16px" />
          </IconButtonV2>
          <IconButtonV2
            className="toolBoxButton"
            size="sm"
            onClick={() => {
              showEmojiForm(!visibleEmojiForm)
            }}
          >
            <HiEmojiHappy fontSize="16px" />
          </IconButtonV2>
          {/* <div className={'textFormatTool'}>
            <ReactQuill placeholder="What's happening" theme="snow" value={postText} onChange={setPostText} modules={modules} />
          </div> */}
        </Flex>
        <MotionButtonV2 className="postButton">POST</MotionButtonV2>
      </Flex>
    </CollectiveFeedPostWrapper>
  )
}
