import cn from "classnames";
import { HeartIcon } from "components/Svg";
import { CollectiveCardWrapper } from "./styles";

interface iProps {
  collective: any;
  favorite?: boolean;
  onClick?: () => void;
}

export default function CollectiveCard(props: iProps) {
  const { collective, favorite, onClick } = props;
  return (
    <CollectiveCardWrapper onClick={onClick}>
      <img
        className={"collectiveIcon"}
        src={collective.avatar ?? ""}
        alt={collective.name}
      />
      {favorite && <HeartIcon width={"52px"} className="favoriteIcon" />}

      <div className={"collectionInfo"}>
        <div className={"collectiveName"}>{collective.name}</div>

        <div className={"collectionTags"}>
          <div className={cn("collectiveType", collective.type?.value)}>
            <span>{collective.collectiveType?.label}</span>
          </div>
          <div className={"collectiveMembers"}>0 MEMBERS</div>
        </div>
      </div>
    </CollectiveCardWrapper>
  );
}
