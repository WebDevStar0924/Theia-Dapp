import React, { memo, useCallback, useEffect } from 'react'
import DiscordOauth2 from 'discord-oauth2'

interface Props {
  client_id: string
  client_secret: string
  className?: string
  redirect_uri: string
  children?: React.ReactNode
  onLoginStart?: () => void
  onLogoutSuccess?: () => void
  onReject: () => void
  onResolve: (profile: any) => void
}

export const LoginDiscord = ({
  client_id,
  client_secret,
  className = '',
  redirect_uri,
  children,
  onLoginStart,
  onReject,
  onResolve,
}: Props) => {
  useEffect(() => {
    const popupWindowURL = new URL(window.location.href)
    const code = popupWindowURL.searchParams.get('code')
    if (code) {
      localStorage.setItem('discord', `${code}`)
      window.close()
    }
  }, [])
  const oauth = new DiscordOauth2()

  const DISCORD_URL = 'https://discord.com/api/oauth2/authorize'

  function get_discord_uri() {
    return `${DISCORD_URL}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code&scope=identify`
  }

  const getProfile = useCallback(
    async (data) => {
      const discordUser = await oauth.getUser(data.access_token)
      onResolve(discordUser)
    },
    [client_id, client_secret, onReject, onResolve],
  )

  const getAccessToken = useCallback(
    async (code: string) => {
      const data = await oauth.tokenRequest({
        clientId: client_id,
        clientSecret: client_secret,

        code: code,
        scope: 'identify',
        grantType: 'authorization_code',

        redirectUri: redirect_uri,
      })
      data && getProfile(data)
    },
    [client_id, client_secret, getProfile, onReject],
  )

  const handlePostMessage = useCallback(
    async ({ type, code, provider }) =>
      type === 'code' && provider === 'discord' && code && getAccessToken(code),
    [getAccessToken],
  )

  const onChangeLocalStorage = useCallback(() => {
    window.removeEventListener('storage', onChangeLocalStorage, false)
    const code = localStorage.getItem('discord')
    if (code) {
      handlePostMessage({ provider: 'discord', type: 'code', code })
      console.log('discord code = ', code)
      localStorage.removeItem('discord')
    }
  }, [handlePostMessage])

  const onLogin = useCallback(async () => {
    onLoginStart && onLoginStart()

    window.addEventListener('storage', onChangeLocalStorage, false)
    const width = 450
    const height = 730
    const left = window.screen.width / 2 - width / 2
    const top = window.screen.height / 2 - height / 2
    window.open(
      get_discord_uri(),
      'discord',
      'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' +
        width +
        ', height=' +
        height +
        ', top=' +
        top +
        ', left=' +
        left,
    )
  }, [
    onLoginStart,
    redirect_uri,
    client_id,
    client_secret,
    onReject,
    onChangeLocalStorage,
  ])

  return (
    <div className={className} onClick={onLogin}>
      {children}
    </div>
  )
}

export default memo(LoginDiscord)
