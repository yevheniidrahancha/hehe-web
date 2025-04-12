import Image from "next/image";
import DottedUserSvg from "../../../../assets/dotted-user.svg";
import PlusSvg from "../../../../assets/plus.svg";
import EtherumSvg from "../../../../assets/ethereum.svg";

import "./styles.scss";

export type User = {
  name: string;
  avatarUrl: string;
  progress: number;
};

interface CurrentLevelCardProps {
  level: number;
  amount: number;
  users: User[];
}

const baseClassName = "current-level-card";

const CurrentLevelCard = ({ level, amount, users }: CurrentLevelCardProps) => {
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
      <div className={`${baseClassName}__user-list`}>
        {users.map((item) => {
          return (
            <div className={`${baseClassName}__user`} key={item.name}>
              <div
                className="circular-progress"
                style={
                  { "--progress": `${item.progress}%` } as React.CSSProperties
                }
              >
                <img
                  className="circular-progress__avatar"
                  src={item.avatarUrl}
                  alt={item.name}
                />
              </div>
            </div>
          );
        })}
        {users.length < 3 && (
          <button className={`${baseClassName}__add-button`}>
            <Image src={PlusSvg} alt="plus" width={16} height={16} />
          </button>
        )}
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
          <p className={`${baseClassName}__users-amount-number`}>
            {users?.length}
          </p>
        </div>
        <button className={`${baseClassName}__users-amount-button`}>
          Purchased
        </button>
      </div>
    </div>
  );
};

export default CurrentLevelCard;
