import React from "react";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";
import { Login } from "./types";
import { ConnectModalWrapper } from "./styles";

interface Props {
  login: Login;
  onDismiss?: () => void;
}

const ConnectModal: React.FC<Props> = ({ login, onDismiss = () => null }) => (
  <Modal
    title=""
    onDismiss={onDismiss}
    width={"384px"}
    bodyPadding={"32px 60px"}
  >
    <ConnectModalWrapper>
      <div className={"title"}>Select a wallet</div>
      <div className={"description"}>
        By connecting your wallet, you agree to our Terms of Service and our{" "}
        <br />
        Privacy Policy.
      </div>
      <div className={"walletList"}>
        {config.map((entry, index) => (
          <WalletCard
            key={entry.title}
            login={login}
            walletConfig={entry}
            onDismiss={onDismiss}
            mb={index < config.length - 1 ? "18px" : "0"}
          />
        ))}
      </div>
      <div className={"newCrypto"}>New to Crypto?</div>
      <a
        className={"learnWallet"}
        href={"https://metamask.io/"}
        target={"_blank"}
        rel={"noreferrer"}
      >
        Learn about wallets
      </a>
    </ConnectModalWrapper>
  </Modal>
);

ConnectModal.defaultProps = {
  onDismiss: () => null,
};

export default ConnectModal;
