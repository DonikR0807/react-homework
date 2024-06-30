export const selectRatedMoviesSlice = (state: RootState) => state.ratedMovies;

export const selectMoviesRatingById = (state: RootState, movieId: string) =>
  selectRatedMoviesSlice(state)[movieId];
