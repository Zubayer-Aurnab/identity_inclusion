import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const portfolioApi = createApi({
    reducerPath: "portfolioApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["Portfolio"],
    endpoints: (builder) => ({
        // GET current portfolio
        getPortfolio: builder.query({
            query: () => ({
                url: "portfolio",
                method: "GET",
            }),
            providesTags: ["Portfolio"],
        }),
    }),
});

export const { useGetPortfolioQuery } = portfolioApi;
