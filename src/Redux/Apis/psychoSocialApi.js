import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const psychoSocialApi = createApi({
    reducerPath: "psychoSocialApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["PsychoSocial"],
    endpoints: (builder) => ({
        getPsychoSocialSupport: builder.query({
            query: () => ({
                url: "get-psycho-social-support",
                method: "GET",
            }),
            providesTags: ["PsychoSocial"],
        }),
    }),
});

export const { useGetPsychoSocialSupportQuery } = psychoSocialApi;
