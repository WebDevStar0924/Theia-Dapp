import API from 'api/api'
import { Button } from 'components/Button'
import { Flex } from 'components/Flex'
import { TextView } from 'components/TextView'
import { useEffect, useRef, useState } from 'react'
import { Editor } from 'react-draft-wysiwyg'
// import { EditorState, convertToRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { State } from 'state/types'
import UploadSvg from '../../assets/svg/upload.svg'
import { useToast } from '../../hooks/useToast'
import { ModalBodyWrapper } from './styles'
import boldSvg from './wysiwyg/bold.svg'
import imageSvg from './wysiwyg/image.svg'
import italicSvg from './wysiwyg/italic.svg'
import linkSvg from './wysiwyg/link.svg'
import orderedSvg from './wysiwyg/ordered.svg'
import subscriptSvg from './wysiwyg/subscript.svg'
import superscriptSvg from './wysiwyg/superscript.svg'
import unorderedSvg from './wysiwyg/unordered.svg'
import { convertToRaw, EditorState } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useSelector } from 'react-redux'
interface iProps {
  collectiveID?: any,
}


export default function EventDetailPage(this: any, props: iProps) {
  const { account } = useActiveWeb3React()
  const { collectiveID } = props

  const editorState = EditorState.createEmpty();
  const photoRef = useRef<HTMLInputElement>(null)
  const [photoFile, setPhotoFile] = useState(null)
  const [photoImg, setPhotoImg] = useState<any>()
  const { toastWarning } = useToast()
  const [summary, setSummary] = useState('')
  const [details, setDetails] = useState(editorState)
  const { toastSuccess } = useToast()

  const [isActiveButton, activePostButton] = useState(false)
  const eventData = useSelector((state: State) => state.event.data)
  const photoChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (file.size > 1024 * 1024) {
        toastWarning('Max image size is 1MB!', '')
        setPhotoFile(null)
      } else {
        setPhotoImg(URL.createObjectURL(file))
        setPhotoFile(file)
      }
    }
  }

  function createEvent() {
    const data = draftToMarkdown(convertToRaw(details.getCurrentContent())).toString();
    API.createEvent(
      eventData.title,
      eventData.location,
      eventData.location_type,
      eventData.event_date,
      eventData.starttime,
      eventData.endtime,
      summary,
      data.toString(),
      collectiveID,
      account,
      eventData.timezone,
    ).then((res) => {
      if (res.data.success === true) {
        toastSuccess("event created successfully", '');
      } else {
        toastWarning(res.data.msg, '');
      }
    })
  }
  function validationCheck() {
    let validation = true
    if (summary === "") validation = false
    const data = draftToMarkdown(convertToRaw(details.getCurrentContent())).toString();

    if (data.toString().length === 1) {
      validation = false

    }
    activePostButton(validation)
  }

  useEffect(() => {

    validationCheck()
  }, [summary])
  useEffect(() => {
    validationCheck()
  }, [details])

  return (
    <ModalBodyWrapper>
      <Flex
        flexDirection="column"
        style={{ marginTop: '42px', gap: '24px', marginRight: '28px' }}
      >
        <div className="pageTitle">Details</div>
        <Flex flexDirection="column" style={{ gap: '8px' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <p className="fieldTitle">Event Image</p>
          </Flex>
          <div
            className="uploadForm"
            onClick={() => {
              photoRef.current && photoRef.current.click()
            }}
          >
            <input
              ref={photoRef}
              className="form-control"
              type="file"
              style={{ display: 'none' }}
              accept="image/png, image/jpeg"
              required
              name="banner"
              onChange={photoChange}
            />
            {photoFile === null ? (
              <>
                <div className="uploadArea">
                  <img src={UploadSvg} alt="upload" />
                </div>
                <p className="addPhoto">Add photo</p>
                <p className="dragAndDrop">or drag and drop</p>
              </>
            ) : (
              <>
                <img
                  src={photoImg}
                  alt="Banner"
                  className="uploadImageContainer"
                />
              </>
            )}
          </div>
        </Flex>
        <Flex flexDirection="column" style={{ gap: '8px' }}>
          <Flex justifyContent="space-between" alignItems="center">
            <p className="fieldTitle">Description</p>
          </Flex>
          <TextView
            label={''}
            placeholder=" Summary
            Write a short event summary to get attendees excited"
            value={summary}
            onUserInput={(val) => {
              setSummary(val)
            }}
            rows={0}
          ></TextView>

          <Flex justifyContent="flex-end" alignItems="center">
            <p className="characterLimit">0/140</p>
          </Flex>
        </Flex>
        <div className="eventDescription">
          <Editor
            editorState={details}
            wrapperClassName="demo-wrapper"
            editorClassName="demo-editor"
            editorStyle={{ height: "100px", overflow: "scroll" }}
            onEditorStateChange={setDetails}
            placeholder={'Write a short description of the event.'}
            toolbar={{
              options: ['inline', 'link', 'image', 'list'],
              inline: {
                inDropdown: false,
                options: ['bold', 'italic', 'superscript', 'subscript'],
                bold: { icon: boldSvg },
                italic: { icon: italicSvg },
                superscript: { icon: superscriptSvg },
                subscript: { icon: subscriptSvg },
              },
              link: { options: ['link'], link: { icon: linkSvg } },
              image: {
                icon: imageSvg,
              },
              list: {
                options: ['unordered', 'ordered'],
                unordered: { icon: unorderedSvg },
                ordered: { icon: orderedSvg },
              },
            }}
          />
        </div>
        <Flex justifyContent="center" style={{ marginTop: '52px' }}>
          <Button
            className="postButton"
            disabled={!isActiveButton}
            onClick={() => {
              createEvent()
            }}
          >
            POST
          </Button>
        </Flex>
      </Flex>
    </ModalBodyWrapper>
  )
}
