import classnames from "classnames";
import { Card } from "components/Card";
import { ExpandableView } from "components/ExpandableView";
import { ForumCard } from "components/ForumCard";
import { CalendarIcon, FireIcon, TopIcon } from "components/Svg";
import { TabList } from "components/TabList";
import { useState } from "react";
import { FiBookmark } from "react-icons/all";
import { useNavigate } from "react-router-dom";
import { Flex } from "theme-ui";
import { ForumTabWrapper } from "../styles";

interface iProps {
  collectiveInfo: any;
  forums: any[];
  handleUpdateForums: (newData: any[]) => void;
  sortOption: string;
  updateSort: (option: string) => void;
  selectedForumId?: number;
  collectiveId: string;
  galleries: any[];
  handleUpdateGalleries: (galleries: any[]) => void;
}

export default function ForumTab(props: iProps) {
  const {
    forums,
    handleUpdateForums,
    collectiveInfo,
    sortOption,
    updateSort,
    galleries,
    handleUpdateGalleries,
  } = props;
  const navigate = useNavigate();

  const [onlyMyPosts, showOnlyMyPosts] = useState(false);
  const [onlySaved, showOnlySaved] = useState(false);

  const onUpdateForum = (idx: number, forum: any) => {
    const newForums = [...forums];
    newForums[idx] = forum;
    handleUpdateForums(newForums);
  };

  const onAddGalleries = (shared) => {
    handleUpdateGalleries([...shared, ...galleries]);
  };

  const guidelines = [
    {
      title: "NO SMOOTHBRAIN SHIT",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ",
    },
    {
      title: "BE DANK",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ",
    },
    {
      title: "DROP “F” IF LIQUIDATED",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ",
    },
    {
      title: `DROP NICE FOR “69/420" POSTS`,
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. ",
    },
  ];

  const faqs = [
    {
      title: "What can I do on THEIA?",
      details:
        "THEIA Home is our flagship product that features a social platform for web3 communities to engage with fellow NFT holders. \n \nYou can use the “Forum” feature to have insightful discussions with fellow NFT holders, and the “Gallery” feature to share your NFTs with the community. ",
    },
    {
      title: "What types of posts can be posted in the “Forum”?",
      details:
        "Post text, images, or links to your favourite sites on forum. Post anything you’d like. The forum is for you, the community, to do whatever you want. Abiding by the community guidelines of course.",
    },
    {
      title: "What types of NFTs can be posted in “Gallery”?",
      details:
        "PFP, video, music, and gaming NFTs can all be posted in the gallery tab.",
    },
  ];
  return (
    <ForumTabWrapper>
      <div className="leftSection">
        <div className="filtering">
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
            setActiveTab={(val) => updateSort(val)}
          />

          <Flex style={{ gridGap: "10px" }}>
            <div
              className={classnames("saveBtn", {
                active: onlySaved,
              })}
              onClick={() => showOnlySaved(!onlySaved)}
            >
              <FiBookmark size={24} />
            </div>
            <div
              className={classnames("saveBtn", {
                active: onlyMyPosts,
              })}
              onClick={() => showOnlyMyPosts(!onlyMyPosts)}
            >
              <span>✨</span>
            </div>
          </Flex>
        </div>
        {forums &&
          forums.map((item, idx) => (
            <div id={`forum_${item.forum_id}`}>
              <ForumCard
                data={item}
                key={`forum_${item.forum_id}`}
                onCardClick={() => {
                  navigate(
                    `/collective/${collectiveInfo.name}/details/${item.forum_id}/forum`
                  );
                }}
                onUpdateForum={(forum) => onUpdateForum(idx, forum)}
                sort={sortOption}
              />
            </div>
          ))}
      </div>
      <div className="rightSection">
        <Card
          padding="0"
          header={<div>COMMUNITY GUIDELINES</div>}
          content={
            <div className="guidelines_list">
              {guidelines.map((guideline, idx) => (
                <div className="guideline_title" key={`guideline_${idx}`}>
                  <span className="guideline_index">{idx + 1}</span>
                  {guideline.title}
                </div>
              ))}
            </div>
          }
        />
        <Card
          padding="0"
          borderWidth={"0"}
          header={<div>FAQs</div>}
          content={
            <div className="guidelines_list">
              {faqs.map((faq, idx) => (
                <ExpandableView
                  individual={false}
                  key={`faq_${idx}`}
                  header={<div className="guideline_title">{faq.title}</div>}
                  content={<div>{faq.details}</div>}
                />
              ))}
            </div>
          }
        />
      </div>
    </ForumTabWrapper>
  );
}
