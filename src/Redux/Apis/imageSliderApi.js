import { createApi } from "@reduxjs/toolkit/query/react";
import { createCustomBaseQuery } from "../createCustomBaseQuery";

export const imageSliderApi = createApi({
    reducerPath: "imageSliderApi",
    baseQuery: createCustomBaseQuery(),
    tagTypes: ["ImageSlider"],
    endpoints: (builder) => ({
        getImageSlider: builder.query({
            query: ({ type } = {}) => ({
                url: "get-slider-images",
                method: "GET",
                params: type ? { type } : undefined,
            }),
            providesTags: ["ImageSlider"],
        }),
    }),
});

export const { useGetImageSliderQuery } = imageSliderApi;
