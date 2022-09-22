import { MotionButton } from "components/MotionButton/styles";
import { SendIcon } from "components/Svg";
import useActiveWeb3React from "hooks/useActiveWeb3React";
import { useToast } from "hooks/useToast";
import { useDispatch } from "react-redux";
import defaultProjectBanner from "../../assets/image/defaultProjectBanner.png";
import defaultProjectIcon from "../../assets/image/defaultProjectIcon.png";
import { CollectiveHeaderWrapper } from "./styles";

interface iProps {
  collectiveInfo: any;
  updateCollectiveInfo: (data: any) => void;
}
export default function CollectiveHeader(props: iProps) {
  const { collectiveInfo } = props;
  const { toastSuccess } = useToast();
  return (
    <CollectiveHeaderWrapper>
      <img
        src={
          collectiveInfo.banner && collectiveInfo.banner !== ""
            ? collectiveInfo.banner
            : defaultProjectBanner
        }
        className="bannerImg"
      />
      <img
        src={
          collectiveInfo.avatar && collectiveInfo.avatar !== ""
            ? collectiveInfo.avatar
            : defaultProjectIcon
        }
        className="avatarImg"
      />
      <div className={"detailActions"}>
        <div>
          <div className={"title"}>{collectiveInfo.name} </div>
          <div className={"shortDescription"}>{collectiveInfo.tagline}</div>
        </div>
        <div className={"detailMore"}>
          <div className="stats">
            <span className="stats_value">10.0k</span>
            <span className="stats_label">items</span>
          </div>
          <div className="stats">
            <span className="stats_value">3.6k</span>
            <span className="stats_label">members</span>
          </div>
          <MotionButton
            className={"detailMoreBtn2"}
            borderColor={"#D0D5DD"}
            onClick={() => {
              var shareLink = window.location.href;
              if ("clipboard" in navigator) {
                navigator.clipboard.writeText(shareLink.toString());
              } else {
                document.execCommand("copy", false, `${shareLink.toString()}`);
              }
              toastSuccess("Share link is copied", "");
            }}
          >
            <SendIcon width={"16px"} height={"16px"} /> SHARE
          </MotionButton>
        </div>
      </div>
    </CollectiveHeaderWrapper>
  );
}
