// src/utils/baseQuery.ts
import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseUrl = import.meta.env.VITE_API_URL
export const createCustomBaseQuery = () => {
    const customBaseQuery = async (args, api, extraOptions) => {
        const baseQuery = fetchBaseQuery({
            baseUrl,
            prepareHeaders: (headers) => {
                // const token = localStorage.getItem('token');
                // if (token) headers.set('Authorization', `Bearer ${token}`);
                headers.set('Accept', 'application/json');
                return headers;
            }
        });

        try {
            const result = await baseQuery(args, api, extraOptions);
            // Handle 401 Unauthorized globally
            // if (result.error && result.error.status === 401) {
            //     localStorage.removeItem('token');
            //     localStorage.removeItem('user');
            //     window.location.href = '/signin';

            // }
            // if (result.error && result.error.status === 403) {
            // }

            return result;
        } catch (error) {
            return { error: { status: 500, message: 'Internal Server Error' } };
        }
    };

    return customBaseQuery;
};
