import { createApi } from '@reduxjs/toolkit/query/react';
import { createCustomBaseQuery } from '../createCustomBaseQuery';

export const teamMembersApi = createApi({
    reducerPath: 'teamMembersApi',
    baseQuery: createCustomBaseQuery(),
    tagTypes: ['TeamMembers'],
    endpoints: (builder) => ({
        teamMembers: builder.query({
            query: () => ({
                url: `get-team-members`,
                method: 'GET',
            }),
            providesTags: ['TeamMembers'],
        }),
    }),
});

export const { useTeamMembersQuery } = teamMembersApi;
