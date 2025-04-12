import Filters from "./Filters/Filters";
import ArrowOppositeIcon from "../../../../assets/arrows-opposite-direction.svg";
import QuestionarkIcon from "../../../../assets/questionmark.svg";
import "./styles.scss";
import Image from "next/image";

const baseClassName = "buy-level-widget";

const BuyLevelWidget = () => {
  return (
    <div className={baseClassName}>
      <Filters />
      <div className={`${baseClassName}__max-wrapper`}>
        <p className={`${baseClassName}__text`}>800$</p>
        <p className={`${baseClassName}__max-value-wrapper`}>
          0.4 ETH<span className={`${baseClassName}__max`}>MAX</span>
        </p>
      </div>
      <div className={`${baseClassName}__info-wrapper`}>
        <div className={`${baseClassName}__title-wrapper`}>
          <p className={`${baseClassName}__info-title`}>1 ETH = 1487.98 USDT</p>
          <Image
            src={ArrowOppositeIcon}
            alt="ArrowOpposite"
            width={20}
            height={20}
          />
        </div>
        <div className={`${baseClassName}__info-row `}>
          <div className={`${baseClassName}__info-row-title `}>
            <p className={`${baseClassName}__info-text `}>Minimum Received</p>
            <Image
              src={QuestionarkIcon}
              alt="ArrowOpposite"
              width={12}
              height={12}
            />
          </div>
          <div className={`${baseClassName}__info-row-value `}>
            <p className={`${baseClassName}__info-title`}>796,110644</p>
            <p className={`${baseClassName}__info-text `}>USDT</p>
          </div>
        </div>
        <div className={`${baseClassName}__info-row `}>
          <div className={`${baseClassName}__info-row-title `}>
            <p className={`${baseClassName}__info-text `}>Price Impact</p>
            <Image
              src={QuestionarkIcon}
              alt="ArrowOpposite"
              width={12}
              height={12}
            />
          </div>
          <div className={`${baseClassName}__info-row-value `}>
            <p className={`${baseClassName}__info-text `}>0.07%</p>
          </div>
        </div>
        <div className={`${baseClassName}__info-row `}>
          <div className={`${baseClassName}__info-row-title `}>
            <p className={`${baseClassName}__info-text `}>Estimated Fees</p>
            <Image
              src={QuestionarkIcon}
              alt="ArrowOpposite"
              width={12}
              height={12}
            />
          </div>
          <div className={`${baseClassName}__info-row-value `}>
            <p className={`${baseClassName}__info-text `}>0,001333847 SOL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyLevelWidget;
