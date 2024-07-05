import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { BASE_URL } from '../../utils/const.ts';

export const parcelApi = createApi({
    reducerPath: "parcelApi",
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    tagTypes: ["Parcel"],
    endpoints: (builder) => ({
        getParcelDetails: builder.query({
            query: ():string =>
                `/parcel-details`,
            providesTags: ['Parcel'],
        }),
        getAddress: builder.query({
            query: ():string =>
                `/address`,
            providesTags: ['Parcel'],
        }),

    })
})

export const {
    useGetParcelDetailsQuery,
    useGetAddressQuery
} = parcelApi
