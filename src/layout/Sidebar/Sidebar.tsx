import { useNavigate } from "react-router-dom";
import { DiscordIcon, HomeIcon, TwitterIcon } from "../../components/Svg";
import { SidebarWrapper } from "./styles";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <SidebarWrapper>
      <div className={"menuList"}>
        <div className={"menuItem"} onClick={() => navigate("/")}>
          <HomeIcon stroke={"#667085"} width={"22px"} />
        </div>
        {/* <div className={'menuItem disabled'}><MarketIcon stroke="#98A2B3" width={'28px'}/></div>
				<div className={'menuItem disabled'}><BookIcon stroke="#98A2B3" width={'20px'}/></div> */}
      </div>
      <div className={"socialList"}>
        <div className={"socialItem"}>
          <TwitterIcon width={"15px"} fill={"#667085"} />
        </div>
        <div className={"socialItem"}>
          <DiscordIcon width={"15px"} fill={"#667085"} />
        </div>
      </div>
    </SidebarWrapper>
  );
}
