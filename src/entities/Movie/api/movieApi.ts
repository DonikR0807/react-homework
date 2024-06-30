import { api } from "src/shared/api";
import { FullMovieInfo, MovieSearchResult } from "../types/Movie";

export const movieApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentPage: build.query<MovieSearchResult, string>({
      query: (queryString) => "/api/v1/search" + queryString,
    }),
    getMovieById: build.query<FullMovieInfo, number>({
      query: (movieId) => `/api/v1/movie/${movieId}`,
      providesTags: ["Movie"],
    }),
  }),
  overrideExisting: false,
});
