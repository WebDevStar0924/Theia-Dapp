import { HeartIcon } from "../../components/Svg";
import { CollectiveCard } from "../CollectiveCard";
import { popularCollectives } from "../PopularCollectives/data";
import { ProfileFavoritesWrapper } from "./styles";

export default function ProfileFavorites() {
  return (
    <ProfileFavoritesWrapper>
      <div className={"favorites"}>Favorites</div>

      <div className={"favoriteList"}>
        {popularCollectives
          .slice(0, popularCollectives.length)
          .map((item, index) => (
            <CollectiveCard
              collective={item}
              favorite={true}
              key={`popular_${index}`}
            />
          ))}
      </div>

      <HeartIcon />
    </ProfileFavoritesWrapper>
  );
}
