"use client";

import clsx from "clsx";
import { useState } from "react";
import "./styles.scss";
import BuyLevelWidget from "./BuyLevelWidget/BuyLevelWidget";
import SwapWidget from "./SwapWidget/SwapWidget";
import Button from "@/components/Button/Button";

const baseClassName = "buy-widget";

enum BuyWidgetTabs {
  BUYLEVELS = "Buy Levels",
  SWAP = "Swap",
}

const BuyWidget = () => {
  const [selectedTab, setSelectedTab] = useState<
    BuyWidgetTabs.BUYLEVELS | BuyWidgetTabs.SWAP
  >(BuyWidgetTabs.BUYLEVELS);

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
