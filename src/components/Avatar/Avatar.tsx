import cn from "classnames";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { State } from "state/types";
import defaultIcon2 from "../../assets/svg/header2.svg";
import { Login } from "../../widgets/WalletModal";
import { LogoutIcon, SettingIcon } from "../Svg";
import { AvatarWrapper } from "./styles";

interface AvatarProps {
  account: string;
  login: Login;
  logout: () => void;
}

const Avatar: React.FC<AvatarProps> = ({ account, login, logout }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const profileData = useSelector((state: State) => state.profile.data);

  const handleClickOutside = (event: Event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  return (
    <AvatarWrapper>
      <div className="edit_navbar">
        <div className="header2">
          <img
            src={profileData?.avatar ?? defaultIcon2}
            alt={"profile"}
            className={"profileIcon2"}
            onClick={() => setOpen(!open)}
          />
        </div>
        <div
          ref={dropdownRef}
          className={cn("dropdownMenu", {
            show: open,
          })}
        >
          <div className={"menuHeader"}>
            <img
              src={profileData?.avatar ?? defaultIcon2}
              alt={"profile"}
              className={"profileIcon2"}
            />
            <span>Profile</span>
          </div>
          {/* <div className={'balanceView'}>
						<div className={'balanceHeader'}>
							<span>Balance</span>
							<span className={'walletAddress'}>{formatBlockchainAddress(account, 4, 4)} <span
								className={'ellipse'} /> </span>
						</div>
						<div className={'balanceValue'}>0.0124 ETH</div>
					</div> */}
          <div
            className={"dropDownItem"}
            onClick={() =>
              navigate(
                profileData
                  ? `/member/${profileData.username}`
                  : "/profile/supporter"
              )
            }
          >
            <SettingIcon /> <span>Settings</span>
          </div>
          {/* <div className={'dropDownItem'}>
						<QuestionIcon fill={'#475467'} /> <span>Investing guide</span>
					</div> */}
          <div className={"dropDownItem"} onClick={logout}>
            <LogoutIcon /> <span>Disconnect</span>
          </div>
        </div>
      </div>
    </AvatarWrapper>
  );
};

export default Avatar;
