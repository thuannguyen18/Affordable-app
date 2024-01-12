import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}


export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => "/posts"
        }),
        getPost: builder.query<Post, string>({
            query: (id) => `post/${id}`
        })
    })
});

export const { useGetPostsQuery, useGetPostQuery } = postApi;