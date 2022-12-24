import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const updateImgApi = createApi({
  reducerPath: "updateImgApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.cloudinary.com/v1_1/dk9scwone/image/",
  }),
  tagTypes: ["Post"],
  endpoints: (builder) => ({
    updateImg: builder.mutation<string, Object>({
      query: (formData) => ({
        url: "upload",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export const { useUpdateImgMutation } = updateImgApi;
