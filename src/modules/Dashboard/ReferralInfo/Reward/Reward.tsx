import Image from "next/image";
import EthereumIcon from "../../../../assets/ethereum.svg";

import "./styles.scss";
import Button from "@/components/Button/Button";

const baseClassName = "reward";

const Reward = () => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__claimRewardWrapper`}>
        <div className={`${baseClassName}__claimRewardValueWrapper`}>
          <Image
            className={`${baseClassName}__claimRewardImg`}
            src={EthereumIcon}
            width={24}
            height={24}
            alt="Ethereum"
          />
          <p className={`${baseClassName}__claimRewardValueSmall`}>$0.00</p>
        </div>
        <Button className={`${baseClassName}__claimRewardButton`}>
          Claim Reward
        </Button>
      </div>
      <div className={`${baseClassName}__claimRewardTotal`}>
        <p className={`${baseClassName}__claimRewardText`}>Total yield</p>
        <p className={`${baseClassName}__claimRewardValueLarge`}>$0.00</p>
        <p className={`${baseClassName}__claimRewardText`}>
          Expected yield: $0,00000
        </p>
      </div>
    </div>
  );
};

export default Reward;
