export const selectFilterSlice = (state: RootState) => state.filter;

export const selectCurrentGenre = (state: RootState) =>
  selectFilterSlice(state).currentGenre;

export const selectCurrentYear = (state: RootState) =>
  selectFilterSlice(state).currentYear;

export const selectGenreIsNotSelected = (state: RootState) =>
  selectCurrentGenre(state) === "Не выбран";

export const selectYearIsNotSelected = (state: RootState) =>
  selectCurrentYear(state) === "Не выбран";

export const selectCurrentPage = (state: RootState) =>
  selectFilterSlice(state).currentPage;

export const selectTotalPages = (state: RootState) =>
  selectFilterSlice(state).totalPages;
