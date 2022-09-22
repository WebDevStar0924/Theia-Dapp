import API from "api/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "../Carousel";
import { CollectiveCard } from "../CollectiveCard";
import { Switch } from "../Switch";
import { PopularCollectivesWrapper } from "./styles";

export default function PopularCollectives() {
  const navigate = useNavigate();
  const [popularCollectives, setPopularCollectives] = useState<any[]>([]);

  useEffect(() => {
    API.getPopularCollectives().then((res) => {
      setPopularCollectives(res.data.collectives);
    });
  }, []);
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
      value: "1h",
      label: "1 hour",
    },
    {
      value: "24h",
      label: "24 hours",
    },
    {
      value: "7d",
      label: "7 days",
    },
    {
      value: "30d",
      label: "30 days",
    },
  ];
  const [activeSwitchItem, setActiveSwitchItem] = useState(
    switchItems[0].value
  );
  return (
    <PopularCollectivesWrapper>
      <div className={"listHeader"}>
        <div className={"listName"}>Popular Collectives</div>
        <Switch
          items={switchItems}
          activeValue={activeSwitchItem}
          onUpdateItem={(val) => setActiveSwitchItem(val)}
        />
      </div>

      <Carousel
        responsive={responsive}
        items={popularCollectives
          .slice(0, popularCollectives.length)
          .map((item, index) => (
            <CollectiveCard
              collective={item}
              key={`popular_${index}`}
              onClick={() => navigate(`/collective/${item.name}`)}
            />
          ))}
      />
    </PopularCollectivesWrapper>
  );
}
