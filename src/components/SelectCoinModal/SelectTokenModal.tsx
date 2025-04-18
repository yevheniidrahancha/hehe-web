"use client";

import "./styles.scss";
import Modal from "../Modal/Modal";
import SearchIcon from "../../assets/search.svg";
import EthereumIcon from "../../assets/ethereum.svg";
import TetherIcon from "../../assets/tether.svg";
import SolanaIcon from "../../assets/solana.svg";
import BitcoinIcon from "../../assets/bitcoin.svg";
import DogeIcon from "../../assets/doge.svg";

import BaseInput from "../BaseInput/BaseInput";
import { useState } from "react";
import Image from "next/image";
import TokenBalanceCard from "./TokenBalanceCard/TokenBalanceCard";
import Button from "../Button/Button";

const baseClassName = "select-token-modal";

const mockTokenBalanceCards = [
  {
    toketIcon: TetherIcon,
    tokenName: "USDT",
    tokenValue: 1500,
    tokenLink: "6p6xgH...jfGoMN",
  },
  {
    toketIcon: EthereumIcon,
    tokenName: "ETH",
    tokenValue: 1.245,
    tokenLink: "28cjeCJ...jfGoMN",
  },
];

const mockPopularsTokens = [
  {
    name: "USDT",
    icon: TetherIcon,
  },
  {
    name: "SOL",
    icon: SolanaIcon,
  },
  {
    name: "ETH",
    icon: EthereumIcon,
  },
  {
    name: "BTC",
    icon: BitcoinIcon,
  },
  {
    name: "DOGE",
    icon: DogeIcon,
  },
];

interface Token {
  name: string;
}

interface SelectTokenModalProps {
  open: boolean;
  onClose: () => void;
  tokens: Token[];
}

const SelectTokenModal = ({ open, onClose, tokens }: SelectTokenModalProps) => {
  const [search, setSearch] = useState("");
  const filteredTokens = tokens.filter((token) =>
    `${token.name} ${token.symbol}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal title="Select a token" open={open} onClose={onClose}>
      <div className={`${baseClassName}`}>
        <BaseInput
          iconSrc={SearchIcon}
          placeholder="Search by token or paste address"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={`${baseClassName}__popular-tokens-wrapper`}>
          <p className={`${baseClassName}__popular-tokens-title`}>
            Popular tokens
          </p>
          <div className={`${baseClassName}__popular-tokens`}>
            {mockPopularsTokens.map((token, index) => (
              <div key={index} className={`${baseClassName}__popular-token`}>
                <Image
                  src={token.icon.src}
                  alt={token.name}
                  width={16}
                  height={16}
                  style={{ marginRight: "8px " }}
                />
                <p className={`${baseClassName}__popular-token-name`}>
                  {token.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className={`${baseClassName}__tokens-balance-wrapper`}>
          <div className={`${baseClassName}__tokens-balance-title-wrapper`}>
            <p className={`${baseClassName}__tokens-balance-title`}>Token</p>
            <p className={`${baseClassName}__tokens-balance-title`}>
              Balance & Address
            </p>
          </div>
          <div className={`${baseClassName}__tokens-balance-cards-wrapper`}>
            {mockTokenBalanceCards.map((token, index) => (
              <TokenBalanceCard
                key={index}
                toketIcon={token.toketIcon}
                tokenLink={token.tokenLink}
                tokenName={token.tokenName}
                tokenValue={token.tokenValue}
              />
            ))}
          </div>
        </div>
        <div className={`${baseClassName}__info`}>
          <p className={`${baseClassName}__info-text`}>
            Can’t find the token you’re looking for?{" "}
          </p>
          <p className={`${baseClassName}__info-text`}>
            Try entering the mint address or check token list settings below.
          </p>
        </div>

        <Button className={`${baseClassName}__button`}>View Token List</Button>
      </div>
    </Modal>
  );
};

export default SelectTokenModal;
