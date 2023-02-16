import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseJsonUrl = "https://jsonplaceholder.typicode.com";

export const todosApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: baseJsonUrl
  }),
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos'
    }),
    getTodoById: builder.query({
      query: (todoId) => `/todos/${todoId}`
    })
  })
});

export const { useGetTodosQuery, useGetTodoByIdQuery } = todosApi;