import artBg from "./artBg.png";
import filmBg from "./filmBg.png";
import gamingBg from "./gamingBg.png";
import musicBg from "./musicBg.png";
import { CategoryItem, Wrapper } from "./styles";

export default function BrowseCategory() {
  const categoryList = [
    {
      name: "Art",
      href: "art",
      background: artBg,
    },
    {
      name: "Gaming ",
      href: "gaming",
      background: gamingBg,
    },
    {
      name: "Music",
      href: "music",
      background: musicBg,
    },
    {
      name: "Film",
      href: "film",
      background: filmBg,
    },
  ];
  return (
    <Wrapper>
      <div className={"title"}>Browse by Category</div>
      <div className={"categoryList"}>
        {categoryList.map((category, idx) => (
          <CategoryItem
            key={`category_${idx}`}
            className={`${category.name.toLowerCase()}`}
          >
            <img src={category.background} alt={"categoryBg"} />
            <div className={"darkBg"} />
            <div className={"categoryName"}>{category.name}</div>
          </CategoryItem>
        ))}
        <div className={"seeAllBtn"}>
          <span>See All</span>
        </div>
      </div>
    </Wrapper>
  );
}
