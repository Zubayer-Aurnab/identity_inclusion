import { configureStore } from '@reduxjs/toolkit';
import { companyApi } from './Apis/companyApi';
import { recentActivitiesApi } from './Apis/recentActivitiesApi';
import { upcomingEventsApi } from './Apis/upcomingEventsApi';
import { ceoApi } from './Apis/ceoApi';
import { teamMembersApi } from './Apis/teamMembersApi';
import { advisorsApi } from './Apis/advisorsApi';
import { supportersApi } from './Apis/supportersApi';
import { impactApi } from './Apis/impactApi';
import { impactHighlightApi } from './Apis/impactHighlightApi';
import { psychoSocialApi } from './Apis/psychoSocialApi';
import { imageSliderApi } from './Apis/imageSliderApi';
import { supportGroupMeetingApi } from './Apis/supportGroupMeetingApi';
import { advocacyApi } from './Apis/advocacyApi';
import { consultancyApi } from './Apis/consultancyApi';
import { capacityApi } from './Apis/capacityApi';

export const store = configureStore({
    reducer: {
        [companyApi.reducerPath]: companyApi.reducer,
        [recentActivitiesApi.reducerPath]: recentActivitiesApi.reducer,
        [upcomingEventsApi.reducerPath]: upcomingEventsApi.reducer,
        [ceoApi.reducerPath]: ceoApi.reducer,
        [teamMembersApi.reducerPath]: teamMembersApi.reducer,
        [advisorsApi.reducerPath]: advisorsApi.reducer,
        [supportersApi.reducerPath]: supportersApi.reducer,
        [impactApi.reducerPath]: impactApi.reducer,
        [impactHighlightApi.reducerPath]: impactHighlightApi.reducer,
        [psychoSocialApi.reducerPath]: psychoSocialApi.reducer,
        [imageSliderApi.reducerPath]: imageSliderApi.reducer,
        [supportGroupMeetingApi.reducerPath]: supportGroupMeetingApi.reducer,
        [advocacyApi.reducerPath]: advocacyApi.reducer,
        [consultancyApi.reducerPath]: consultancyApi.reducer,
        [capacityApi.reducerPath]: capacityApi.reducer,
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
            .concat(impactApi.middleware)
            .concat(impactHighlightApi.middleware)
            .concat(psychoSocialApi.middleware)
            .concat(imageSliderApi.middleware)
            .concat(supportGroupMeetingApi.middleware)
            .concat(advocacyApi.middleware)
            .concat(consultancyApi.middleware)
            .concat(capacityApi.middleware)
});
