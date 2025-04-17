"use client";

import React from "react";
import Image from "next/image";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  InputBase,
  styled,
} from "@mui/material";

import "./styles.scss";

const baseClassName = "custom-select";

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

interface Option {
  value: string | number;
  label: string;
  icon?: string;
}

interface CustomSelectProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
  options: Option[];
  placeholder?: string;
  placeholderIcon?: string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  onChange,
  options,
  placeholder = "Select",
  placeholderIcon,
}) => {
  return (
    <FormControl sx={{ width: "100%" }} variant="standard">
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={value}
        onChange={onChange}
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
            {placeholderIcon && (
              <Image
                src={placeholderIcon}
                alt="placeholder"
                width={20}
                height={20}
              />
            )}
            {placeholder}
          </div>
        </MenuItem>
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            <div className={`${baseClassName}__item-wrapper`}>
              {option.icon && (
                <Image
                  src={option.icon}
                  alt={option.label}
                  width={20}
                  height={20}
                />
              )}
              {option.label}
            </div>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
