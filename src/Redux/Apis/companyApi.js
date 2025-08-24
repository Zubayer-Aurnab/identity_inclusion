import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const companyApi = createApi({
    reducerPath: 'companyApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['Company'],
    endpoints: (builder) => ({
        company: builder.query({
            query: () => ({
                url: `get-company`,
                method: 'GET',
            }),
            providesTags: ['Company'],
        }),
    }),
});

export const { useCompanyQuery } = companyApi;
