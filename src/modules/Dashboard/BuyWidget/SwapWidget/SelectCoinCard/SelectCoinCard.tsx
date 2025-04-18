"use client";

import Image from "next/image";
import WaletIcon from "../../../../../assets/wallet-coin-card.svg";
import ChevronIcon from "../../../../../assets/chevron-down.svg";

import "./styles.scss";

const baseClassName = "select-coin-card";

export interface CurrencyOption {
  value: string;
  label: string;
  icon: string;
}

interface SelectCoinCardProps {
  tokenSymbol: string;
  iconSrc: string;
  onClick: () => void;
  value: string;
  usdValue: string;
}

const SelectCoinCard = ({
  tokenSymbol,
  iconSrc,
  onClick,
  value,
  usdValue,
}: SelectCoinCardProps) => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__header`}>
        <p className={`${baseClassName}__text`}>From</p>
        <div className={`${baseClassName}__notes-wrapper`}>
          <Image
            className={`${baseClassName}__walet-img`}
            src={WaletIcon}
            alt="Wallet"
            width={16}
            height={16}
          />
          <p className={`${baseClassName}__text`}>{value}</p>
          <span className={`${baseClassName}__note`}>MAX</span>
          <span className={`${baseClassName}__note`}>50%</span>
        </div>
      </div>
      <div className={`${baseClassName}__coin-wrapper`}>
        <div className={`${baseClassName}__coin-select`}>
          <button onClick={onClick}>
            <div className={`${baseClassName}__token-button-content`}>
              <div className={`${baseClassName}__token-button`}>
                <Image
                  src={iconSrc}
                  alt="Token"
                  width={24}
                  height={24}
                  style={{ marginRight: "8px" }}
                />
                <p className={`${baseClassName}__token-button-text`}>
                  {tokenSymbol}
                </p>
              </div>

              <Image src={ChevronIcon} alt="Select" width={16} height={16} />
            </div>
          </button>
        </div>
        <div className={`${baseClassName}__coin-value-wrapper`}>
          <p className={`${baseClassName}__coin-value`}>{value}</p>
          <p className={`${baseClassName}__currency`}>~${usdValue}</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCoinCard;
