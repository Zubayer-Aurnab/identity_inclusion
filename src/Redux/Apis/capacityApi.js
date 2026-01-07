import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const capacityApi = createApi({
    reducerPath: "capacityApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["Capacity"],
    endpoints: (builder) => ({
        getCapacity: builder.query({
            query: () => ({
                url: "get-capacity",
                method: "GET",
            }),
            providesTags: ["Capacity"],
        }),
    }),
});

export const { useGetCapacityQuery } = capacityApi;
