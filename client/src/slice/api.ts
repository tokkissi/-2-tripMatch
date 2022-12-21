import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { FreePostType } from "../type/freePost";

export const freePostApi = createApi({
  reducerPath: "freePostApi",
  tagTypes: ["FreePost"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3500/",
  }),
  endpoints: (builder) => ({
    getAllFreePost: builder.query<FreePostType[], void>({
      query: () => "freePosts",
      providesTags: (result = [], error, arg) =>
        result
          ? [
              "FreePost",
              ...result.map((post) => ({
                type: "FreePost" as const,
                id: post.id,
              })),
            ]
          : [{ type: "FreePost", id: "List" }],
    }),
    getFreePost: builder.query<FreePostType, number | string | undefined>({
      query: (id) => `freePosts/${id}`,
      providesTags: (result, error, arg) => [{ type: "FreePost", id: arg }],
    }),
    updateFreePost: builder.mutation<FreePostType, FreePostType>({
      query: (updatedPost) => ({
        url: `freePosts/${updatedPost.id}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "FreePost", id: arg.id },
      ],
    }),
    createFreePost: builder.mutation<FreePostType, FreePostType>({
      query: (newPost) => ({
        url: "freePosts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["FreePost"],
    }),
    deleteFreePost: builder.mutation<FreePostType, number | string | undefined>(
      {
        query: (id) => ({
          url: `freePosts/${id}`,
          method: "DELETE",
        }),
        invalidatesTags: ["FreePost"],
      },
    ),
  }),
});

export const {
  useGetAllFreePostQuery,
  useGetFreePostQuery,
  useCreateFreePostMutation,
  useUpdateFreePostMutation,
  useDeleteFreePostMutation,
} = freePostApi;
