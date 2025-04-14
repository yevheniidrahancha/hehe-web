import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  IconButton,
  Stack,
} from "@mui/material";

const baseClass = "trade-histori";

enum TradeType {
  Buy = "Buy",
  Sell = "Sell",
}

enum SortKey {
  Price = "price",
  Total = "total",
  PriceSol = "priceSol",
  AmountHype = "amountHype",
  None = "",
}

enum SortDirection {
  Asc = "asc",
  Desc = "desc",
  None = "",
}

type TradeRow = {
  date: string;
  type: TradeType;
  price: number;
  total: number;
  priceSol: number;
  amountHype: number;
  marker: string;
};

const mockData: TradeRow[] = [
  {
    date: "2025-04-04T12:13:20",
    type: TradeType.Sell,
    price: 0.01892,
    total: 1388.6,
    priceSol: 0.01544,
    amountHype: 1300260900,
    marker: "8BcUL...wnj7",
  },
  {
    date: "2025-04-04T12:08:49",
    type: TradeType.Sell,
    price: 0.01828,
    total: 104.2,
    priceSol: 0.01542,
    amountHype: 1847120492,
    marker: "2h393...jj03",
  },
  {
    date: "2025-04-04T12:06:10",
    type: TradeType.Buy,
    price: 0.0181,
    total: 93.19,
    priceSol: 0.0153,
    amountHype: 909840194,
    marker: "c03jc0...ifh8",
  },
  {
    date: "2025-04-04T12:16:08",
    type: TradeType.Sell,
    price: 0.018,
    total: 39.17,
    priceSol: 0.0151,
    amountHype: 1300260900,
    marker: "c93nc9...1opp",
  },
];

const TableTradeHistory = () => {
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: SortKey.None,
    direction: SortDirection.None,
  });

  const [filterType, setFilterType] = useState<"" | TradeType>("");

  const handleSort = (key: SortKey) => {
    setSortConfig((prev) => {
      if (prev.key === key) {
        const nextDir =
          prev.direction === SortDirection.Asc
            ? SortDirection.Desc
            : prev.direction === SortDirection.Desc
            ? SortDirection.None
            : SortDirection.Asc;
        return { key, direction: nextDir };
      } else {
        return { key, direction: SortDirection.Asc };
      }
    });
  };

  const toggleTypeFilter = () => {
    setFilterType((prev) =>
      prev === ""
        ? TradeType.Sell
        : prev === TradeType.Sell
        ? TradeType.Buy
        : ""
    );
  };

  const filteredData = mockData.filter((row) => {
    return filterType === "" || row.type === filterType;
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key || direction === SortDirection.None) return 0;

    const valA = a[key];
    const valB = b[key];

    if (typeof valA === "number" && typeof valB === "number") {
      return direction === SortDirection.Asc ? valA - valB : valB - valA;
    }

    return 0;
  });

  const formatDate = (iso: string) => {
    const date = new Date(iso);
    return date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <div className={baseClass}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>

              <TableCell>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={toggleTypeFilter}
                  >
                    Type {filterType && `(${filterType})`}
                  </span>
                  <IconButton
                    size="small"
                    onClick={toggleTypeFilter}
                  ></IconButton>
                </Stack>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.Price}
                  direction={sortConfig.direction || "asc"}
                  onClick={() => handleSort(SortKey.Price)}
                >
                  Price
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.Total}
                  direction={sortConfig.direction || "asc"}
                  onClick={() => handleSort(SortKey.Total)}
                >
                  Total
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.PriceSol}
                  direction={sortConfig.direction || "asc"}
                  onClick={() => handleSort(SortKey.PriceSol)}
                >
                  Price SOL
                </TableSortLabel>
              </TableCell>

              <TableCell>
                <TableSortLabel
                  active={sortConfig.key === SortKey.AmountHype}
                  direction={sortConfig.direction || "asc"}
                  onClick={() => handleSort(SortKey.AmountHype)}
                >
                  Amount HYPE
                </TableSortLabel>
              </TableCell>

              <TableCell>Marker</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{formatDate(row.date)}</TableCell>
                <TableCell
                  className={row.type === TradeType.Sell ? "sell" : "buy"}
                >
                  {row.type}
                </TableCell>
                <TableCell>${row.price.toFixed(5)}</TableCell>
                <TableCell>${row.total.toFixed(2)}</TableCell>
                <TableCell>${row.priceSol.toFixed(5)}</TableCell>
                <TableCell>{row.amountHype.toLocaleString()}</TableCell>
                <TableCell>{row.marker}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableTradeHistory;
