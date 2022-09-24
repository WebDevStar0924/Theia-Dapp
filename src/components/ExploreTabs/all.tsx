import { useLoadItems } from 'components/InfiniteScroll'
import { CollectiveInfo } from 'pages/CollectiveDetails/types'
import { useState } from 'react'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import { CollectiveCard } from '../CollectiveCard'
import { AllCollectivesWrapper, LoadingRoot } from './styles'

export function Loading() {
  return <LoadingRoot>Loading...</LoadingRoot>
}

export default function All() {
  const [collectives] = useState<CollectiveInfo[]>([])
  const { loading, hasNextPage, error, loadMore } = useLoadItems()

  const [sentryRef, { rootRef }] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    disabled: !!error,
    rootMargin: '0px 0px 400px 0px',
  })

  /** 
    const [tab, updateTab] = useState("dashboard");
    const { loading, items, hasNextPage, error, loadMore } = useLoadItems();

    const [sentryRef, { rootRef }] = useInfiniteScroll({
      loading,
      hasNextPage,
      onLoadMore: loadMore,
      disabled: !!error,
      rootMargin: '0px 0px 400px 0px',
    });
**/

  return (
    <AllCollectivesWrapper ref={rootRef}>
      <div className={'collectivesList'}>
        {collectives.slice(0, collectives.length).map((item, index) => (
          <CollectiveCard collective={item} key={`popular_${index}`} />
        ))}
        {(loading || hasNextPage) && (
          <div ref={sentryRef}>
            <Loading />
          </div>
        )}
      </div>
    </AllCollectivesWrapper>
  )
}
