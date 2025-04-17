"use client";

import { useState } from "react";
import Image from "next/image";

import "./styles.scss";
import Modal from "../Modal/Modal";
import { Input } from "@mui/material";

const baseClassName = "select-token-modal";

interface Token {
  name: string;
  symbol: string;
  address: string;
  icon: string;
  balance: string;
}

interface SelectTokenModalProps {
  open: boolean;
  onClose: () => void;
  tokens: Token[];
  onSelect: (token: Token) => void;
}

const SelectTokenModal = ({
  open,
  onClose,
  tokens,
  onSelect,
}: SelectTokenModalProps) => {
  const [search, setSearch] = useState("");

  const filteredTokens = tokens.filter((token) =>
    `${token.name} ${token.symbol}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal title="Select a token" open={open} onClose={onClose}>
      <div className={`${baseClassName}__content`}>
        <Input
          className={`${baseClassName}__input`}
          placeholder="Search by token or paste address"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className={`${baseClassName}__list`}>
          {filteredTokens.map((token) => (
            <div
              key={token.address}
              className={`${baseClassName}__item`}
              onClick={() => onSelect(token)}
            >
              <Image
                src={token.icon}
                alt={token.symbol}
                width={24}
                height={24}
              />
              <div className={`${baseClassName}__info`}>
                <span className={`${baseClassName}__symbol`}>
                  {token.symbol}
                </span>
                <span className={`${baseClassName}__name`}>{token.name}</span>
              </div>
              <span className={`${baseClassName}__balance`}>
                {token.balance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default SelectTokenModal;
