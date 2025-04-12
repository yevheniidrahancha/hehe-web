import BuyWidget from "./BuyWidget/BuyWidget";
import LevelsBlock from "./LevelsBlock/LevelsBlock";
import RefferalInfo from "./ReferralInfo/RefferalInfo";

const Dashboard = () => {
  return (
    <div>
      <RefferalInfo />
      <LevelsBlock />
      <BuyWidget />
    </div>
  );
};

export default Dashboard;
