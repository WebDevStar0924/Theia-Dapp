import { Button } from "components/Button";
import { EventCard } from "components/EventCard";
import { TabList } from "components/TabList";
import { FiCalendar, FiEdit3, FiImage } from "react-icons/fi";
import { CalendarIcon, FireIcon, TopIcon } from "../../../components/Svg";
import { EventsTabWrapper } from "../styles";
import { CollectiveInfo } from "../types";
import { EventCarousel } from "components/Carousel";
import {
  useEventCreateModal,
} from "widgets/EventModal/useShareEventModal";
import { useNavigate, useParams } from "react-router-dom";

interface iProps {
  collectiveInfo: CollectiveInfo;
  sortOption: string;
}

export default function EventsTab(props: iProps) {
  const { sortOption, collectiveInfo } = props;
  const { onPresentEventCreateModal } = useEventCreateModal();
  const { cname } = useParams();

  const navigate = useNavigate();
  const responsive = {
    xlarge: {
      breakpoint: {
        max: 3000,
        min: 1920,
      },
      items: 4,
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
      <div style={{ display: "flex" }}>
        <div className="filtering">
          <div className="postActions">
            <Button
              className="postBtn"
              onClick={() => {
                onPresentEventCreateModal({});
                // handleCreateForum(collectiveInfo.collective_id, account, () =>
                //   onPresentForumModal({
                //     active: "POST",
                //     collectiveID: collectiveInfo.collective_id,
                //     callback: addNewForum,
                //   })
                // );
              }}
            >
              <FiEdit3 size={24} color="#101828" />
            </Button>
            <Button
              className="imageBtn"
              onClick={() => {
                // handleCreateForum(collectiveInfo.collective_id, account, () =>
                //   onPresentShareArtModal()
                // );
              }}
            >
              <FiImage size={24} color="#101828" />
            </Button>
            <Button className="postBtn" onClick={() => { }}>
              <FiCalendar size={24} color="#101828" />
            </Button>
          </div>

          <TabList
            items={[
              {
                text: "TRENDING",
                value: "trending",
                icon:
                  sortOption === "trending" ? (
                    <FireIcon width={"24px"} />
                  ) : null,
              },
              {
                text: "NEW",
                value: "new",
                onClick: () => { },
                icon:
                  sortOption === "new" ? <CalendarIcon width={"24px"} /> : null,
              },
              {
                text: "TOP",
                value: "top",
                icon: sortOption === "top" ? <TopIcon width={"24px"} /> : null,
              },
            ]}
            activeTab={sortOption}
            setActiveTab={(val) => { }}
          />
        </div>
      </div>

      <div className="mainPart">
        <div className={"sideContent"}>
          <div className={"subTitle"}>Upcoming Events</div>
          <EventCarousel
            items={[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <EventCard
                onClick={() => {
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
            items={[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <EventCard
                onClick={() => {
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
            items={[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <EventCard
                onClick={() => {
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
            items={[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <EventCard
                onClick={() => {
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
