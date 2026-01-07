import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const consultancyApi = createApi({
    reducerPath: "consultancyApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["Consultancy"],
    endpoints: (builder) => ({
        getConsultancy: builder.query({
            query: () => ({
                url: "get-consultancy",
                method: "GET",
            }),
            providesTags: ["Consultancy"],
        }),
    }),
});

export const { useGetConsultancyQuery } = consultancyApi;
