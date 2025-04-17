import SelectCoinCard from "./SelectCoinCard/SelectCoinCard";
import "./styles.scss";
import EthereumIcon from "../../../../assets/ethereum.svg";
import SolonaIcon from "../../../../assets/solana.svg";
import RateIcon from "../../../../assets/rate.svg";
import TimerIcon from "../../../../assets/timer.svg";
import ChevronDownIcon from "../../../../assets/chevron-green.svg";
import { useState } from "react";
import Image from "next/image";

const baseClassName = "swap-widget";

const mockСEthCoin = [
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

const mockСSolCoin = [
  {
    value: "SOL",
    label: "SOL",
    icon: SolonaIcon,
  },
  {
    value: "SOL",
    label: "SOL",
    icon: SolonaIcon,
  },
  {
    value: "SOL",
    label: "SOL",
    icon: SolonaIcon,
  },
];

const SwapWidget = () => {
  const [selectSourceCurrency, setSelectSourceCurrency] = useState("");
  const [selectTargetCurrency, setSelectTargetCurrency] = useState("");

  const handleSelectSourceCurrency = (e) => {
    setSelectSourceCurrency(e.target.value);
  };

  const handleSelectTargetCurrency = (e) => {
    setSelectTargetCurrency(e.target.value);
  };

  return (
    <div className={baseClassName}>
      <SelectCoinCard
        currencies={mockСEthCoin}
        placeholderIcon={EthereumIcon}
        placeholderLabel="ETH"
        onSelect={handleSelectSourceCurrency}
        valueCurrency={selectSourceCurrency}
      />
      <SelectCoinCard
        currencies={mockСSolCoin}
        placeholderIcon={SolonaIcon}
        placeholderLabel="SOL"
        valueCurrency={selectTargetCurrency}
        onSelect={handleSelectTargetCurrency}
      />
      <div className={`${baseClassName}__exchange-rate-wrapper`}>
        <div className={`${baseClassName}__exchange-rate`}>
          <p className={`${baseClassName}__rate`}>1 ETH ≈ 1487.98 SOL</p>
          <Image src={RateIcon} alt="Rate" width={16} height={16} />
        </div>
        <div>
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
      </div>
    </div>
  );
};

export default SwapWidget;
