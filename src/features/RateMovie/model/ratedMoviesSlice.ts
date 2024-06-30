import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Istate } from "./types";

const initialState: Istate = {};

const ratedMoviesSlice = createSlice({
  name: "ratedMovies",
  initialState,
  reducers: {
    movieWasRated(
      state,
      action: PayloadAction<{
        movieId: string;
        rating: number;
      }>,
    ) {
      const { movieId, rating } = action.payload;
      state[movieId] = rating;
    },
    resetRatings() {
      return {};
    },
  },
});

export const { movieWasRated, resetRatings } = ratedMoviesSlice.actions;
export const { reducer: ratedMoviesReducer } = ratedMoviesSlice;
