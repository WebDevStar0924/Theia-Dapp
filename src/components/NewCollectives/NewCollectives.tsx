import { NewCollectivesWrapper } from "./styles";
import { CollectiveCard } from "../CollectiveCard";
import { Carousel } from "../Carousel";
import { Switch } from "../Switch";
import { useEffect, useState } from "react";
import API from "api/api";
import { useNavigate } from "react-router-dom";

export default function NewCollectives() {
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
  };
  const switchItems = [
    {
      value: "recently_added",
      label: "Recently Added",
    },
    {
      value: "recently_verified",
      label: "Recently Verified",
    },
  ];
  const [activeSwitchItem, setActiveSwitchItem] = useState(
    switchItems[0].value
  );
  const [newCollectives, setNewCollectives] = useState<any>([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.getPopularCollectives().then((res) => {
      setNewCollectives(res.data.collectives);
    });
  }, []);
  return (
    <NewCollectivesWrapper>
      <div className={"listHeader"}>
        <div className={"listName"}>New Collectives</div>
        <Switch
          items={switchItems}
          activeValue={activeSwitchItem}
          onUpdateItem={(val) => setActiveSwitchItem(val)}
        />
      </div>

      <Carousel
        responsive={responsive}
        items={newCollectives
          .slice(0, newCollectives.length)
          .map((item, index) => (
            <CollectiveCard
              collective={newCollectives[0]}
              key={`popular_${index}`}
              onClick={() => navigate(`/collective/${item.name}`)}
            />
          ))}
      />
    </NewCollectivesWrapper>
  );
}
