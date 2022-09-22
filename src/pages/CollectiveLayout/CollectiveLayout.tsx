import API from "api/api";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { filter } from "lodash";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import CollectiveHeader from "./CollectiveHeader";
import CollectiveSidebar from "./CollectiveSidebar";
import { CollectiveLayoutWrapper } from "./styles";

export default function CollectiveLayout() {
  const [collectiveInfo, setCollectiveInfo] = useState<any>(null);
  const { account } = useActiveWeb3React();
  const { cname, ctab, post_id } = useParams();

  const [mixedData, setMixedData] = useState<any[]>([]);
  const [forums, setForums] = useState<any[]>([]);
  const [galleries, setGalleries] = useState<any[]>([]);
  const [isMixed, setIsMixed] = useState(false);
  const [sortOption, setSortOption] = useState("trending");
  const [filter, updateFilter] = useState({
    onlySaved: false,
    onlyMyPosts: false
  })

  useEffect(() => {
    API.getCollectiveByName(cname, account).then((res) => {
      if (res.data.success) {
        setCollectiveInfo(res.data.collective);
      }
    });
  }, [cname, account]);

  const addNewForum = (newForum) => {
    const newForums = [...forums];
    newForums.unshift(newForum);
    setForums(newForums);

    const newMixedData = mixedData.map((item) => {
      if (item.cardType === "gallery") {
        return item;
      }
      return {
        ...item,
        fIdx: item.fIdx + 1,
      };
    });
    newMixedData.unshift({
      ...newForum,
      cardType: "forum",
      fIdx: 0,
    });
    setMixedData(newMixedData);
  };

  const addNewGallery = (shared) => {
    setGalleries([...shared, ...galleries]);
    const newMixedData = [
      ...shared.map((item, idx) => {
        return {
          ...item,
          cardType: "gallery",
          gIdx: idx,
        };
      }),
      ...mixedData.map((item) => {
        if (item.cardType === "forum") {
          return item;
        }
        item.gIdx += shared.length;
        return item;
      }),
    ];
    setMixedData(newMixedData);
  };

  const loadMixDatas = useCallback(async () => {
    const forumLast36 = await API.getForumLast36(collectiveInfo.collective_id);
    const galleryLast36 = await API.getGalleryLast36(
      collectiveInfo.collective_id
    );
    let forumIdx = 0;
    let galleryIdx = 0;
    const sumWeight =
      Number(forumLast36.data.count) + Number(galleryLast36.data.count);
    const forumWeight =
      sumWeight === 0 ? 1 : Number(forumLast36.data.count) / sumWeight;
    const mixedData: any[] = [];
    while (forumIdx < forums.length || galleryIdx < galleries.length) {
      const rand = Math.random();
      if (rand < forumWeight && forumIdx < forums.length) {
        mixedData.push({
          ...forums[forumIdx],
          cardType: "forum",
          fIdx: forumIdx,
        });
        forumIdx++;
      } else {
        if (galleryIdx < galleries.length) {
          mixedData.push({
            ...galleries[galleryIdx],
            cardType: "gallery",
            gIdx: galleryIdx,
          });
          galleryIdx++;
        } else if (forumIdx < forums.length) {
          mixedData.push({
            ...forums[forumIdx],
            cardType: "forum",
            fIdx: forumIdx,
          });
          forumIdx++;
        }
      }
    }
    setMixedData(mixedData);
    setIsMixed(true);
  }, [forums, galleries]);

  useEffect(() => {
    if (forums.length > 0 || galleries.length > 0) {
      if (mixedData.length === 0 || !isMixed) {
        loadMixDatas();
      }
    }
  }, [forums, galleries, isMixed]);

  useEffect(() => {
    if (collectiveInfo) {
      API.getForums(
        collectiveInfo.collective_id,
        "forum",
        account ?? "",
        sortOption
      ).then((res) => {
        setForums(res.data.forums);
      });

      API.getGalleries(collectiveInfo.collective_id, account, sortOption).then(
        (res) => {
          const galleries = res.data.galleries || [];
          setGalleries(galleries);
        }
      );
    }
  }, [account, sortOption, collectiveInfo]);
  return (
    <>
      {collectiveInfo && (
        <CollectiveLayoutWrapper>
          <CollectiveSidebar
            collectiveInfo={collectiveInfo}
            galleries={galleries}
            addNewForum={addNewForum}
            addNewGallery={addNewGallery}
          />
          <div className="collectiveDetails">
            <CollectiveHeader
              collectiveInfo={collectiveInfo}
              updateCollectiveInfo={(data) => setCollectiveInfo(data)}
            />
            <Outlet
              context={{
                forums,
                galleries,
                mixedData,
                setForums,
                setGalleries,
                setMixedData,
                collectiveInfo,
                sort: sortOption,
                updateSort: setSortOption,
                filter,
                updateFilter
              }}
            />
          </div>
        </CollectiveLayoutWrapper>
      )}
    </>
  );
}
