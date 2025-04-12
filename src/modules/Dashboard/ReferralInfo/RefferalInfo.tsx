import ReferralLink from "./ReferralLink/ReferralLink";
import Reward from "./Reward/Reward";
import Statistics from "./Statistics/Statistics";

import "./styles.scss";

const baseClassName = "refferalInfo";

const RefferalInfo = () => {
  return (
    <div className={baseClassName}>
      <ReferralLink />
      <Reward />
      <Statistics />
    </div>
  );
};

export default RefferalInfo;
