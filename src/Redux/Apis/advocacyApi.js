import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const advocacyApi = createApi({
    reducerPath: "advocacyApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["Advocacy"],
    endpoints: (builder) => ({
        getAdvocacy: builder.query({
            query: () => ({
                url: "get-advocacy",
                method: "GET",
            }),
            providesTags: ["Advocacy"],
        }),
    }),
});

export const { useGetAdvocacyQuery } = advocacyApi;
