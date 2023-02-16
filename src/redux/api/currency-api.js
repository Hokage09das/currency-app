import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const currencyApi = createApi({
  reducerPath: "currency",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.cbr-xml-daily.ru/",
  }),

  endpoints: (build) => ({
    getAllDaily: build.query({
      query: () => `daily_json.js`,
    }),
  }),
});

export const { useGetAllDailyQuery } = currencyApi;
