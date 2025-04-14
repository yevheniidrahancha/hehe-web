import { SortDirection, SortKey, TradeRow } from "@/types/Types";

export const sortTradeHistory = (
  data: TradeRow[],
  sortConfig: { key: SortKey; direction: SortDirection },
  typeSort: string
): TradeRow[] => {
  const sortFunction = (a: TradeRow, b: TradeRow) => {
    if (typeSort) {
      if (a.type === typeSort && b.type !== typeSort) return -1;
      if (a.type !== typeSort && b.type === typeSort) return 1;
    }
    const { key, direction } = sortConfig;
    if (!key || direction === SortDirection.NONE) return 0;
    const valA = a[key];
    const valB = b[key];
    if (typeof valA === "number" && typeof valB === "number") {
      return direction === SortDirection.ASC ? valA - valB : valB - valA;
    }

    return 0;
  };

  return [...data].sort(sortFunction);
};
