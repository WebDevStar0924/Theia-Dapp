import { Modal } from '../Modal'
import Input from '../../components/Input'
import { Text } from '../../components/Text'
import React, { useState } from 'react'
import { MotionButton, TweetButton } from '../../components/MotionButton/styles'
import { hoverTxtBoxShadow } from '../../utils/Animations'
import axios from 'axios'
import { useWeb3React } from '@web3-react/core'
import { useToast } from '../../hooks/useToast'
import styled from 'styled-components'

const StyledTwitterContent = styled.div`
  border-radius: 8px;
  font-size: 12px;
  padding: 16px;
  background-color: ${({ theme }) => (theme.isDark ? '#1c2833' : '#F9FAFB')};
  color: #fff;
  margin-top: 16px;
  margin-bottom: 16px;
`
export default function SocialFaucetModal({
  onDismiss = () => null,
  onCallback = (twitterId, twitterUsername) => null,
}) {
  const [socialUrl, updateSocialUrl] = useState('')
  const { account } = useWeb3React()
  const [step, setStep] = useState('step1')
  const { toastError } = useToast()

  const handleFaucet = () => {
    axios
      .post(`${process.env.REACT_APP_API_URL}/testnet/faucet`, {
        twitterUrl: socialUrl,
      })
      .then((res) => {
        onDismiss()
        if (!res.data.status) {
          toastError(res.data.message, '')
        } else {
          const { walletAddress, twitterId, twitterUsername } = res.data.data
          if (walletAddress !== account) {
            toastError('Not matching connected wallet address', '')
          } else {
            onCallback(twitterId, twitterUsername)
          }
        }
      })
  }
  return (
    <Modal title={'Social Faucet'} onDismiss={onDismiss}>
      {step === 'step1' && (
        <>
          <StyledTwitterContent>
            <Text fontSize={'16px'}>
              {account}
              <br />
              Request USDC for @THEIA_Labs MVP on Testnet.
            </Text>
          </StyledTwitterContent>
          <TweetButton
            className={'twitter-share-button'}
            href={`https://twitter.com/intent/tweet?text=${account}%0aRequest USDC for @THEIA_Labs MVP on Testnet.`}
            target={'_blank'}
            data-size={'large'}
            rel={'noreferrer'}
            onClick={() => setStep('step2')}
          >
            Tweet
          </TweetButton>
        </>
      )}

      {step === 'step2' && (
        <>
          <Input
            value={socialUrl}
            onUserInput={(val) => updateSocialUrl(val)}
            placeholder={
              'Social network URL containing your Ethereum address...'
            }
          />
          <MotionButton whileHover={hoverTxtBoxShadow} onClick={handleFaucet}>
            Faucet
          </MotionButton>
        </>
      )}
    </Modal>
  )
}
