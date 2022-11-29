import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      console.log(token);
      headers.set("Authorization", token ? `Token ${token}` : `Token ${token}`);
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProfile: builder.query({
      query: () => {
        return {
          url: "/user-profile/",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProfileQuery } = profileApi;
