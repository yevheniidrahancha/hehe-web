"use client";

import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";
import { ReactNode } from "react";
import { EthereumWalletConnectors } from "@dynamic-labs/ethereum";
import { createConfig, WagmiProvider } from "wagmi";
import { mainnet } from "viem/chains";
import { http } from "viem";

interface AuthorizationProps {
  children: ReactNode;
}

const cssOverrides = `
  .dynamic-widget-inline-controls {
    background-color: transparent;
    display: flex;
    align-items: center;
  }
  .dynamic-widget-wallet-header__wallet-info {
    display: none;
  }
  .account-control__container {
    padding: 0;
  }
  @media (max-width:1024px) {
    .dynamic-widget-inline-controls {
        height: 30px;
      }
  }
`;

const config = createConfig({
  chains: [mainnet],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
  },
});

const Authorization = ({ children }: AuthorizationProps) => {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: "e47a4c79-286f-451a-aac6-95ef6d365414",
        walletConnectors: [EthereumWalletConnectors],
        cssOverrides,
        shadowDOMEnabled: true,
      }}
    >
      <WagmiProvider config={config}>{children}</WagmiProvider>
    </DynamicContextProvider>
  );
};

export default Authorization;
