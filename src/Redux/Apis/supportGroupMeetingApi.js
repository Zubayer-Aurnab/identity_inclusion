import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const supportGroupMeetingApi = createApi({
    reducerPath: "supportGroupMeetingApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["PsychoSocial"],
    endpoints: (builder) => ({
        // GET support group meeting
        getSupportGroupMeeting: builder.query({
            query: () => ({
                url: "support-group-meeting",
                method: "GET",
            }),
            providesTags: ["PsychoSocial"],
        }),
    }),
});

export const { useGetSupportGroupMeetingQuery } = supportGroupMeetingApi;
