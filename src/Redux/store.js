import { configureStore } from '@reduxjs/toolkit';
import { companyApi } from './Apis/companyApi';

export const store = configureStore({
    reducer: {
        [companyApi.reducerPath]: companyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(companyApi.middleware)
});
