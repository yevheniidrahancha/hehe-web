"use client";

import { useState } from "react";
import BuyWidget from "./BuyWidget/BuyWidget";
import LevelChartWidget from "./LevelChartSwitcher/LevelChartSwitcher";

import LevelsBlock from "./LevelsBlock/LevelsBlock";
import RefferalInfo from "./ReferralInfo/RefferalInfo";
import TablesBlock from "./TablesBlock/TablesBlock";
import "./styles.scss";
import { BuyWidgetTabs } from "@/types/Types";
const baseClassName = "dashbord";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState<
    BuyWidgetTabs.BUYLEVELS | BuyWidgetTabs.SWAP
  >(BuyWidgetTabs.BUYLEVELS);
  return (
    <div>
      <RefferalInfo />
      <LevelsBlock />
      <div className={`${baseClassName}__content`}>
        <BuyWidget setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
        <LevelChartWidget selectedTab={selectedTab} />
      </div>
      <TablesBlock />
    </div>
  );
};

export default Dashboard;
