import { AcceptMobileViewWrapper } from './styles'
import { LargeScreenIcon } from '../../components/Svg'
import { MotionButton } from '../../components/MotionButton/styles'
import React from 'react'
import LogoBlack from '../../components/Svg/Icons/LogoBlack'

export default function AcceptMobileView() {
  return (
    <AcceptMobileViewWrapper>
      <div className={'header'}>
        <LogoBlack width={135} />
      </div>
      <div className={'content'}>
        <LargeScreenIcon width={'126px'} />
        <div className={'title'}>Open on larger screen</div>
        <div className={'subTitle'}>
          To use the full capabilities of THEIA please use a larger screen.
        </div>
        <MotionButton
          bgColor={'#FFF'}
          color={'#101828'}
          className={'openAnyway'}
          onClick={() => {
            localStorage.setItem('openMobile', 'true')
          }}
        >
          OPEN ANYWAY
        </MotionButton>
      </div>
    </AcceptMobileViewWrapper>
  )
}
