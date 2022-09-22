import React from "react";
import { createWeb3ReactRoot, Web3ReactProvider } from "@web3-react/core";
import { getLibrary } from "./utils/web3React";
import { Provider } from "react-redux";
import store from "./state";
import { RefreshContextProvider } from "./contexts/RefreshContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import { ModalProvider } from "./widgets/Modal";

const Web3ProviderNetwork = createWeb3ReactRoot("NETWORK");

const Providers: React.FC = ({ children }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <ThemeContextProvider>
            <RefreshContextProvider>
              <ModalProvider>{children}</ModalProvider>
            </RefreshContextProvider>
          </ThemeContextProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  );
};
export default Providers;
