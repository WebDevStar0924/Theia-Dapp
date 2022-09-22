import cn from "classnames";
import { TabList } from "components/TabList";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useMembership } from "hooks/useMembership";
import { useEffect, useState } from "react";
import { FiCalendar, FiEdit3, FiHome, FiImage, HiPlus } from "react-icons/all";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useForumModal from "widgets/CreateForumModal/useForumModal";
import { useShareArtModal } from "widgets/GalleryModal/useShareArtModal";
import defaultProjectIcon from "../../assets/image/defaultProjectIcon.png";
// import useEventCardModal from "../../widgets/EventCardModal/useEventCardModal";
import { useEventCreateModal } from "widgets/EventModal/useShareEventModal";

import { CollectiveSidebarWrapper } from "./styles";

interface iProps {
  collectiveInfo: any;
  galleries: any[];
  addNewForum: (newForum: any) => void;
  addNewGallery: (newGallery: any) => void;
}
export default function CollectiveSidebar(props: iProps) {
  const { cname, ctab } = useParams();
  const location = useLocation();
  const { collectiveInfo, galleries, addNewForum, addNewGallery } = props;
  const [activeTabItem, setActiveTabItem] = useState("home");
  const [isShowEventBtns, showEventBtns] = useState(false);
  const onMemberShipCheck = useMembership();
  const { account } = useActiveWeb3React();
  // const { onPresentEventCardModal } = useEventCardModal();

  const { onPresentForumModal } = useForumModal();
  const { onPresentEventCreateModal } = useEventCreateModal();
  const { onPresentShareArtModal } = useShareArtModal(
    galleries,
    addNewGallery,
    collectiveInfo
  );
  const navigate = useNavigate();
  useEffect(() => {
    switch (location.pathname) {
      case `/collective/${cname}`:
      case `/collective/${cname}/home`:
        setActiveTabItem("home");
        break;
      case `/collective/${cname}/forum`:
        setActiveTabItem("forum");
        break;
      case `/collective/${cname}/gallery`:
        setActiveTabItem("gallery");
        break;
      case `/collective/${cname}/events`:
        setActiveTabItem("events");
        break;
    }
  }, [location]);
  return (
    <CollectiveSidebarWrapper>
      <img
        src={defaultProjectIcon}
        className="userNftAvatar"
        alt="user nft image"
      />
      <div className="createBtns">
        <div
          className={cn("eventToggleBtn", {
            active: isShowEventBtns,
          })}
          onClick={() => showEventBtns(!isShowEventBtns)}
        >
          <HiPlus size={30} />
        </div>
        {isShowEventBtns && (
          <>
            <div
              className="eventBtn"
              onClick={() =>
                onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                  onPresentForumModal({
                    active: "POST",
                    collectiveID: collectiveInfo.collective_id,
                    callback: addNewForum,
                  })
                )
              }
            >
              <FiEdit3 size={24} color="#101828" />
              <span>Post</span>
            </div>
            <div
              className="eventBtn"
              onClick={() =>
                onMemberShipCheck(collectiveInfo.collective_id, account, () =>
                  onPresentShareArtModal()
                )
              }
            >
              <FiImage size={24} color="#101828" />
              <span>Share</span>
            </div>
            <div className="eventBtn"
              onClick={() =>
                onPresentEventCreateModal({})}
            >
              <FiCalendar size={24} color="#101828" />
              <span>Event</span>
            </div>
          </>
        )}
      </div>
      <div className="navBtns"></div>
      <TabList
        direction="column"
        minWidth="152px"
        items={[
          {
            text: (
              <div className="tabContent">
                <FiHome size={24} /> HOME
              </div>
            ),
            value: "home",
            onClick: () => navigate(`/collective/${cname}`),
          },
          {
            text: (
              <div className="tabContent">
                <FiEdit3 size={24} /> FORUM
              </div>
            ),
            value: "forum",
            onClick: () => navigate(`/collective/${cname}/forum`),
          },
          {
            text: (
              <div className="tabContent">
                <FiImage size={24} /> GALLERY
              </div>
            ),
            value: "gallery",
            onClick: () => navigate(`/collective/${cname}/gallery`),
          },
          {
            text: (
              <div className="tabContent">
                <FiCalendar size={24} />
                EVENTS
              </div>
            ),
            value: "events",
            onClick: () => navigate(`/collective/${cname}/events`),
          },
        ]}
        activeTab={activeTabItem}
        setActiveTab={(val) => setActiveTabItem(val)}
      />
    </CollectiveSidebarWrapper>
  );
}
