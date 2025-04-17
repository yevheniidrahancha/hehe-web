export enum SortKey {
  DATE = "date",
  PRICE = "price",
  TOTAL = "total",
  PRICESOL = "priceSol",
  AMOUNTHYPE = "amountHype",
  NONE = "",
}

export enum SortDirection {
  ASC = "asc",
  DESC = "desc",
  NONE = "",
}

export type TradeRow = {
  date: number;
  type: string;
  price: number;
  total: number;
  priceSol: number;
  amountHype: number;
  rank: string;
  marker: string;
};
