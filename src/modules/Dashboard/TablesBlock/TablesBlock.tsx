"use client";

import Tabs, { Tab } from "@/components/Tabs/Tabs";
import { SyntheticEvent, useState } from "react";
import "./styles.scss";

const baseClassName = "tables-block";

enum TabsValue {
  TRADE_HISTORY = "TRADE_HISTORY",
  HOLDERS = "HOLDERS",
  HYPACTIVITY = "HYPACTIVITY",
  LEADERBOARD = "LEADERBOARD",
}

const tabs: Tab[] = [
  { label: "Trade History", value: TabsValue.TRADE_HISTORY },
  { label: "Holders", value: TabsValue.HOLDERS },
  { label: "Hypactivity", value: TabsValue.HYPACTIVITY },
  { label: "Leaderboard", value: TabsValue.LEADERBOARD },
];

const TablesBlock = () => {
  const [selectedTabValue, setSelectedTabValue] = useState<TabsValue>(
    TabsValue.TRADE_HISTORY
  );

  const onChangeSelectedTabValue = (_: SyntheticEvent, newValue: string) => {
    setSelectedTabValue(newValue as TabsValue);
  };

  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__tabs-wrapper`}>
        <Tabs
          tabs={tabs}
          value={selectedTabValue}
          onChange={onChangeSelectedTabValue}
        />
      </div>
    </div>
  );
};

export default TablesBlock;
