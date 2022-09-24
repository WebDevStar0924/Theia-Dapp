import { useState } from 'react'
import { getNFTs } from 'utils/alchemy'
import useActiveWeb3React from './useActiveWeb3React'
interface Response {
  pageKey: string | null
  totalCount: number
  data: any[]
}
function loadItems(account, pageKey, pageLimit): Promise<Response> {
  return new Promise((resolve) => {
    getNFTs(
      account,
      '0x926baA7445D56D5E8632046409cDC7d5844CE344',
      pageKey,
      pageLimit,
      true,
    ).then((res) => {
      resolve({
        data: res.data.ownedNfts,
        pageKey: res.data.pageKey,
        totalCount: res.data.totalCount,
      })
    })
  })
}
export function useLoadNFTs() {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<any[]>([])
  const [hasNextPage, setHasNextPage] = useState<boolean>(true)
  const [error, setError] = useState<any>()
  const [pageKey, setPageKey] = useState<string | null>(null)
  const { account } = useActiveWeb3React()
  const pageLimit = 20

  async function loadMore() {
    setLoading(true)
    try {
      const { data, pageKey: nextPageKey } = await loadItems(
        account,
        pageKey,
        pageLimit,
      )
      setItems((current) => [...current, ...data])
      setPageKey(nextPageKey)
      setHasNextPage(!!nextPageKey)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  return { loading, items, hasNextPage, error, loadMore }
}
