// import { GifUploadFormWrapper } from './styles'
import { Gif } from '@giphy/react-components'
import { GifsResult, GiphyFetch } from '@giphy/js-fetch-api'
import SearchSvg from '../../assets/svg/Search.svg'
import { Modal } from '../../widgets/Modal'
import Flex from 'components/Flex/Flex'
import { GifUploadModalWrapper } from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import ExternalInput from 'components/ExternalInput'
import { useEffect, useState } from 'react'
import { Handler } from 'widgets/Modal/types'
interface iProps {
  onDismiss?(gifUrl: string): Handler
  params?: any
}
export default function GifUploadModal(props: iProps) {
  const { onDismiss, params } = props
  const gf = new GiphyFetch('EPy16B9szIYTh3l8s1ku2PhcLUS2Fdmc')
  const [searchValue, setSearchValue] = useState('')
  const [searchResult, setSearchResult] = useState<GifsResult>({} as GifsResult)
  async function search() {
    // const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
    if (searchValue !== '') {
      const gifs = await gf.search(searchValue, {
        sort: 'relevant',
        lang: 'es',
        limit: 10,
        type: 'stickers',
      })
      setSearchResult(gifs)
    } else {
      const gifs = await gf.trending({ limit: 10, offset: 25, rating: 'g' })
      setSearchResult(gifs)
    }
  }
  useEffect(() => {
    search()
    console.log(searchResult)
  }, [searchValue])

  // async function GridDemo({ onGifClick }) {
  //   // const fetchGifs = (offset: number) => gf.trending({ offset, limit: 10 })
  //   const gifs= await gf.search('dogs', { sort: 'relevant', lang: 'es', limit: 10, type: 'stickers' })
  //   return (
  //     <>
  //       <Grid
  //         onGifClick={onGifClick}
  //         fetchGifs={gifs}
  //         width={600}
  //         columns={3}
  //         gutter={6}
  //       />
  //     </>
  //   )
  // }
  return (
    <Modal
      title={''}
      hideCloseButton={true}
      width={'600px'}
      borderRadius={'16px'}
      bodyPadding={'0px'}
      onDismiss={() => {
        alert()
      }}
    >
      <GifUploadModalWrapper>
        <Flex className="modalHeader">
          <Flex className="closeModalButton">
            <AiOutlineClose
              fontSize="16px"
              color="#475467"
              size="25px"
              onClick={() => {
                onDismiss && onDismiss('')
              }}
            />
          </Flex>
          <ExternalInput
            type="active"
            inputSize="sm"
            value={searchValue}
            className={'searchInput'}
            placeholder={'Name'}
            startIcon={<img src={SearchSvg} alt="searchGif" />}
            onUserInput={(val) => {
              setSearchValue(val), search()
            }}
          />
        </Flex>
        <Flex className="gifList">
          {searchResult?.data !== undefined &&
            searchResult?.data.map((data) => {
              return (
                <Flex
                  onClick={() => {
                    onDismiss && onDismiss(data.embed_url),
                      params?.callback(data)
                  }}
                  style={{ cursor: 'pinter' }}
                >
                  <Gif
                    gif={data}
                    key={data.id}
                    width={296}
                    height={160}
                    noLink
                    style={{ cursor: 'pointer' }}
                  />
                </Flex>
              )
            })}
        </Flex>
      </GifUploadModalWrapper>
    </Modal>
  )
}
