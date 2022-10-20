import { Flex } from 'components/Flex'
import { ReplyCommentBoxWrapper } from './styles'
import { IconButtonV2 } from 'uikit/MotionButtonV2/styles'
import ReactQuill from 'react-quill'
import EmojiPicker, { EmojiStyle } from 'emoji-picker-react'
import { CloseImageIcon, GifIcon, ImageFillIcon } from '../../components/Svg'
import { HiEmojiHappy } from 'react-icons/hi'
import { useEffect, useRef, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useToast } from 'hooks/useToast'
import useGifUploadModal from '../GifUploadModal/useGifUploadModal'
interface iProps {
  isSubComment: boolean
}

export default function ReplyCommentBox(props: iProps) {
  const { isSubComment } = props
  const [replyText, setReplyText] = useState('')
  const { collectiveInfo } = useOutletContext<CollectiveContextProps>()
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [alreadyGifOpend, setAlreadyGifOpend] = useState(false)
  const [selectedGif, setGifUrl] = useState(null)
  const [photoList, setPhotoList] = useState<Array<string>>([])
  const wrapperRef = useRef(null)
  const [visibleEmojiForm, showEmojiForm] = useState(false)
  const { toastWarning } = useToast()
  const [currentMediaCount, setCurrentMediaCount] = useState(0)
  const [visibleImageUploadForm, showImageUploadForm] = useState(false)
  const { onPresendGifUploadModal } = useGifUploadModal()
  const photoRef = useRef<HTMLInputElement>(null)
  const oneImageWidth = isSubComment ? '490px' : '550px'
  const oneImageHeight = '550px'
  const twoImageWidth = isSubComment ? '240px' : '270px'
  const twoImageHeight = '288px'
  const thirdImageHeight = '400px'
  const fourImageHeight = '195px'
  const modules = {
    toolbar: false,
  }
  useEmojiPickerOutSideClick(wrapperRef)
  const removePhotoItem = (idx) => {
    const selectedImage = photoList
    selectedImage.splice(idx, 1)
    setPhotoList([...selectedImage])
    setCurrentMediaCount(currentMediaCount - 1)
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
    }
  }

  const removeGif = () => {
    setCurrentMediaCount(currentMediaCount - 1)
    setGifUrl(null)
    setAlreadyGifOpend(false)
  }

  const onEmojiClick = (emojiObject) => {
    setChosenEmoji(emojiObject)
    setReplyText(replyText + emojiObject.emoji)
    showEmojiForm(false)
  }

  const updateGifUrl = (url) => {
    if (url != undefined && url != null) {
      setGifUrl(url)
    }
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

  return (
    <ReplyCommentBoxWrapper>
      <Flex className="replyBox" flexDirection="column">
        <Flex
          className="inputLayout"
          flexDirection={'column'}
          justifyContent={'space-between'}
        >
          <Flex flexDirection={'row'} alignItems={'center'}>
            <img
              src={collectiveInfo.avatar}
              className="userNftAvatar"
              alt="user nft image"
            />
            <span className="userInfo">@larrykong.eth</span>
          </Flex>
          <Flex marginLeft={'56px'}>
            <ReactQuill
              style={{ width: '100%' }}
              placeholder=""
              theme="snow"
              value={replyText}
              modules={modules}
              onChange={setReplyText}
            />
          </Flex>
        </Flex>
        <Flex className="formLayout">
          {visibleEmojiForm && (
            <div ref={wrapperRef}>
              <EmojiPicker
                emojiStyle={EmojiStyle.TWITTER}
                onEmojiClick={onEmojiClick}
                width={'300px'}
              />
            </div>
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
                        style={{
                          width: twoImageWidth,
                          height: fourImageHeight,
                        }}
                      ></img>
                    )}
                    {currentMediaCount == 4 && (
                      <img
                        src={item}
                        style={{
                          width: twoImageWidth,
                          height: fourImageHeight,
                        }}
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
                      style={{ height: thirdImageHeight, width: twoImageWidth }}
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
        </Flex>
        <Flex className="toolBox" justifyContent={'space-between'}>
          <Flex className={'buttonGroup'}>
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
                onPresendGifUploadModal({ callback: updateGifUrl })
                showImageUploadForm(true), showEmojiForm(false)
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
          </Flex>
          <Flex className="replyButton">Reply</Flex>
        </Flex>
      </Flex>
    </ReplyCommentBoxWrapper>
  )
}
