import React from "react";
import Text from "../../components/Text/Text";
import { localStorageKey } from "./config";
import { WallerCardWrapper } from "./styles";
import { Config, Login } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({
  login,
  walletConfig,
  onDismiss,
  mb,
}) => {
  const { title, icon: Icon } = walletConfig;
  return (
    <WallerCardWrapper
      onClick={() => {
        login(walletConfig.connectorId);
        window.localStorage.setItem(localStorageKey, walletConfig.connectorId);
        onDismiss();
      }}
    >
      <Text bold color="text" fontSize={"16px"}>
        {title}
      </Text>
      <Icon width="32px" />
    </WallerCardWrapper>
  );
};

export default WalletCard;
