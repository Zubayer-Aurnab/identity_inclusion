import { configureStore } from '@reduxjs/toolkit';
import { companyApi } from './Apis/companyApi';
import { recentActivitiesApi } from './Apis/recentActivitiesApi';
import { upcomingEventsApi } from './Apis/upcomingEventsApi';
import { ceoApi } from './Apis/ceoApi';
import { teamMembersApi } from './Apis/teamMembersApi';
import { advisorsApi } from './Apis/advisorsApi';
import { supportersApi } from './Apis/supportersApi';

export const store = configureStore({
    reducer: {
        [companyApi.reducerPath]: companyApi.reducer,
        [recentActivitiesApi.reducerPath]: recentActivitiesApi.reducer,
        [upcomingEventsApi.reducerPath]: upcomingEventsApi.reducer,
        [ceoApi.reducerPath]: ceoApi.reducer,
        [teamMembersApi.reducerPath]: teamMembersApi.reducer,
        [advisorsApi.reducerPath]: advisorsApi.reducer,
        [supportersApi.reducerPath]: supportersApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(companyApi.middleware)
            .concat(recentActivitiesApi.middleware)
            .concat(upcomingEventsApi.middleware)
            .concat(ceoApi.middleware)
            .concat(teamMembersApi.middleware)
            .concat(advisorsApi.middleware)
            .concat(supportersApi.middleware)
});
