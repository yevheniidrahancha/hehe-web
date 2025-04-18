"use client";

import Tabs, { Tab } from "@/components/Tabs/Tabs";
import { SyntheticEvent, useState } from "react";

import HoldersTable from "./HoldersTable/HoldersTable";
import TradeHistoryTable from "./TradeHistoryTable/TradeHistoryTable";
import LeaderboardTable from "./LeaderboardTable/LeaderboardTable";
import HypactivityTable from "./HypactivityTable/HypactivityTable";

import "./styles.scss";
import clsx from "clsx";

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
      <div className={`${baseClassName}__mobile-content`}>
        <div className={`${baseClassName}__mobile-tabs`}>
          {tabs.map((item) => (
            <button
              className={clsx(`${baseClassName}__mobile-tab`, {
                [`${baseClassName}__mobile-tab--active`]:
                  item.value === selectedTabValue,
              })}
              onClick={() => setSelectedTabValue(item.value as TabsValue)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
      <div className={`${baseClassName}__tabs-wrapper`}>
        <Tabs
          tabs={tabs}
          value={selectedTabValue}
          onChange={onChangeSelectedTabValue}
        />
      </div>
      <div className={`${baseClassName}__content`}>
        {selectedTabValue === TabsValue.TRADE_HISTORY && <TradeHistoryTable />}
        {selectedTabValue === TabsValue.HOLDERS && <HoldersTable />}
        {selectedTabValue === TabsValue.HYPACTIVITY && <HypactivityTable />}
        {selectedTabValue === TabsValue.LEADERBOARD && <LeaderboardTable />}
      </div>
    </div>
  );
};

export default TablesBlock;
