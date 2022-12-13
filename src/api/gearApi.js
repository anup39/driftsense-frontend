import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const gearApi = createApi({
  reducerPath: "gearApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),

  endpoints: (builder) => ({
    getAllGears: builder.query({
      query: () => {
        return {
          url: "/gear/",
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllGearsQuery } = gearApi;
