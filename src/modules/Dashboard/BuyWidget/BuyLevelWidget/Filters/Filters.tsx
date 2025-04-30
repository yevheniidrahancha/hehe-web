"use client";

import { SetStateAction, useState } from "react";

import EthereumIcon from "../../../../../assets/ethereum.svg";

import CustomSelect from "@/components/CustomSelect/CustomSelect";
import "./styles.scss";

const baseClassName = "filters";

const mockСurrency = [
  {
    value: "ETH",
    label: "ETH",
    icon: EthereumIcon,
  },
  {
    value: "ETH",
    label: "ETH",
    icon: EthereumIcon,
  },
  {
    value: "ETH",
    label: "ETH",
    icon: EthereumIcon,
  },
];

const mockLevel = [
  {
    value: "1 LEVEL",
    label: "1 LEVEL",
  },
  {
    value: "2 LEVEL",
    label: "2 LEVEL",
  },
  {
    value: "3 LEVEL",
    label: "3 LEVEL",
  },
];

const Filters = () => {
  const [selectLevel, setSelectLevel] = useState("");
  const [selectСurrency, setSelectСurrency] = useState("");

  const handleSelectLevel = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectLevel(e.target.value);
  };

  const handleSelectCurrency = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectСurrency(e.target.value);
  };
  return (
    <div className={`${baseClassName}__dropdowns-wrapper`}>
      <div className={`${baseClassName}__selector-level-wrapper`}>
        <CustomSelect
          onChange={handleSelectLevel}
          placeholder="LEVEL"
          value={selectLevel}
          options={mockLevel}
        />
      </div>
      <div className={`${baseClassName}__selector-currency-wrapper`}>
        <CustomSelect
          onChange={handleSelectCurrency}
          placeholderIcon={EthereumIcon}
          placeholder="ETH"
          value={selectСurrency}
          options={mockСurrency}
        />
      </div>
    </div>
  );
};

export default Filters;
