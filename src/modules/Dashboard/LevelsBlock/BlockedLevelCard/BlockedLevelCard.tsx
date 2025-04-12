import Image from "next/image";
import EtherumSvg from "../../../../assets/ethereum.svg";
import LockSvg from "../../../../assets/lock.svg";
import DottedUserSvg from "../../../../assets/dotted-user.svg";
import "./styles.scss";

const baseClassName = "blocked-level-card";

interface BlockedLevelCardProps {
  level: number;
  amount: number;
}

const BlockedLevelCard = ({ level, amount }: BlockedLevelCardProps) => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__title`}>
        <p className={`${baseClassName}__level`}>Level {level}</p>
        <div className={`${baseClassName}__purchased-amount`}>
          <Image src={EtherumSvg} width={20} height={20} alt="etherum" />
          <p className={`${baseClassName}__purchased-amount-number`}>
            {amount}
          </p>
        </div>
      </div>
      <div className={`${baseClassName}__users`}>
        <div className={`${baseClassName}__user`}>
          <Image src={LockSvg} alt="dotted user" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__user`}>
          <Image src={LockSvg} alt="dotted user" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__user`}>
          <Image src={LockSvg} alt="dotted user" width={16} height={16} />
        </div>
      </div>
      <div className={`${baseClassName}__footer`}>
        <div className={`${baseClassName}__users-amount`}>
          <Image
            className={`${baseClassName}__users-amount-image`}
            src={DottedUserSvg}
            alt="dotted user"
            width={16}
            height={16}
          />
          <p className={`${baseClassName}__users-amount-number`}>3</p>
        </div>
        <div className={`${baseClassName}__users-amount-button`}>Block</div>
      </div>
    </div>
  );
};

export default BlockedLevelCard;
