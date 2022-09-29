import { ForumItemProps } from 'pages/CollectiveDetails/types'
import { UserInfo } from 'pages/SupporterProfile/types'
import { GalleryItemProps } from './types'

export const user1: UserInfo = {
  username: 'ratclarinet.eth',
  address: '0x000000000001010101',
  email: 'ratclarinet.eth@mail.com',
  shortDescription: '',
  avatar: '',
  banner: 'https://source.unsplash.com/random/400x500?sig=12',
  name: 'ratclarinet.eth',
  location: 'New York, NY',
  twitter: null,
  discord: null,
  website: null,
  role: 'Admin',
  walletaddress: '0xfcE42B37Bf160755b8fA7EFB86D4d11b23042708',
}

export const user2: UserInfo = {
  username: 'saltakira',
  address: '0x000000000001010101',
  email: 'saltakira@mail.com',
  shortDescription: '',
  avatar: null,
  banner: 'https://source.unsplash.com/random/400x500?sig=18',
  name: 'saltakira',
  location: 'New York, NY',
  twitter: null,
  discord: null,
  website: null,
  role: 'Core',
  walletaddress: '0x111112312312312312321312323232',
}
export const mixDatas: (ForumItemProps | GalleryItemProps)[] = [
  {
    id: 1,
    creator: user1,
    createdAt: '2017-11-02 02:36:57.204',
    favorites: 23,
    posts: 84,
    title: 'Hello world! 👋',
    comments: [],
    votes: 14000,
    imageLink: 'https://source.unsplash.com/random/400x500?sig=11',
  },
  {
    id: 1,
    creator: user1,
    createdAt: '2017-11-02 02:36:57.204',
    favorites: 23,
    posts: 84,
    title: 'this nft artist is slept on for real',
    comments: [],
    imageLink: 'https://source.unsplash.com/random/400x500?sig=13',
  },
  {
    id: 2,
    creator: user2,
    createdAt: '2022-08-02 02:36:57.204',
    favorites: 23,
    posts: 84,
    title: 'Thoughts on the new drop? 🤔',
    comments: [],
    votes: 14000,
    imageLink: 'https://source.unsplash.com/random/400x500?sig=17',
  },
  {
    id: 2,
    creator: user2,
    createdAt: '2022-08-02 02:36:57.204',
    favorites: 23,
    posts: 84,
    title: 'this nft artist is slept on for real',
    comments: [],
    imageLink: 'https://source.unsplash.com/random/400x500?sig=15',
  },
]

export const onlineUsers: UserInfo[] = [
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
  user1,
  user2,
]

export const galleryImages = [
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/1.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/2.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/3.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/4.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/5.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/6.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/7.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/8.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/9.png',
    title: 'MoonrunnersNFT',
  },
  {
    cover: 'https://storage.googleapis.com/theiastorage/MoonrunnersNFT/10.png',
    title: 'MoonrunnersNFT',
  },
]

export const topContributors: UserInfo[] = [user1, user2, user1, user2, user1]

export const frensOfWagmi = []
