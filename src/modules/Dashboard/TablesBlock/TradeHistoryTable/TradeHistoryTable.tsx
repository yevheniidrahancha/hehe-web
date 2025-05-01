import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Box,
  CircularProgress,
} from "@mui/material";

import FilterIcon from "../../../../assets/filter.svg";
import Image from "next/image";
import TableCell from "@/components/TableCell/TableCell";
import TableHeaderCell from "@/components/TableHeaderCell/TableHeaderCell";

import { SortDirection, SortKey } from "@/types/Types";
import { sortTradeHistory } from "@/utils/sortTradeHistory";
import { formatDate } from "@/utils/formatDate";
import CopyIcon from "../../../../assets/copy-green.svg";
import CopyToClipboard from "@/components/CopyToClipboard/CopyToClipboard";
import "./styles.scss";
import { formatScientificNumber } from "@/utils/formatScientificNumber";
import TradeHistoryTableMobile from "./TradeHistoryTableMobile";
import { ExchangeHistory, fetchExchangeHistory } from "@/api/api";
import { shortAddress } from "@/utils/shortAddress";

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

const TradeHistoryTable = () => {
  const [exchangeHistory, setExchangeHistory] = useState<ExchangeHistory[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: SortKey.NONE,
    direction: SortDirection.NONE,
  });

  const [typeSort, setTypeSort] = useState("");

  useEffect(() => {
    const getExchangeHistory = async () => {
      try {
        const response = await fetchExchangeHistory();
        setExchangeHistory(response.result.items);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getExchangeHistory();
  }, []);

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

  const sortedData = sortTradeHistory(exchangeHistory, sortConfig, typeSort);

  if (isLoading) {
    return (
      <div className={baseClassName}>
        <Box
          sx={{ display: "flex", justifyContent: "center", padding: "20px" }}
        >
          <CircularProgress />
        </Box>
      </div>
    );
  }

  return (
    <>
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
                    <Image
                      src={FilterIcon}
                      width={12}
                      height={12}
                      alt="filter"
                    />
                  </TableSortLabel>
                </TableHeaderCell>

                <TableHeaderCell>
                  <TableSortLabel
                    IconComponent={() => null}
                    onClick={toggleTypeSort}
                    sx={sortLabelStyles}
                  >
                    <p className={`${baseClassName}__header-text`}>Type</p>
                    <Image
                      src={FilterIcon}
                      width={12}
                      height={12}
                      alt="filter"
                    />
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
                    <Image
                      src={FilterIcon}
                      width={12}
                      height={12}
                      alt="filter"
                    />
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
                    <Image
                      src={FilterIcon}
                      width={12}
                      height={12}
                      alt="filter"
                    />
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
                    <p className={`${baseClassName}__header-text`}>Price ETH</p>
                    <Image
                      src={FilterIcon}
                      width={12}
                      height={12}
                      alt="filter"
                    />
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
                    <p className={`${baseClassName}__header-text`}>
                      Amount HYPE
                    </p>
                    <Image
                      src={FilterIcon}
                      width={12}
                      height={12}
                      alt="filter"
                    />
                  </TableSortLabel>
                </TableHeaderCell>

                <TableHeaderCell>Marker</TableHeaderCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sortedData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{formatDate(item.timestamp)}</TableCell>
                  <TableCell>
                    <p
                      className={`${baseClassName}__type-${item.type.toLowerCase()}`}
                    >
                      {item.type}
                    </p>
                  </TableCell>
                  <TableCell>
                    <p>${formatScientificNumber(item.price_usd)}</p>
                  </TableCell>
                  <TableCell>
                    <div className={`${baseClassName}__total`}>
                      <p>${item.amount.toLocaleString("en-US")}</p>
                      {/* {getIconByRank(item.rank as Ranks)} */}
                    </div>
                  </TableCell>
                  <TableCell>
                    $ {formatScientificNumber(item.amount_usd)}
                  </TableCell>
                  <TableCell>
                    {item.amount_usd.toLocaleString("en-US")}
                  </TableCell>
                  <TableCell>
                    <div className={`${baseClassName}__marker`}>
                      <p>{shortAddress(item.maker)}</p>
                      <CopyToClipboard
                        imageSrc={CopyIcon}
                        textToCopy={item.maker}
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
      <TradeHistoryTableMobile data={sortedData} />
    </>
  );
};

export default TradeHistoryTable;
