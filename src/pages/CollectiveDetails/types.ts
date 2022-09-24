import { dropdownItem } from 'components/Dropdown/types'
import { LinkProps } from 'components/Link/types'
import { UserInfo } from 'pages/SupporterProfile/types'

export interface Comment {
  content: string
  creator: UserInfo
  createdAt: string
  replyId: number
  favorites: number
  posts: number
}

export interface CollectiveInfo {
  collectiveID: number | null
  bannerImg: string | null
  iconImg: string | null
  collectiveName: string
  collectiveTicker: string
  shortDescription: string
  category: dropdownItem | null
  collectiveType: dropdownItem | null
  links: LinkProps[]
  details: string
  projects: any[]
}

export interface GalleryItemProps {
  id: number
  creator: UserInfo
  createdAt: string
  favorites: number
  comments: Comment[]
  title: string
  imageLink: string
  posts: number
}

export interface ForumItemProps {
  id: number
  creator: UserInfo
  createdAt: string
  favorites: number
  posts: number
  title: string
  comments: Comment[]
  votes: number
  imageLink: string
}

export interface IForumItem {
  title: string
  description: string
  type: string
  createdat: string | null
  collective_id: string
  owneraddress: string
  forum_id: number
  creator: UserInfo
  favorites: number
  posts: number
  comments: Comment[]
  votes: number
  imageLink: string
}
