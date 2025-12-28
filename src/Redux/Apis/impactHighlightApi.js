import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const impactHighlightApi = createApi({
    reducerPath: 'impactHighlightApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['ImpactHighlight'],
    endpoints: (builder) => ({
        impactHighlight: builder.query({
            query: () => ({
                url: `get-impact-highlights`,
                method: 'GET',
            }),
            providesTags: ['ImpactHighlight'],
        }),
    }),
});

export const { useImpactHighlightQuery } = impactHighlightApi;
