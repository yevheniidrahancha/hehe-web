"use client";

import Image from "next/image";
import DottedUserSvg from "../../../../assets/dotted-user.svg";
import EtherumSvg from "../../../../assets/ethereum.svg";
import NextUserSvg from "../../../../assets/user-next.svg";

import "./styles.scss";
import Button from "@/components/Button/Button";

const baseClassName = "next-level-card";

interface NextLevelCardProps {
  level: number;
  amount: number;
}

const NextLevelCard = ({ level, amount }: NextLevelCardProps) => {
  const onClick = () => {
    console.log("click");
  };
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
          <Image src={NextUserSvg} alt="next user" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__user`}>
          <Image src={NextUserSvg} alt="next user" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__user`}>
          <Image src={NextUserSvg} alt="next user" width={16} height={16} />
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
        <Button
          className={`${baseClassName}__users-amount-button`}
          onClick={onClick}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default NextLevelCard;
