import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";

import FilterIcon from "../../../../assets/filter.svg";
import Image from "next/image";
import TableCell from "@/components/TableCell/TableCell";
import TableHeaderCell from "@/components/TableHeaderCell/TableHeaderCell";
import { getIconByRank } from "@/utils/getIconByRank";
import { Ranks } from "@/types/Ranks";
import { renderFormattedNumber } from "@/utils/formatScientificNumber";
import { SortDirection, SortKey, TradeRow } from "@/types/Types";
import { sortTradeHistory } from "@/utils/sortTradeHistory";
import { formatDate } from "@/utils/formatDate";
import CopyIcon from "../../../../assets/copy-green.svg";
import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import "./styles.scss";

const baseClassName = "trade-history";

enum TypeTransaction {
  SELL = "Sell",
  BUY = "Buy",
}

const sortLabelStyles = {
  "&.Mui-active": {
    color: "inherit",
  },
  "&:hover": {
    backgroundColor: "transparent",
    color: "inherit",
  },
  "&.MuiTableSortLabel-root": {
    color: "inherit",
  },
};

const mockData: TradeRow[] = [
  {
    date: 1713099200000,
    type: "Sell",
    price: 0.0181,
    total: 104.2,
    priceSol: 0.01544,
    amountHype: 1300260900,
    rank: "octopus",
    marker: "8BcUL...wnj7",
  },
  {
    date: 1713098929000,
    type: "Sell",
    price: 0.01828,
    total: 1388.6,
    priceSol: 0.0001542,
    amountHype: 1847120492,
    rank: "Hamster",
    marker: "2h393...jj03",
  },
  {
    date: 1713098770000,
    type: "Buy",

    total: 93.19,
    price: 0.01892,
    priceSol: 0.0153,
    amountHype: 909840194,
    rank: "Fish",
    marker: "c03jc0...ifh8",
  },
  {
    date: 1713099368000,
    type: "Sell",
    price: 0.018,
    total: 39.17,
    priceSol: 0.0151,
    amountHype: 1300260900,
    rank: "kraken",
    marker: "c93nc9...1opp",
  },
];

const TradeHistoryTable = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: SortKey.NONE,
    direction: SortDirection.NONE,
  });

  const [typeSort, setTypeSort] = useState("");

  const handleSort = (key: SortKey) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        const nextDir =
          prev.direction === SortDirection.ASC
            ? SortDirection.DESC
            : prev.direction === SortDirection.DESC
            ? SortDirection.NONE
            : SortDirection.ASC;
        return { key, direction: nextDir };
      } else {
        return { key, direction: SortDirection.ASC };
      }
    });
  };

  const toggleTypeSort = () => {
    setTypeSort((prev) =>
      prev === ""
        ? TypeTransaction.SELL
        : prev === TypeTransaction.SELL
        ? TypeTransaction.BUY
        : ""
    );
  };

  const sortedData = sortTradeHistory(mockData, sortConfig, typeSort);

  return (
    <div className={baseClassName}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.DATE}
                  direction={sortConfig.direction || SortDirection.ASC}
                  onClick={() => handleSort(SortKey.DATE)}
                  IconComponent={() => null}
                  sx={sortLabelStyles}
                >
                  <p className={`${baseClassName}__header-text`}>Date</p>
                  <Image src={FilterIcon} width={12} height={12} alt="filter" />
                </TableSortLabel>
              </TableHeaderCell>

              <TableHeaderCell>
                <TableSortLabel
                  IconComponent={() => null}
                  onClick={toggleTypeSort}
                  sx={sortLabelStyles}
                >
                  <p className={`${baseClassName}__header-text`}>Type</p>
                  <Image src={FilterIcon} width={12} height={12} alt="filter" />
                </TableSortLabel>
              </TableHeaderCell>

              <TableHeaderCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.PRICE}
                  direction={sortConfig.direction || SortDirection.ASC}
                  onClick={() => handleSort(SortKey.PRICE)}
                  IconComponent={() => null}
                  sx={sortLabelStyles}
                >
                  <p className={`${baseClassName}__header-text`}>Price</p>
                  <Image src={FilterIcon} width={12} height={12} alt="filter" />
                </TableSortLabel>
              </TableHeaderCell>

              <TableHeaderCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.TOTAL}
                  direction={sortConfig.direction || SortDirection.ASC}
                  onClick={() => handleSort(SortKey.TOTAL)}
                  IconComponent={() => null}
                  sx={sortLabelStyles}
                >
                  <p className={`${baseClassName}__header-text`}>Total</p>
                  <Image src={FilterIcon} width={12} height={12} alt="filter" />
                </TableSortLabel>
              </TableHeaderCell>

              <TableHeaderCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.PRICESOL}
                  direction={sortConfig.direction || SortDirection.ASC}
                  onClick={() => handleSort(SortKey.PRICESOL)}
                  IconComponent={() => null}
                  sx={sortLabelStyles}
                >
                  <p className={`${baseClassName}__header-text`}>Price SOL</p>
                  <Image src={FilterIcon} width={12} height={12} alt="filter" />
                </TableSortLabel>
              </TableHeaderCell>

              <TableHeaderCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.AMOUNTHYPE}
                  direction={sortConfig.direction || SortDirection.ASC}
                  onClick={() => handleSort(SortKey.AMOUNTHYPE)}
                  IconComponent={() => null}
                  sx={sortLabelStyles}
                >
                  <p className={`${baseClassName}__header-text`}>Amount HYPE</p>
                  <Image src={FilterIcon} width={12} height={12} alt="filter" />
                </TableSortLabel>
              </TableHeaderCell>

              <TableHeaderCell>Marker</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{formatDate(item.date)}</TableCell>
                <TableCell>
                  <p
                    className={`${baseClassName}__type-${item.type.toLowerCase()}`}
                  >
                    {item.type}
                  </p>
                </TableCell>
                <TableCell>
                  <p>${renderFormattedNumber(item.price)}</p>
                </TableCell>
                <TableCell>
                  <div className={`${baseClassName}__total`}>
                    <p>${item.total}</p>
                    {getIconByRank(item.rank as Ranks)}
                  </div>
                </TableCell>
                <TableCell>$ {renderFormattedNumber(item.priceSol)}</TableCell>
                <TableCell>{item.amountHype.toLocaleString("en-US")}</TableCell>
                <TableCell>
                  <div className={`${baseClassName}__marker`}>
                    <p>{item.marker}</p>
                    <CopyToClipboard
                      imageSrc={CopyIcon}
                      textToCopy={item.marker}
                      altText="copy"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TradeHistoryTable;
