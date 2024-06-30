export const selectSearchSlice = (state: RootState) => state.search;

export const selectSearchValue = (state: RootState) =>
  selectSearchSlice(state).searchValue;
