import React, { useState } from 'react'
import { BottomVideoWrapper, VideoContent } from './styles'
import bottomVideoBg from '../../assets/image/bottomVideoBg.png'
import videoBg from '../../assets/image/videoBg.png'
import Logo from '../Svg/Icons/Logo'
import Play from '../Svg/Icons/Play'
import ReactPlayer from 'react-player'

const VIDEO_URL = 'https://player.vimeo.com/video/448555191'

export default function BottomVideo() {
  const [pause, setPause] = useState(true)

  return (
    <BottomVideoWrapper bg={bottomVideoBg}>
      <div className={'videoLabel'}>A HOME FOR WEB3 COMMUNITIES</div>
      <VideoContent bg={videoBg}>
        <div className={'pauseScreen ' + (pause ? '' : 'hideScreen')}>
          <div className={'videoLogo'}>
            <Logo width={186} />
          </div>
          <div className={'videoPlay'} onClick={() => setPause(false)}>
            <Play width={74} fill={'none'} />
          </div>
        </div>
        <div className={'playScreen ' + (pause ? 'hideScreen' : '')}>
          <ReactPlayer
            width={'100%'}
            height={'100%'}
            controls={true}
            url={VIDEO_URL}
            playing={!pause}
            onPause={() => setPause(true)}
          />
        </div>
      </VideoContent>
    </BottomVideoWrapper>
  )
}
