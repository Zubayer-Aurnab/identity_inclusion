import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const impactApi = createApi({
    reducerPath: 'impactApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['Impact'],
    endpoints: (builder) => ({
        impact: builder.query({
            query: () => ({
                url: `get-impact`,
                method: 'GET',
            }),
            providesTags: ['Impact'],
        }),
    }),
});

export const { useImpactQuery } = impactApi;
