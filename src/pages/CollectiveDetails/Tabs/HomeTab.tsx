import classnames from "classnames";
import { Card } from "components/Card";
import { ExpandableView } from "components/ExpandableView";
import { Flex } from "components/Flex";
import { ForumCard } from "components/ForumCard";
import { GalleryCard } from "components/GalleryCard";
import { ImageCard } from "components/ImageCard/ImageCard";
import { CalendarIcon, FireIcon, TopIcon } from "components/Svg";
import { TabList } from "components/TabList";
import { CollectiveContextProps } from "pages/CollectiveLayout/types";
import { useRef, useState } from "react";
import { FiBookmark } from "react-icons/all";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Jazzicon, { jsNumberForAddress } from "react-jazzicon";
import { useNavigate, useOutletContext } from "react-router-dom";
import {
  ResponsiveContainer,
  StackedCarousel,
} from "react-stacked-center-carousel";
import { formatBlockchainAddress } from "utils";
import stackedBg from "../../../assets/image/stackedBg.png";
import { galleryImages } from "../data";
import { HomeTabWrapper, StackedCarouselWrapper } from "../styles";

interface AboutProps {
  collectiveInfo: any;
  forums: any[];
  galleries: any[];
  handleUpdateForums: (newData: any[]) => void;
  handleUpdateGalleries: (newData: any[]) => void;
  sortOption: string;
  updateSort: (option: string) => void;
  members: any[];
}

export default function HomeTab(props: AboutProps) {
  const { sortOption, updateSort, members } = props;
  const [activeSlideNum, setActiveSlideNum] = useState(0);
  const [onlyMyPosts, showOnlyMyPosts] = useState(false);
  const [onlySaved, showOnlySaved] = useState(false);
  const ref = useRef<any>(null);
  const navigate = useNavigate();

  const {
    forums,
    galleries,
    mixedData,
    collectiveInfo,
    setForums,
    setMixedData,
    setGalleries,
  } = useOutletContext<CollectiveContextProps>();

  const onUpdateGallery = (idx: number, gallery: any) => {
    const newGalleries = [...galleries];
    newGalleries[idx] = gallery;
    setGalleries(newGalleries);

    const newMixedData = [...mixedData];
    setMixedData(
      newMixedData.map((item) => {
        if (item.gallery_id === gallery.gallery_id) {
          return gallery;
        }
        return item;
      })
    );
  };

  const onUpdateForum = (idx: number, forum: any) => {
    const newForums = [...forums];
    newForums[idx] = forum;
    setForums(newForums);

    const newMixedData = [...mixedData];
    setMixedData(
      newMixedData.map((item) => {
        if (item.forum_id === forum.forum_id) {
          return forum;
        }
        return item;
      })
    );
  };

  return (
    <HomeTabWrapper>
      <div className="leftPart">
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
          <Flex style={{gridGap: '10px'}}>
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
        {mixedData.map((item, idx) => (
          <div
            key={`mixdata_${idx}`}
            id={
              item.cardType === "forum"
                ? `forum_${item.forum_id}`
                : `gallery_${item.gallery_id}`
            }
          >
            {item.cardType === "forum" && (
              <ForumCard
                data={item}
                key={`forum_${idx}`}
                onCardClick={() => {
                  navigate(
                    `/collective/${collectiveInfo.name}/details/${item.forum_id}/home`
                  );
                }}
                onUpdateForum={(forum) => onUpdateForum(forum.fIdx, forum)}
                sort={sortOption}
              />
            )}
            {item.cardType === "gallery" && (
              <GalleryCard
                data={item}
                key={`gallery_${idx}`}
                onUpdateGallery={(gallery) =>
                  onUpdateGallery(gallery.gIdx, gallery)
                }
                onClick={() => {
                  navigate(
                    `/collective/${collectiveInfo.name}/home/${item.gallery_id}`
                  );
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="rightPart">
        <ExpandableView
          header={<div>ABOUT</div>}
          individual={false}
          content={
            <div dangerouslySetInnerHTML={{ __html: collectiveInfo.details }} />
          }
        />

        <Card
          header={<div>MEMBERS</div>}
          content={
            <Flex
              alignItems={"center"}
              style={{ gridGap: "20px", paddingBottom: "20px" }}
              className="horizontalScroll"
            >
              {members.map((member, idx) => (
                <Flex
                  flexDirection={"column"}
                  alignItems="center"
                  style={{ gridGap: "5px" }}
                  key={`user_${idx}`}
                >
                  {member.creator && member.creator[0].avatar ? (
                    <img
                      className="ellipse80"
                      src={member.creator[0].avatar}
                      alt={member.creator[0].name}
                    />
                  ) : (
                    <Jazzicon
                      diameter={80}
                      seed={jsNumberForAddress(member.member_address)}
                    />
                  )}
                  <div className="userName">
                    {member.creator
                      ? member.creator[0].name
                      : formatBlockchainAddress(member.member_address, 2, 2)}
                  </div>
                  <div className="userTag">MEMBER</div>
                </Flex>
              ))}
            </Flex>
          }
        />

        <StackedCarouselWrapper bg={stackedBg}>
          <ResponsiveContainer
            carouselRef={ref}
            render={(parentWidth, carouselRef) => {
              return (
                <StackedCarousel
                  ref={carouselRef}
                  slideComponent={ImageCard}
                  slideWidth={400}
                  carouselWidth={parentWidth}
                  data={galleryImages}
                  currentVisibleSlide={5}
                  maxVisibleSlide={5}
                  useGrabCursor
                  onActiveSlideChange={(activeSlide) =>
                    setActiveSlideNum(activeSlide)
                  }
                />
              );
            }}
          />
          <div className="carouselActions">
            <div
              className="moveBtn"
              onClick={() => {
                if (ref.current) ref.current.goBack();
              }}
            >
              <BsArrowLeft fill="#999999" />
            </div>
            <div className="dots">
              {galleryImages.map((_, idx) => (
                <span
                  key={`dot_${idx}`}
                  className={classnames("dot", {
                    active: ref.current && idx === activeSlideNum,
                  })}
                />
              ))}
            </div>
            <div
              className="moveBtn"
              onClick={() => {
                if (ref.current) {
                  ref?.current.goNext();
                }
              }}
            >
              <BsArrowRight fill="#999999" />
            </div>
          </div>
        </StackedCarouselWrapper>
      </div>
    </HomeTabWrapper>
  );
}
