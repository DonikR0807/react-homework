import { api } from "src/shared/api";
import { RateMovieBody, RateMovieResponse } from "./types";

export const rateMovieApi = api.injectEndpoints({
  endpoints: (build) => ({
    rateMovie: build.mutation<RateMovieResponse, RateMovieBody>({
      query: ({ movieId, user_rate }) => ({
        url: `/api/v1/rateMovie`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ movieId: movieId, user_rate }),
      }),
      invalidatesTags: ["Movie"],
    }),
  }),
  overrideExisting: false,
});
