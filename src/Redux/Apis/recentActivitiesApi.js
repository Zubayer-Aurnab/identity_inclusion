import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';


export const recentActivitiesApi = createApi({
    reducerPath: 'recentActivitiesApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['RecentActivities'],
    endpoints: (builder) => ({
        recentActivities: builder.query({
            query: () => ({
                url: `recent-activities`,
                method: 'GET',
            }),
            providesTags: ['RecentActivities'],
        }),
    }),
});

export const { useRecentActivitiesQuery } = recentActivitiesApi;
