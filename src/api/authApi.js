import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  prepareHeaders: (headers) => {
    headers.set("Access-Control-Allow-Origin", "*");
    return headers;
  },
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
    updateFarmer: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/farmers/${id}/`,
          method: "PATCH",
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
    forgotPasswordEmail: builder.mutation({
      query: (body) => {
        return {
          url: "/forgot-password-email-check/",
          method: "post",
          body: body,
        };
      },
    }),
    changePassword: builder.mutation({
      query: (body) => {
        return {
          url: "/password-reset/",
          method: "post",
          body: body,
        };
      },
    }),
    googleLogin: builder.mutation({
      query: (body) => {
        return {
          url: "/google/",
          method: "post",
          body: body,
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
  useUpdateFarmerMutation,
  useGetConsultantQuery,
  useVerifyEmailQuery,
  useForgotPasswordEmailMutation,
  useChangePasswordMutation,
  useGoogleLoginMutation,
} = authApi;
