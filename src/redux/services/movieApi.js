import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  tagTypes: ["Movies"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    prepareHeaders: (headers) => {
      headers.set("Authorization", `Bearer ${process.env.TOKEN}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopMovies: builder.query({
      query: ({ id }) => ({
        url: `/movie/popular?language=en-US&page=${id}`,
        params: { id: id },
        method: "GET",
      }),
      transformResponse: (response) => response.results,
    }),

    getTopSeries: builder.query({
      query: ({ id }) => ({
        url: `/tv/popular?language=en-US&page=${id}`,
        params: { id: id },
        method: "GET",
      }),
      transformResponse: (response) => response.results,
    }),
    getTrending: builder.query({
      query: () => ({
        url: `/trending/all/day?language=en-US`,
        method: "GET",
      }),
      transformResponse: (response) => response.results,
    }),
    getSearchMovie: builder.query({
      query: ({ name }) => ({
        url: `/search/movie?query=${name}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetTopMoviesQuery,
  useGetTopSeriesQuery,
  useGetTrendingQuery,
  useGetSearchMovieQuery,
} = movieApi;
