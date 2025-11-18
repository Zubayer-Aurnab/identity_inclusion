import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const ceoApi = createApi({
    reducerPath: 'ceoApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['Ceo'],
    endpoints: (builder) => ({
        ceo: builder.query({
            query: () => ({
                url: `get-ceo`,
                method: 'GET',
            }),
            providesTags: ['Ceo'],
        }),
    }),
});

export const { useCeoQuery } = ceoApi;
