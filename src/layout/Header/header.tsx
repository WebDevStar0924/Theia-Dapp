import { Link, useLocation } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import { MotionButton } from "../../components/MotionButton/styles";
import Logo from "../../components/Svg/Icons/Logo";
import LogoBlack from "../../components/Svg/Icons/LogoBlack";
import useActiveWeb3React from "../../hooks/useActiveWeb3React";
import useAuth from "../../hooks/useAuth";
import { hoverTxtBoxShadow } from "../../utils/Animations";
import { useWalletModal } from "../../widgets/WalletModal";
import { HeaderLeftWrapper, HeaderWrapper } from "./styles";

export default function Header() {
  const { account } = useActiveWeb3React();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined
  );
  const location = useLocation();

  return (
    <HeaderWrapper bgColor={location.pathname === "/mint" ? "#101828" : "#fff"}>
      <div className={"headerContent"}>
        <HeaderLeftWrapper>
          <Link to={"/"}>
            {location.pathname === "/mint" ? (
              <Logo width={135} />
            ) : (
              <LogoBlack width={135} />
            )}
          </Link>
        </HeaderLeftWrapper>
        <HeaderLeftWrapper>
          {account ? (
            <Avatar account={account} login={login} logout={logout} />
          ) : (
            <MotionButton
              whileHover={hoverTxtBoxShadow}
              onClick={onPresentConnectModal}
              className={"connectWalletBtn"}
            >
              Connect Wallet
            </MotionButton>
          )}
        </HeaderLeftWrapper>
      </div>
    </HeaderWrapper>
  );
}
