import API from "api/api";
import { useShareArtMemberModal } from "widgets/GalleryModal/useShareArtModal";
import { useWalletModal } from "widgets/WalletModal";
import useActiveWeb3React from "./useActiveWeb3React";
import useAuth from "./useAuth";

export const useMembership = () => {
  const { account } = useActiveWeb3React();
  const { login, logout } = useAuth();
  const { onPresentConnectModal } = useWalletModal(
    login,
    logout,
    account || undefined
  );
  const { onPresentShareArtMemberModal } = useShareArtMemberModal();

  const onAction = (cname, account, callback) => {
    if (account) {
      API.checkMember(cname, account).then((res) => {
        if (res.data.isMember) {
          callback();
        } else {
          onPresentShareArtMemberModal();
        }
      });
    } else {
      onPresentConnectModal();
    }
  };
  return onAction;
};
