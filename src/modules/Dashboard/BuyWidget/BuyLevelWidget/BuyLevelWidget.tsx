"use client";

import { useState } from "react";
import "./styles.scss";

const baseClassName = "buy-level-widget";

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
        <select
          value={selectLevel}
          onChange={handleSelectLevel}
          className={`${baseClassName}__dropdowns-wrapper`}
        >
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <select
          value={selectСurrency}
          onChange={handleSelectCurrency}
          style={{
            padding: "5px 8px",
            border: "1px solid #b0b4c6",
            borderRadius: "4px",
            fontSize: "14px",
            width: "200px",
          }}
        >
          <option value="">Select an image option</option>
          <option value="image1">
            <img
              src="https://via.placeholder.com/20"
              alt="icon1"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Image 1
          </option>
          <option value="image2">
            <img
              src="https://via.placeholder.com/20"
              alt="icon2"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Image 2
          </option>
          <option value="image3">
            <img
              src="https://via.placeholder.com/20"
              alt="icon3"
              style={{ width: "20px", marginRight: "10px" }}
            />
            Image 3
          </option>
        </select>
      </div>
    </div>
  );
};

export default BuyLevelWidget;
