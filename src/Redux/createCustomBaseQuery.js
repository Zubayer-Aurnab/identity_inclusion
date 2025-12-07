// src/utils/baseQuery.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_API_URL
export const createCustomBaseQuery = () => {
    const customBaseQuery = async (args, api, extraOptions) => {
        const baseQuery = fetchBaseQuery({
            baseUrl,
            prepareHeaders: (headers) => {
                headers.set('Accept', 'application/json');
                return headers;
            }
        });

        try {
            const result = await baseQuery(args, api, extraOptions);
            return result;
        } catch (error) {
            return { error: { status: 500, message: 'Internal Server Error' } };
        }
    };

    return customBaseQuery;
};
