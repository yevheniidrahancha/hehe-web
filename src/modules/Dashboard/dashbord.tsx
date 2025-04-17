"use client";

import SelectTokenModal from "@/components/SelectCoinModal/SelectTokenModal";
import BuyWidget from "./BuyWidget/BuyWidget";
import LevelDetailedInfo from "./LevelDetailedInfo/LevelDetailedInfo";
import LevelsBlock from "./LevelsBlock/LevelsBlock";
import RefferalInfo from "./ReferralInfo/RefferalInfo";
import TablesBlock from "./TablesBlock/TablesBlock";
import "./styles.scss";
const baseClassName = "dashbord";

const mockTokens = [
  {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x1",
    icon: "/icons/ethereum.svg",
    balance: "2.35",
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0x2",
    icon: "/icons/usdt.svg",
    balance: "530.12",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0x3",
    icon: "/icons/usdc.svg",
    balance: "120.00",
  },
];

const Dashboard = () => {
  return (
    <div>
      <RefferalInfo />
      <LevelsBlock />
      <div className={`${baseClassName}__content`}>
        <BuyWidget />
        <LevelDetailedInfo selectedLevel={1} />
      </div>
      <TablesBlock />
      <SelectTokenModal
        open={true}
        onClose={() => console.log("modal closed")}
        tokens={mockTokens}
        onSelect={(token) => console.log("Selected token:", token)}
      />
    </div>
  );
};

export default Dashboard;
