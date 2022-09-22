import { EventCarousel } from "components/Carousel";
import { EventCard } from "components/EventCard";
import { FilterBar } from "components/FilterBar";
import { CollectiveContextProps } from "pages/CollectiveLayout/types";
import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useEventCreateModal } from "widgets/EventModal/useShareEventModal";
import { EventsTabWrapper } from "../styles";
import { useNavigate, useParams } from "react-router-dom";

export default function EventsTab() {
  const { sort, updateSort, filter, updateFilter } =
    useOutletContext<CollectiveContextProps>();
  const [events, updateEventList] = useState<any[]>([1, 2, 3]);
  const navigate = useNavigate();

  // const { onPresentEventDetailModal } = useEventCreateModal();
  const responsive = {
    xlarge: {
      breakpoint: {
        max: 3000,
        min: 1920,
      },
      items: 3,
      partialVisibilityGutter: 50,
    },
    large: {
      breakpoint: {
        max: 1920,
        min: 1440,
      },
      items: 4,
      partialVisibilityGutter: 50,
    },
    desktop: {
      breakpoint: {
        max: 1440,
        min: 1024,
      },
      items: 3,
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
  };

  return (
    <EventsTabWrapper>
      <FilterBar
        sort={sort}
        updateSort={updateSort}
        filter={filter}
        updateFilter={updateFilter}
      />

      <div className="mainPart">
        <div className={"sideContent"}>
          <div className={"subTitle"}>Upcoming Events</div>
          <EventCarousel
            items={events.map((item, index) => (
              <EventCard onClick={() => {
                navigate(`details/${item}`)
              }}

                key={index}
              />
            ))}
            responsive={responsive}
          />
        </div>
        <div className={"sideContent"}>
          <div className={"subTitle"}>Featured Events</div>
          <EventCarousel
            items={events.map((item, index) => (
              <EventCard onClick={() => {
                navigate(`details/${item}`)
              }}

                key={index}
              />
            ))}
            responsive={responsive}
          />
        </div>

        <div className={"sideContent"}>
          <div className={"subTitle"}>Community Events</div>
          <EventCarousel
            items={events.map((item, index) => (
              <EventCard onClick={() => {
                navigate(`details/${item}`)
              }}

                key={index}
              />
            ))}
            responsive={responsive}
          />
        </div>

        <div className={"sideContent"}>
          <div className={"subTitle"}>Past Events</div>
          <EventCarousel
            items={events.map((item, index) => (
              <EventCard onClick={() => {
                navigate(`details/${item}`)
              }}

                key={index}
              />
            ))}
            responsive={responsive}
          />
        </div>
      </div>
    </EventsTabWrapper>
  );
}
