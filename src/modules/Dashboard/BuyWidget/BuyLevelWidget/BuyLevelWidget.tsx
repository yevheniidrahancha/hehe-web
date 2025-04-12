"use client";

import { useState } from "react";
import Image from "next/image";
import EthereumIcon from "../../../../assets/ethereum.svg";
import ChevronIcon from "../../../../assets/chevron-down.svg";

import "./styles.scss";

import {
  colors,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

const baseClassName = "buy-level-widget";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#252735",
    fontSize: 16,
    width: 360,
    padding: "10px 26px 10px 12px",
    color: "#FFF",
    fontFamily: '"SF Pro Display", sans-serif',
    fontWeight: 500,
    lineHeight: "20px",

    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const BuyLevelWidget = () => {
  const [selectLevel, setSelectLevel] = useState("");
  const [selectСurrency, setSelectСurrency] = useState("");

  const handleSelectLevel = (e) => {
    setSelectLevel(e.target.value);
  };

  const handleSelectCurrency = (e) => {
    setSelectСurrency(e.target.value);
  };
  return (
    <div className={baseClassName}>
      <div className={`${baseClassName}__dropdowns-wrapper`}>
        <FormControl sx={{ m: 1 }} variant="standard">
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={selectLevel}
            onChange={handleSelectLevel}
            input={<BootstrapInput />}
            displayEmpty
            sx={{
              "& .MuiSelect-icon": {
                color: "#FFF",
              },
            }}
          >
            <MenuItem
              sx={{
                fontFamily: '"SF Pro Display", sans-serif',
                fontWeight: 500,
                fontStyle: "unset",
              }}
              value=""
              disabled
            >
              Select Level
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl>
          <InputLabel>Currency</InputLabel>
          <Select
            value={selectСurrency}
            onChange={handleSelectCurrency}
            label="Currency"
            className={`${baseClassName}__dropdown-currency`}
          >
            <MenuItem value="ETH">
              <Image src={EthereumIcon} alt="Ethereum" width={20} height={20} />
              ETH
            </MenuItem>
            <MenuItem value="ETH">
              <Image src={EthereumIcon} alt="Ethereum" width={20} height={20} />
              ETH
            </MenuItem>
            <MenuItem value="ETH">
              <Image src={EthereumIcon} alt="Ethereum" width={20} height={20} />
              ETH
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default BuyLevelWidget;
