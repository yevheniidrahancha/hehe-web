"use client";

import { useState } from "react";
import Image from "next/image";
import EthereumIcon from "../../../../../assets/ethereum.svg";

import "./styles.scss";

import {
  FormControl,
  InputBase,
  MenuItem,
  Select,
  styled,
} from "@mui/material";

const baseClassName = "filters";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 8,
    position: "relative",
    backgroundColor: "#252735",
    fontSize: 16,
    width: "100%",
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

const Filters = () => {
  const [selectLevel, setSelectLevel] = useState("");
  const [selectСurrency, setSelectСurrency] = useState("");

  const handleSelectLevel = (e) => {
    setSelectLevel(e.target.value);
  };

  const handleSelectCurrency = (e) => {
    setSelectСurrency(e.target.value);
  };
  return (
    <div className={`${baseClassName}__dropdowns-wrapper`}>
      <div className={`${baseClassName}__selector-level-wrapper`}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
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
      </div>
      <div className={`${baseClassName}__selector-currency-wrapper`}>
        <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={selectСurrency}
            onChange={handleSelectCurrency}
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
              <div className={`${baseClassName}__item-wrapper`}>
                <Image
                  src={EthereumIcon}
                  alt="Ethereum"
                  width={20}
                  height={20}
                />
                ETH
              </div>
            </MenuItem>
            <MenuItem value={10}>
              <div className={`${baseClassName}__item-wrapper`}>
                <Image
                  src={EthereumIcon}
                  alt="Ethereum"
                  width={20}
                  height={20}
                />
                ETH
              </div>
            </MenuItem>
            <MenuItem value={20}>
              <div className={`${baseClassName}__item-wrapper`}>
                <Image
                  src={EthereumIcon}
                  alt="Ethereum"
                  width={20}
                  height={20}
                />
                ETH
              </div>
            </MenuItem>
            <MenuItem value={30}>
              <div className={`${baseClassName}__item-wrapper`}>
                <Image
                  src={EthereumIcon}
                  alt="Ethereum"
                  width={20}
                  height={20}
                />
                ETH
              </div>
            </MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Filters;
