import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (body) => {
        return {
          url: "/auth-token/",
          method: "post",
          body: body,
        };
      },
    }),
    signUpFarmer: builder.mutation({
      query: (body) => {
        return {
          url: "/farmers/",
          method: "post",
          body: body,
        };
      },
    }),
    getConsultant: builder.query({
      query: () => {
        return {
          url: "/consultant/",
        };
      },
    }),
    verifyEmail: builder.query({
      query: (token) => {
        return {
          url: `/verify/?token=${token}`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginUserMutation,
  useSignUpFarmerMutation,
  useGetConsultantQuery,
  useVerifyEmailQuery,
} = authApi;
