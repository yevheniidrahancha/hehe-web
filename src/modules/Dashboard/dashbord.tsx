import BuyWidget from "./BuyWidget/BuyWidget";
import LevelDetailedInfo from "./LevelDetailedInfo/LevelDetailedInfo";
import LevelsBlock from "./LevelsBlock/LevelsBlock";
import RefferalInfo from "./ReferralInfo/RefferalInfo";
import TablesBlock from "./TablesBlock/TablesBlock";
import "./styles.scss";
const baseClassName = "dashbord";

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
    </div>
  );
};

export default Dashboard;
