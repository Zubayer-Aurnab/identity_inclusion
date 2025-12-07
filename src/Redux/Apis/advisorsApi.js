import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const advisorsApi = createApi({
    reducerPath: 'advisorsApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['Advisors'],
    endpoints: (builder) => ({
        advisors: builder.query({
            query: () => ({
                url: `get-advisors`,
                method: 'GET',
            }),
            providesTags: ['Advisors'],
        }),
    }),
});

export const { useAdvisorsQuery } = advisorsApi;
