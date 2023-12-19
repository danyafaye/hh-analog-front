import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/data',
});

const api = createApi({
  baseQuery,
  reducerPath: 'api',
  endpoints: () => ({}),
});

export { api };
