import { AllCollectivesData } from './data'
import { AllCollectivesWrapper } from './styles'
import { CollectiveCard } from '../CollectiveCard'
import { Carousel } from '../Carousel'

export default function AllCollectives() {
  const responsive = {
    xlarge: {
      breakpoint: {
        max: 3000,
        min: 1920,
      },
      items: 7,
      partialVisibilityGutter: 50,
    },
    large: {
      breakpoint: {
        max: 1920,
        min: 1440,
      },
      items: 5,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: {
        max: 1440,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }
  return (
    <AllCollectivesWrapper>
      <div className={'listHeader'}>
        <div className={'listName'}>Popular Collectives</div>
      </div>

      <Carousel
        responsive={responsive}
        items={AllCollectivesData.slice(0, AllCollectivesData.length).map(
          (item, index) => (
            <CollectiveCard collective={item} key={`popular_${index}`} />
          ),
        )}
      />
    </AllCollectivesWrapper>
  )
}
