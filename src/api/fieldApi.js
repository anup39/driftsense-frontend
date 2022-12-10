import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const fieldApi = createApi({
  reducerPath: "fieldApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),

  endpoints: (builder) => ({
    getLocationAcerage: builder.mutation({
      query: (body) => {
        return {
          url: "/location-acerage/",
          method: "post",
          body: body,
        };
      },
    }),
    getCropType: builder.query({
      query: () => {
        return {
          url: "/crop-names/",
        };
      },
    }),
    getCropTypeByID: builder.query({
      query: (id) => {
        return {
          url: `/crop-names/${id}`,
        };
      },
    }),
    getCropGeometry: builder.query({
      query: () => {
        return {
          url: "/crop-types/",
        };
      },
    }),
    getCropGeometryByID: builder.query({
      query: (id) => {
        return {
          url: `/crop-types/${id}`,
        };
      },
    }),
    createField: builder.mutation({
      query: (body) => {
        return {
          url: "/fields/",
          method: "post",
          body: body,
        };
      },
    }),
    updateField: builder.mutation({
      query: ({ id, body }) => {
        return {
          url: `/fields/${id}/`,
          method: "PATCH",
          body: body,
        };
      },
    }),
    deleteField: builder.mutation({
      query: ({ id }) => {
        return {
          url: `/fields/${id}/`,
          method: "DELETE",
        };
      },
    }),
    getFieldById: builder.query({
      query: (id) => {
        return {
          url: `/fields/${id}`,
        };
      },
    }),
    getFarmerGeojson: builder.query({
      query: (farmer_id) => {
        return {
          url: `/field-geojson-farmer/?farmers=${farmer_id}`,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetLocationAcerageMutation,
  useGetCropTypeQuery,
  useGetCropTypeByIDQuery,
  useGetCropGeometryQuery,
  useGetCropGeometryByIDQuery,
  useCreateFieldMutation,
  useUpdateFieldMutation,
  useGetFarmerGeojsonQuery,
  useGetFieldByIdQuery,
  useDeleteFieldMutation,
} = fieldApi;
