import { Card } from 'components/Card'
import { ExpandableView } from 'components/ExpandableView'
import { FilterBar } from 'components/FilterBar'
import { ForumCard } from 'components/ForumCard'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import { CollectiveContextProps } from 'pages/CollectiveLayout/types'
import { useMemo } from 'react'
import { useNavigate, useOutletContext } from 'react-router-dom'
import { ForumTabWrapper } from '../styles'

export default function ForumTab() {
  const navigate = useNavigate()
  const { account } = useActiveWeb3React()
  const {
    forums,
    setForums,
    collectiveInfo,
    sort,
    updateSort,
    filter,
    updateFilter,
  } = useOutletContext<CollectiveContextProps>()

  const onUpdateForum = (idx: number, forum: any) => {
    const newForums = [...forums]
    newForums[idx] = forum
    setForums(newForums)
  }

  const filterData = useMemo(() => {
    let newData = forums
    if (filter.onlySaved) {
      newData = newData.filter((item) => Number(item.is_saved) === 1)
    }
    if (filter.onlyMyPosts) {
      newData = newData.filter((item) => item.owneraddress === account)
    }
    return newData
  }, [filter, forums])

  const guidelines = [
    {
      title: 'NO SMOOTHBRAIN SHIT',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
    },
    {
      title: 'BE DANK',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
    },
    {
      title: 'DROP “F” IF LIQUIDATED',
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
    },
    {
      title: `DROP NICE FOR “69/420" POSTS`,
      details:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ',
    },
  ]

  const faqs = [
    {
      title: 'What can I do on THEIA?',
      details:
        'THEIA Home is our flagship product that features a social platform for web3 communities to engage with fellow NFT holders. \n \nYou can use the “Forum” feature to have insightful discussions with fellow NFT holders, and the “Gallery” feature to share your NFTs with the community. ',
    },
    {
      title: 'What types of posts can be posted in the “Forum”?',
      details:
        'Post text, images, or links to your favourite sites on forum. Post anything you’d like. The forum is for you, the community, to do whatever you want. Abiding by the community guidelines of course.',
    },
    {
      title: 'What types of NFTs can be posted in “Gallery”?',
      details:
        'PFP, video, music, and gaming NFTs can all be posted in the gallery tab.',
    },
  ]
  return (
    <ForumTabWrapper>
      <div className="leftSection">
        <FilterBar
          sort={sort}
          updateSort={updateSort}
          filter={filter}
          updateFilter={updateFilter}
        />
        {filterData.map((item, idx) => (
          <div id={`forum_${item.forum_id}`}>
            <ForumCard
              data={item}
              key={`forum_${item.forum_id}`}
              onCardClick={() => {
                navigate(
                  `/collective/${collectiveInfo.name}/details/${item.forum_id}/forum`,
                )
              }}
              onUpdateForum={(forum) => onUpdateForum(idx, forum)}
              sort={sort}
            />
          </div>
        ))}
      </div>
      <div className="rightSection">
        <Card
          padding="0"
          header={<div>COMMUNITY GUIDELINES</div>}
          content={
            <div className="guidelines_list">
              {guidelines.map((guideline, idx) => (
                <div className="guideline_title" key={`guideline_${idx}`}>
                  <span className="guideline_index">{idx + 1}</span>
                  {guideline.title}
                </div>
              ))}
            </div>
          }
        />
        <Card
          padding="0"
          borderWidth={'0'}
          header={<div>FAQs</div>}
          content={
            <div className="guidelines_list">
              {faqs.map((faq, idx) => (
                <ExpandableView
                  key={`faq_${idx}`}
                  header={<div className="guideline_title">{faq.title}</div>}
                  content={<div>{faq.details}</div>}
                />
              ))}
            </div>
          }
        />
      </div>
    </ForumTabWrapper>
  )
}
