export enum SortKey {
  DATE = "timestamp",
  PRICE = "price_usd",
  TOTAL = "amount",
  PRICESOL = "amount_usd",
  AMOUNTHYPE = "amount_usd",
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

export enum BuyWidgetTabs {
  BUYLEVELS = "BUYLEVELS",
  SWAP = "SWAP",
}
