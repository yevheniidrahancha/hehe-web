import LevelDetailedInfo from "./LevelDetailedInfo/LevelDetailedInfo";
import LevelsBlock from "./LevelsBlock/LevelsBlock";
import RefferalInfo from "./ReferralInfo/RefferalInfo";

const Dashboard = () => {
  return (
    <div>
      <RefferalInfo />
      <LevelsBlock />
      <LevelDetailedInfo selectedLevel={1} />
    </div>
  );
};

export default Dashboard;
