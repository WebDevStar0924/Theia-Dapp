import API from 'api/api'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { useEffect, useMemo, useState } from 'react'
import { getImageLinkFromMetadata } from 'utils'
const useCurrentNFTProfile = (collective_id) => {
  const { account } = useActiveWeb3React()
  const [nftProfile, setNFTProfile] = useState<any>(null)
  useMemo(async () => {
    if (account && collective_id) {
      const res = await API.getNFTProfile(collective_id, account)
      setNFTProfile({
        ...res.data.profile,
        avatarUrl: getImageLinkFromMetadata(res.data.profile).mediaImage,
      })
    }
  }, [account, collective_id])
  return nftProfile
}

const useAvailbleCollectives = () => {
  const { account } = useActiveWeb3React()
  const [availableCollectives, setAvailableCollectives] = useState<any[]>([])
  useEffect(() => {
    if (account) {
      API.getAvailableCollectives(account).then((res) => {
        setAvailableCollectives(res.data.collectives)
      })
    }
  }, [account])
  return availableCollectives
}

export { useCurrentNFTProfile, useAvailbleCollectives }
