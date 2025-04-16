"use client";

import Image from "next/image";
import WaletIcon from "../../../../../assets/wallet-coin-card.svg";

import CustomSelect from "@/components/CustomSelect/CustomSelect";

import "./styles.scss";
import { SelectChangeEvent } from "@mui/material";

const baseClassName = "select-coin-card";

export interface CurrencyOption {
  value: string;
  label: string;
  icon: string;
}

interface SelectCoinCardProps {
  currencies: CurrencyOption[];
  placeholderIcon: string;
  placeholderLabel: string;
  valueCurrency: string;
  onSelect: (e: SelectChangeEvent) => void;
}

const SelectCoinCard = ({
  currencies,
  placeholderIcon,
  placeholderLabel,
  onSelect,
  valueCurrency,
}: SelectCoinCardProps) => {
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__header`}>
        <p className={`${baseClassName}__text`}>From</p>
        <div className={`${baseClassName}__notes-wrapper`}>
          <Image
            className={`${baseClassName}__walet-img`}
            src={WaletIcon}
            alt="Walet"
            width={16}
            height={16}
          />
          <p className={`${baseClassName}__text`}>0</p>
          <span className={`${baseClassName}__note`}>MAX</span>
          <span className={`${baseClassName}__note`}>50%</span>
        </div>
      </div>
      <div className={`${baseClassName}__coin-wrapper`}>
        <div className={`${baseClassName}__coin-select`}>
          <CustomSelect
            options={currencies}
            placeholderIcon={placeholderIcon}
            placeholder={placeholderLabel}
            onChange={onSelect}
            value={valueCurrency}
          />
        </div>
        <div className={`${baseClassName}__coin-value-wrapper`}>
          <p className={`${baseClassName}__coin-value`}>0</p>
          <p className={`${baseClassName}__currency`}>~$0.00</p>
        </div>
      </div>
    </div>
  );
};

export default SelectCoinCard;
