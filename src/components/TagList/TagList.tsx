import { TagListWrapper } from './styles'
import TagItem from './TagItem'

interface iProps {
  tags: string[]
}
export default function TagList(props: iProps) {
  const { tags } = props
  return (
    <TagListWrapper>
      {tags.map((tag) => (
        <TagItem value={tag} key={tag} />
      ))}
    </TagListWrapper>
  )
}
