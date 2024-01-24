import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
}

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co"}),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => "/api/v1/products"
        })
    })
});

export const { useGetProductsQuery } = productApi;