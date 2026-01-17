import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const getInvolbeApi = createApi({
    reducerPath: "getInvolbeApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["GetInvolbeApi"],
    endpoints: (builder) => ({
        getGetInvolbeApi: builder.query({
            query: () => ({
                url: "get-jobs",
                method: "GET",
            }),
            providesTags: ["GetInvolbeApi"],
        }),
    }),
});

export const { useGetGetInvolbeApiQuery } = getInvolbeApi;
