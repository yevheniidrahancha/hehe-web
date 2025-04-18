"use client";

import React from "react";
import { Input, SxProps } from "@mui/material";
import Image from "next/image";

interface BaseInputProps {
  placeholder: string;
  iconSrc?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputSx: SxProps = {
  backgroundColor: "#2A2D3D",
  borderRadius: "8px",
  padding: "8px 12px",
  color: "#fff",
  fontSize: "16px",
  width: "100%",
  "&:focus-within": {
    borderColor: "unset",
  },
  "& input": {
    padding: 0,
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#6D6F81",
  },
};

const BaseInput = ({ placeholder, iconSrc, onChange }: BaseInputProps) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      disableUnderline
      startAdornment={
        iconSrc && (
          <Image
            src={iconSrc}
            alt="icon"
            width={16}
            height={16}
            style={{ marginRight: "8px" }}
          />
        )
      }
      sx={inputSx}
    />
  );
};

export default BaseInput;
