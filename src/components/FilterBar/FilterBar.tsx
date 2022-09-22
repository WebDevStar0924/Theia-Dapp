import classnames from "classnames";
import { Flex } from "components/Flex";
import { CalendarIcon, FireIcon, TopIcon } from "components/Svg";
import { TabList } from "components/TabList";
import { FiBookmark } from "react-icons/fi";
import { FilterBarWrapper } from "./styles";

interface iProps {
  sort: string,
  updateSort: (val: string) => void,
  filter: any,
  updateFilter: (data: any) => void
}
export default function FilterBar(props: iProps) {
  const {sort, updateSort, filter, updateFilter } = props
  return (
    <FilterBarWrapper>
      <TabList
        items={[
          {
            text: "TRENDING",
            value: "trending",
            icon:
            sort === "trending" ? <FireIcon width={"24px"} /> : null,
          },
          {
            text: "NEW",
            value: "new",
            icon: sort === "new" ? <CalendarIcon width={"24px"} /> : null,
          },
          {
            text: "TOP",
            value: "top",
            icon: sort === "top" ? <TopIcon width={"24px"} /> : null,
          },
        ]}
        activeTab={sort}
        setActiveTab={(val) => updateSort(val)}
      />
      <Flex style={{ gridGap: "10px" }}>
        <div
          className={classnames("saveBtn", {
            active: filter.onlySaved,
          })}
          onClick={() => updateFilter({
            ...filter,
            onlySaved: !filter.onlySaved
          })}
        >
          <FiBookmark size={24} />
        </div>
        <div
          className={classnames("saveBtn", {
            active: filter.onlyMyPosts,
          })}
          onClick={() => updateFilter({
            ...filter,
            onlyMyPosts: !filter.onlyMyPosts
          })}
        >
          <span>✨</span>
        </div>
      </Flex>
    </FilterBarWrapper>
  );
}
