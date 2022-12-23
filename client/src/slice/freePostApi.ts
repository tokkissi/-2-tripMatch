import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";
import type { FreePostType } from "../type/freePost";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params });
      return { data: result.data };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const freePostApi = createApi({
  reducerPath: "freePostApi",
  tagTypes: ["FreePost"],
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    // 전체 자유게시글을 불러옴
    // query params 로 page, region을 보냄
    // 예시 : useGetAllFreePostQuery({page: 1, region: ""})
    getAllFreePost: builder.query<
      FreePostType[],
      { page: number; region: string }
    >({
      query: ({ page, region }) => {
        return {
          url: "api/main/communities",
          method: "get",
          params: { page, region },
        };
      },
      providesTags: (result = [], error, arg) =>
        result
          ? [
              "FreePost",
              ...result.map((post) => ({
                type: "FreePost" as const,
                id: post.communityId,
              })),
            ]
          : ["FreePost"],
    }),
    // id에 해당하는 게시글을 불러옴
    getFreePost: builder.query<FreePostType, string | undefined>({
      query: (communityId) => ({
        url: `api/main/communities/${communityId}`,
        method: "get",
      }),
      providesTags: (result, error, arg) => [{ type: "FreePost", id: arg }],
    }),
    // id에 해당하는 게시글을 업데이트
    updateFreePost: builder.mutation<FreePostType, FreePostType>({
      query: (updatedPost) => ({
        url: `api/main/communities/${updatedPost.communityId}`,
        method: "PUT",
        body: updatedPost,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: "FreePost", id: arg.communityId },
      ],
    }),
    // 게시글 추가
    createFreePost: builder.mutation<FreePostType, FreePostType>({
      query: (newPost) => ({
        url: "api/main/communities/community",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["FreePost"],
    }),
    // id에 해당하는 게시글 삭제
    deleteFreePost: builder.mutation<FreePostType, string | undefined>({
      query: (communityId) => ({
        url: `api/main/communities/${communityId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["FreePost"],
    }),
  }),
});

export const {
  useGetAllFreePostQuery,
  useGetFreePostQuery,
  useCreateFreePostMutation,
  useUpdateFreePostMutation,
  useDeleteFreePostMutation,
} = freePostApi;
