import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const supportersApi = createApi({
    reducerPath: 'supportersApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['Supporters'],
    endpoints: (builder) => ({
        supporters: builder.query({
            query: () => ({
                url: `get-supporters`,
                method: 'GET',
            }),
            providesTags: ['Supporters'],
        }),
    }),
});

export const { useSupportersQuery } = supportersApi;
