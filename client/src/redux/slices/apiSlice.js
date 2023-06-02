import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["Tasks"],
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/task",
      keepUnusedDataFor: 600,
      providesTags: ["Tasks", "Task"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: "/task",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/task/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Tasks"],
    }),
    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/task/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Todos",
        { type: "Todo", id: arg.id },
      ],
    }),
  }),
});

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useDeleteTaskMutation,
    useEditTaskMutation,
  } = apiSlice;