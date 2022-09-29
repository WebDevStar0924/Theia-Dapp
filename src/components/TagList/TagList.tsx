import { TagListWrapper } from './styles'
import TagItem from './TagItem'

interface iProps {
  tags: any[]
  updateTopics: (data: any[]) => void
}
export default function TagList(props: iProps) {
  const { tags, updateTopics } = props
  return (
    <TagListWrapper>
      {tags.map((tag, idx) => (
        <TagItem
          active={tag.selected}
          value={tag.tag_name}
          key={tag.tag_id}
          onClick={() => {
            const newTag = { ...tag, selected: !tag.selected }
            const newTags = [...tags]
            newTags[idx] = newTag
            updateTopics(newTags)
          }}
        />
      ))}
    </TagListWrapper>
  )
}
