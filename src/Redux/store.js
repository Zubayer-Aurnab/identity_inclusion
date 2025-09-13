import { configureStore } from '@reduxjs/toolkit';
import { companyApi } from './Apis/companyApi';
import { recentActivitiesApi } from './Apis/recentActivitiesApi';
import { upcomingEventsApi } from './Apis/upcomingEventsApi';

export const store = configureStore({
    reducer: {
        [companyApi.reducerPath]: companyApi.reducer,
        [recentActivitiesApi.reducerPath]: recentActivitiesApi.reducer,
        [upcomingEventsApi.reducerPath]: upcomingEventsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(companyApi.middleware)
            .concat(recentActivitiesApi.middleware)
            .concat(upcomingEventsApi.middleware)
});
