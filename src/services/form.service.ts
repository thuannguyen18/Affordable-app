import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const formApi = createApi({
    reducerPath: "formApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"}),
    endpoints: (builder) => ({
        login: builder.mutation<User, Omit<User, "username" | "confirmPassword">>({
            query(body) {
                return {
                    url: "/login",
                    method: "POST",
                    body
                }
            }
        }),
        signUp: builder.mutation<User, any>({
            query(body) {
                return {
                    url: "/sign-up",
                    method: "POST",
                    body
                }
            }
        })
    })
});

export const { useLoginMutation, useSignUpMutation } = formApi;