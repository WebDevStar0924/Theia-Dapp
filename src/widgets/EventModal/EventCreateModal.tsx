import { CloseButton } from 'components/CloseButton'
import { Flex } from 'components/Flex'
import { useState } from 'react'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { Modal } from '../Modal'
import { Handler } from '../Modal/types'
import EventBasicPage from './EventBasicPage'
import EventDetailPage from './EventDetailPage'
import { ModalHeaderWrapper, TabtWrapper } from './styles'

interface iProps {
  onDismiss?: Handler
  params?: any
}

export default function EventCreateModal(props: iProps) {
  const { onDismiss, params } = props

  const [isBasic, setBasic] = useState<boolean>(true)
  const updateDetailsData = (): void => {
    setBasic(false)
  }
  return (
    <Modal
      title={''}
      hideCloseButton={true}
      bodyPadding={'21px 32px 40px 60px'}
      width={'856px'}
      borderRadius={'16px'}
      onDismiss={() => {
        alert()
      }}
    >
      <Flex justifyContent="flex-end">
        <CloseButton
          onClick={() => {
            onDismiss && onDismiss()
          }}
        />
      </Flex>
      <ModalHeaderWrapper>
        <Flex flexDirection="column" style={{ gap: '4px' }}>
          <div className="title">CREATE EVENT</div>
          <p className="description">
            Share an upcoming event with your community.
          </p>
        </Flex>
      </ModalHeaderWrapper>
      <Flex justifyContent="center" style={{ marginTop: '32px', gap: '80px' }}>
        <TabtWrapper active={isBasic} onClick={() => setBasic(true)}>
          <p className="title">BASIC INFO</p>
          <div className="bottomBar"></div>
        </TabtWrapper>

        <TabtWrapper active={!isBasic} >
          <p className="title">DETAILS</p>
          <div className="bottomBar"></div>
        </TabtWrapper>
      </Flex>
      <div hidden={!isBasic}>
        <EventBasicPage
          isActiveSaveButton={isBasic}
          updateDetailsData={updateDetailsData}
        ></EventBasicPage>
      </div>
      <div hidden={isBasic}>
        <EventDetailPage collectiveID={params.collectiveID}></EventDetailPage>
      </div>
      {/* <Button className="saveButton" disabled={isBasic} >SAVE</Button> */}

      {/* <ModalFooterWrapper>
        <Flex justifyContent="center" style={{ marginTop: "60px" }}>
          <div
            className="saveButton"
          >
            SAVE
          </div>
        </Flex>
      </ModalFooterWrapper> */}
    </Modal >
  )
}
