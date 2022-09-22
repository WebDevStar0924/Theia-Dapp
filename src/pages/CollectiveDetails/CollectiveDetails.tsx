import API from "api/api";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { CollectiveContextProps } from "pages/CollectiveLayout/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EventDetails } from "./EventDetails"
import {
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import {
  updateCollective,
  updateForums,
  updateGalleries,
  updateMembers,
} from "state/collective";
import { useArtDetailModal } from "widgets/GalleryModal/useShareArtModal";
import { CollectiveDetailsContainer } from "./styles";
import EventsTab from "./Tabs/EventsTab";
import ForumTab from "./Tabs/ForumTab";
import GalleryTab from "./Tabs/GalleryTab";
import HomeTab from "./Tabs/HomeTab";
import SocialTab from "./Tabs/SocialTab";

interface LocationState {
  forum_id: string;
}

export default function CollectiveDetails() {
  const { cname, ctab, post_id, event_id } = useParams();
  const { forums, galleries, setForums, setGalleries, collectiveInfo } =
    useOutletContext<CollectiveContextProps>();
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("trending");
  const [members, setMembers] = useState<any[]>([]);
  const { onPresentArtDetailModal } = useArtDetailModal(collectiveInfo);
  const dispatch = useDispatch();
  const location = useLocation();
  console.log("ctab = ", ctab === undefined);
  console.log("event_id:", event_id);
  useEffect(() => {
    if (post_id && collectiveInfo) {
      onPresentArtDetailModal({
        gallery_id: post_id,
        callback: () => navigate(`/collective/${cname}/${ctab}`),
      });
    }
  }, [post_id, collectiveInfo]);

  useEffect(() => {
    if (collectiveInfo) {
      API.getMembers(collectiveInfo.collective_id).then((res) => {
        if (res.data.success) {
          setMembers(res.data.members);
          dispatch(updateMembers(res.data.members));
        }
      });
    }
  }, [collectiveInfo]);

  useEffect(() => {
    if (!document) {
      return;
    }

    if (!(location.state as LocationState)?.forum_id) {
      return;
    }

    setTimeout(() => {
      const element_id = `forum_${(location.state as LocationState).forum_id}`;
      const componentView = document.getElementById("componentsView");
      const element = document.getElementById(element_id);
      componentView?.scrollTo(
        0,
        element?.offsetTop ? element.offsetTop - 100 : 0
      );
    }, 2000);
  }, [location]);

  return (
    <>
      {collectiveInfo && (
        <CollectiveDetailsContainer>
          <div className={"detailsContent"}>
            {(ctab === "home" || ctab === undefined) && (
              <HomeTab
                collectiveInfo={collectiveInfo}
                forums={forums || []}
                galleries={galleries}
                handleUpdateForums={(forums) => {
                  setForums(forums);
                }}
                handleUpdateGalleries={(galleries) => {
                  setGalleries(galleries);
                }}
                sortOption={sortOption}
                updateSort={(val) => setSortOption(val)}
                members={members}
              />
            )}
            {ctab === "forum" && (
              <ForumTab
                collectiveInfo={collectiveInfo}
                forums={forums}
                handleUpdateForums={(forums) => {
                  setForums(forums);
                }}
                sortOption={sortOption}
                updateSort={(val) => setSortOption(val)}
                collectiveId={collectiveInfo.collective_id}
                galleries={galleries}
                handleUpdateGalleries={(galleries) => {
                  setGalleries(galleries);
                }}
              />
            )}
            {ctab === "updates" && (
              <SocialTab collectiveInfo={collectiveInfo} />
            )}
            {ctab === "events" && event_id === undefined && (
              <EventsTab
                sortOption={sortOption}
                collectiveInfo={collectiveInfo}
              />
            )}
            {ctab === "events" && event_id !== undefined && (
              <EventDetails
              />
            )}
            {ctab === "gallery" && (
              <GalleryTab
                collectiveInfo={collectiveInfo}
                galleries={galleries}
                handleUpdateGalleries={(galleries) => {
                  setGalleries(galleries);
                }}
              />
            )}
          </div>
        </CollectiveDetailsContainer>
      )}
    </>
  );
}
