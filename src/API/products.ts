import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";
import { IProducts } from "../interfaces";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1" }),
  endpoints: (builder) => ({
    getProducts: builder.query<IProducts[], []>({
      query: () => ({
        url: "/products",
      }),
    }),
  }),
});
export const { useGetProductsQuery } = productsApi;
