import axios, { AxiosResponse } from "axios";
import { getAuthToken } from "@dynamic-labs/sdk-react-core";

export const API_URL = "https://hype.cheap/";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const authToken = getAuthToken();

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config;
});

const apiRequest = async <T>(
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE",
  data?: any
): Promise<T> => {
  const response: AxiosResponse<T> = await api({
    method,
    url,
    data,
  });

  return response.data;
};

export interface Holder {
  address: string;
  supply: number;
  amount: number;
  amount_usd: number;
}

interface Pagination {
  current_page: 0;
  total_pages: 0;
  total_items: 0;
}

interface HoldersResponseModel {
  result: {
    items: Holder[];
    pagination: Pagination;
  };
}

export interface Leaderboard {
  no: number;
  address: string;
  rewards: number;
  invited: {
    address: string;
  };
}

interface LeaderboardResponseModel {
  result: {
    items: Leaderboard[];
    pagination: Pagination;
  };
}

export const fetchHolders = async (): Promise<HoldersResponseModel> => {
  return await apiRequest("v2/info/holders", "GET");
};

export const fetchLeaderboard = async (): Promise<LeaderboardResponseModel> => {
  return await apiRequest("v2/info/leaderboard", "GET");
};

export interface ExchangeHistory {
  timestamp: number;
  type: string;
  price_usd: number;
  price_eth: number;
  amount_usd: number;
  amount: number;
  maker: string;
}

interface ExchangeHistoryResponseModel {
  result: {
    items: ExchangeHistory[];
    pagination: Pagination;
  };
}

export const fetchExchangeHistory =
  async (): Promise<ExchangeHistoryResponseModel> => {
    return await apiRequest("v2/exchange/history", "GET");
  };
