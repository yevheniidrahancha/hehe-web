"use client";

import { useState } from "react";
import Image from "next/image";

import SelectCoinCard from "./SelectCoinCard/SelectCoinCard";
import SelectTokenModal from "@/components/SelectCoinModal/SelectTokenModal";

import EthereumIcon from "../../../../assets/ethereum.svg";
import SolonaIcon from "../../../../assets/solana.svg";
import RateIcon from "../../../../assets/rate.svg";
import TimerIcon from "../../../../assets/timer.svg";
import ChevronDownIcon from "../../../../assets/chevron-green.svg";

import "./styles.scss";

const baseClassName = "swap-widget";

const mockTokens = [
  {
    name: "Ethereum",
    symbol: "ETH",
    address: "0x1",
    icon: "/icons/ethereum.svg",
    balance: "2.35",
  },
  {
    name: "Tether USD",
    symbol: "USDT",
    address: "0x2",
    icon: "/icons/usdt.svg",
    balance: "530.12",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    address: "0x3",
    icon: "/icons/usdc.svg",
    balance: "120.00",
  },
];

const SwapWidget = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className={baseClassName}>
      <SelectCoinCard
        tokenSymbol="ETH"
        iconSrc={EthereumIcon}
        onClick={handleOpenModal}
        value="0"
        usdValue="0.00"
      />
      <SelectCoinCard
        tokenSymbol="SOL"
        iconSrc={SolonaIcon}
        onClick={handleOpenModal}
        value="0"
        usdValue="0.00"
      />

      <div className={`${baseClassName}__exchange-rate-wrapper`}>
        <div className={`${baseClassName}__exchange-rate`}>
          <p className={`${baseClassName}__rate`}>1 ETH ≈ 1487.98 SOL</p>
          <Image src={RateIcon} alt="Rate" width={16} height={16} />
        </div>
        <div className={`${baseClassName}__info`}>
          <div className={`${baseClassName}__more-wrapper`}>
            <p className={`${baseClassName}__more`}>More</p>
            <Image
              style={{ cursor: "pointer" }}
              src={ChevronDownIcon}
              width={16}
              height={16}
              alt="Chevron Down"
            />
          </div>
          <Image src={TimerIcon} width={16} height={16} alt="timer" />
        </div>
      </div>

      <SelectTokenModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tokens={mockTokens}
      />
    </div>
  );
};

export default SwapWidget;
