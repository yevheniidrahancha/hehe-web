import Image from "next/image";
import EthereumIcon from "../../../../assets/ethereum.svg";

import "./styles.scss";
import Button from "@/components/Button/Button";

const baseClassName = "reward";

const Reward = () => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__claim-reward-wrapper`}>
        <div className={`${baseClassName}__claim-reward-value-wrapper`}>
          <Image
            className={`${baseClassName}__claim-reward-img`}
            src={EthereumIcon}
            width={24}
            height={24}
            alt="Ethereum"
          />
          <p className={`${baseClassName}__claim-reward-value-small`}>$0.00</p>
        </div>
        <Button className={`${baseClassName}__claim-reward-button`}>
          Claim Reward
        </Button>
      </div>
      <div className={`${baseClassName}__claim-reward-total`}>
        <p className={`${baseClassName}__claim-reward-text`}>Total yield</p>
        <p className={`${baseClassName}__claim-reward-value-large`}>$0.00</p>
        <p className={`${baseClassName}__claim-reward-text`}>
          Expected yield: $0,00000
        </p>
      </div>
    </div>
  );
};

export default Reward;
