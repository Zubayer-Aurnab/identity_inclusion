import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const upcomingEventsApi = createApi({
    reducerPath: 'upcomingEventsApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['UpcomingEvents'],
    endpoints: (builder) => ({
        upcomingEvents: builder.query({
            query: () => ({
                url: `upcoming-events`,
                method: 'GET',
            }),
            providesTags: ['UpcomingEvents'],
        }),
    }),
});

export const { useUpcomingEventsQuery } = upcomingEventsApi;
