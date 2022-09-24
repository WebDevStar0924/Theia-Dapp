import { ProfileDashboardWrapper } from './styles'
import DashItem from './DashItem'
import { MotionButton } from '../MotionButton/styles'

interface iProps {
  collectives: any[]
  projects: any[]
  pageNum: {
    projects: number
    collectives: number
  }
  onMore: (type: string) => void
}

export default function ProfileDashboard(props: iProps) {
  const { collectives, projects, onMore } = props

  return (
    <ProfileDashboardWrapper>
      <div className={'dashList'}>
        <div className={'subTitle'}>Collectives</div>
        {collectives.map((collective, idx) => (
          <DashItem
            key={`profile_collective_${idx}`}
            icon={collective.icon}
            name={collective.collectiveName}
            type={collective.type}
          />
        ))}
        <MotionButton
          className={'moreBtn'}
          onClick={() => onMore('collectives')}
        >
          More
        </MotionButton>
      </div>

      <div className={'dashList'}>
        <div className={'subTitle'}>Projects</div>
        {projects.map((project, idx) => (
          <DashItem
            key={`profile_collective_${idx}`}
            icon={project.icon}
            name={project.projectName}
            type={project.type}
          />
        ))}
        <MotionButton className={'moreBtn'} onClick={() => onMore('projects')}>
          More
        </MotionButton>
      </div>
    </ProfileDashboardWrapper>
  )
}
