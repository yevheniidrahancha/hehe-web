"use client";

import clsx from "clsx";

import "./styles.scss";
import BuyLevelWidget from "./BuyLevelWidget/BuyLevelWidget";
import SwapWidget from "./SwapWidget/SwapWidget";
import Button from "@/components/Button/Button";
import { BuyWidgetTabs } from "../Dashbord";

const baseClassName = "buy-widget";

interface BuyWidgetProps {
  selectedTab: BuyWidgetTabs;
  setSelectedTab: React.Dispatch<React.SetStateAction<BuyWidgetTabs>>;
}

const BuyWidget = ({ selectedTab, setSelectedTab }: BuyWidgetProps) => {
  const handleTabChange = (
    tab: BuyWidgetTabs.BUYLEVELS | BuyWidgetTabs.SWAP
  ) => {
    setSelectedTab(tab);
  };
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__tabs-wrapper`}>
        <button
          className={clsx(`${baseClassName}__button-tab`, {
            [`${baseClassName}__button-tab--active`]:
              selectedTab === BuyWidgetTabs.BUYLEVELS,
          })}
          onClick={() => handleTabChange(BuyWidgetTabs.BUYLEVELS)}
        >
          Buy Levels
        </button>
        <button
          className={clsx(`${baseClassName}__button-tab`, {
            [`${baseClassName}__button-tab--active`]:
              selectedTab === BuyWidgetTabs.SWAP,
          })}
          onClick={() => handleTabChange(BuyWidgetTabs.SWAP)}
        >
          Swap
        </button>
      </div>
      {selectedTab === BuyWidgetTabs.BUYLEVELS && <BuyLevelWidget />}
      {selectedTab === BuyWidgetTabs.SWAP && <SwapWidget />}
      <Button className={`${baseClassName}__button-buy-now `}>Buy Now</Button>
    </div>
  );
};

export default BuyWidget;
