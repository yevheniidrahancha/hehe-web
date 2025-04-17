import { BuyWidgetTabs } from "@/types/Types";
import LevelDetailedInfo from "../LevelDetailedInfo/LevelDetailedInfo";
import Chart from "./Chart/Chart";

const baseClassName = "level-chart";

const LevelChartWidget = ({ selectedTab }: { selectedTab: BuyWidgetTabs }) => {
  return (
    <div className={baseClassName}>
      {selectedTab === BuyWidgetTabs.BUYLEVELS && (
        <LevelDetailedInfo selectedLevel={1} />
      )}
      {selectedTab === BuyWidgetTabs.SWAP && <Chart />}
    </div>
  );
};

export default LevelChartWidget;
