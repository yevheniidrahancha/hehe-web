import { ExchangeHistory } from "@/api/api";
import { SortDirection, SortKey } from "@/types/Types";

export const sortTradeHistory = (
  data: ExchangeHistory[],
  sortConfig: { key: SortKey; direction: SortDirection },
  typeSort: string
): ExchangeHistory[] => {
  const sortFunction = (a: ExchangeHistory, b: ExchangeHistory) => {
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
