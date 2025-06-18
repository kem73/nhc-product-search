import axios from "axios";
import type { AxiosInstance } from "axios";
import type { GetListingsResponse, Product } from "@/types/product";

const BASE_URL = "https://dummyjson.com";
const PRODUCTS_ENDPOINT = "/products";

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
  },
  timeout: 10000,
});

export const getListings = async (
  signal: AbortSignal,
  param?: string
): Promise<GetListingsResponse> => {
  try {
    const url = param ? `${PRODUCTS_ENDPOINT}/search?q=${param}` : PRODUCTS_ENDPOINT;
    const { data } = await apiClient.get<GetListingsResponse>(url, { signal });
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch product listings.");
  }
};

export const getProductById = async (
  id: string | number,
  signal: AbortSignal
): Promise<Product> => {
  try {
    const { data } = await apiClient.get<Product>(`${PRODUCTS_ENDPOINT}/${id}`, { signal });
    return data;
  } catch (error: any) {
    throw new Error(error?.message || "Failed to fetch product.");
  }
};
