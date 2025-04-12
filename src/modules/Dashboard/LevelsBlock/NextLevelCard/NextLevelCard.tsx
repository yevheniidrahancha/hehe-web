import Image from "next/image";
import DottedUserSvg from "../../../../assets/dotted-user.svg";
import "./styles.scss";

const baseClassName = "next-level-card";

interface NextLevelCardProps {
  level: number;
  amount: number;
}

const NextLevelCard = ({ level, amount }: NextLevelCardProps) => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__title`}>
        <p className={`${baseClassName}__level`}>Level {level}</p>
        <div className={`${baseClassName}__purchased-amount`}>
          Img
          <p className={`${baseClassName}__purchased-amount-number`}>
            {amount}
          </p>
        </div>
      </div>
      <div className={`${baseClassName}__users`}>
        <div className={`${baseClassName}__user`}>
          <Image src={DottedUserSvg} alt="dotted user" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__user`}>
          <Image src={DottedUserSvg} alt="dotted user" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__user`}>
          <Image src={DottedUserSvg} alt="dotted user" width={16} height={16} />
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
        <button className={`${baseClassName}__users-amount-button`}>
          Purchased
        </button>
      </div>
    </div>
  );
};

export default NextLevelCard;
